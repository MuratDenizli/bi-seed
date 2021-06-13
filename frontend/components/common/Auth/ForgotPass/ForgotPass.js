import React from 'react'
import Link from 'next/link'

import styles from './ForgotPass.module.css'

function ForgotPass() {
  return (
    <div className={styles.forgotPass}>
      <div className={styles.box}>
        <h1>Şifre Yenileme</h1>
        <p>
          Şifre yenileme bağlantısını gönderebilmemiz için e-posta adresinize
          ihtiyacımız var.
        </p>
        <input
          type="email"
          name="email"
          placeholder="E-posta adresinizi giriniz."
        />
        <input type="submit" value="Şifremi Yenile" />
        <input type="button" value="Önceki Sayfaya Dön" />
      </div>
      <div className={styles.forgotPassImg}>
        <img
          src="/images/mm_landing_sostenibilidad_1904.webp"
          alt="Picture of the author"
          className={styles.img}
        />
      </div>
    </div>
  )
}

export default ForgotPass
