import { useId, type FormEvent } from 'react'
import styles from './Newsletter.module.scss'

const Newsletter = () => {
  const nameId = useId()
  const emailId = useId()
  const termsId = useId()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className={styles.section} aria-label="Newsletter">
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.copyBlock}>
            <h2 className={styles.title}>Inscreva-se na nossa newsletter</h2>
            <p className={styles.subtitle}>
              Assine a nossa newsletter e receba as novidades e conteúdos
              exclusivos da Econverse.
            </p>
          </header>

          <form className={styles.formBlock} onSubmit={handleSubmit}>
            <div className={styles.fieldsRow}>
              <div className={styles.field}>
                <label className={styles.visuallyHidden} htmlFor={nameId}>
                  Nome
                </label>
                <input
                  id={nameId}
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.visuallyHidden} htmlFor={emailId}>
                  E-mail
                </label>
                <input
                  id={emailId}
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                INSCREVER
              </button>
            </div>

            <label className={styles.checkboxRow} htmlFor={termsId}>
              <input
                id={termsId}
                className={styles.checkbox}
                type="checkbox"
                name="terms"
              />
              <span className={styles.checkboxLabel}>
                Aceito os termos e condições
              </span>
            </label>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
