import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Register.module.css'

function Register() {
  return (
    <div className={styles.login}>
      <div className={styles.box}>
        <h1>Üye Ol</h1>
        <input
          type="email"
          name="email"
          placeholder="E-posta adresinizi giriniz."
        />
        <input
          type="password"
          name="password"
          placeholder="Şifrenizi giriniz."
        />
        <input type="submit" value="Giriş Yap" />
        <Link href="/">
          <a>Şifremi Unuttum</a>
        </Link>
      </div>
      <div className={styles.loginImg}>
        <img
          src="/images/mm_landing_sostenibilidad_1904.webp"
          alt="Picture of the author"
          className={styles.img}
        />
      </div>
    </div>
  )
}

export default Register