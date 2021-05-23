import styles from './EmailSubscription.module.css'

function EmailSubscription() {
  return (
    <div className={styles.emailsub}>
      <h3>E-BÜLTEN ABONELİĞİ</h3>
      <span>Bİ-SEED'den haberin olsun.</span>
      <div className={styles.inputarea}>
        <input
          type="email"
          name="email"
          placeholder="E-posta adresinizi giriniz."
        />
        <input type="submit" value="Gönder" />
      </div>
    </div>
  )
}

export default EmailSubscription
