import type { Product } from '../types/product'

export const PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
const PRODUCTS_REQUEST_URL = import.meta.env.DEV ? '/api/products' : PRODUCTS_URL

let productsCache: Product[] | null = null

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null

const normalizePhotoUrl = (value: string): string => {
  if (
    value.startsWith('http://') ||
    value.startsWith('https://') ||
    value.startsWith('data:')
  ) {
    return value
  }

  try {
    return new URL(value, PRODUCTS_URL).toString()
  } catch {
    return value
  }
}

const normalizeProduct = (item: unknown): Product | null => {
  if (!isRecord(item)) {
    return null
  }

  const { productName, descriptionShort, photo, price } = item

  if (
    typeof productName !== 'string' ||
    typeof descriptionShort !== 'string' ||
    typeof photo !== 'string' ||
    typeof price !== 'number' ||
    !Number.isFinite(price)
  ) {
    return null
  }

  return {
    productName: productName.trim(),
    descriptionShort: descriptionShort.trim(),
    photo: normalizePhotoUrl(photo.trim()),
    price: Math.round(price),
  }
}

// The challenge API provides `price` in cents. All UI formatting divides by 100.
export const formatCurrency = (valueInCents: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(valueInCents / 100)

export const fetchProducts = async (): Promise<Product[]> => {
  if (productsCache) {
    return productsCache
  }

  if (import.meta.env.DEV) {
    console.info('[products] url', PRODUCTS_REQUEST_URL)
  }

  let response: Response

  try {
    response = await fetch(PRODUCTS_REQUEST_URL)
  } catch (error) {
    throw new Error(
      `Failed to fetch products from ${PRODUCTS_REQUEST_URL}: ${
        error instanceof Error ? error.message : String(error)
      }`,
    )
  }

  if (import.meta.env.DEV) {
    console.info('[products] response status', response.status)
  }

  if (!response.ok) {
    let responseText = ''

    try {
      responseText = await response.text()
    } catch {
      responseText = ''
    }

    throw new Error(
      `Failed to load products: ${response.status} ${response.statusText}${
        responseText ? ` - ${responseText}` : ''
      }`,
    )
  }

  const payload = (await response.json()) as unknown

  if (import.meta.env.DEV) {
    if (isRecord(payload)) {
      console.info('[products] raw payload', {
        success: payload.success,
        hasProductsArray: Array.isArray(payload.products),
        payload,
      })
    } else {
      console.info('[products] raw payload', payload)
    }
  }

  if (!isRecord(payload)) {
    throw new Error('Invalid products payload: response is not an object')
  }

  if (payload.success !== true) {
    throw new Error(`Invalid products payload: success is ${String(payload.success)}`)
  }

  const rawProducts = payload.products

  if (!Array.isArray(rawProducts)) {
    throw new Error('Invalid products payload: products is not an array')
  }

  const products = rawProducts
    .map((item) => normalizeProduct(item))
    .filter((item): item is Product => item !== null)

  productsCache = products

  return products
}
