import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Login.module.css'

function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.box}>
        <h1>Giriş Yap</h1>
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
        <div className={styles.links}>
          <Link href="/">
            <a>Şifremi Unuttum</a>
          </Link>
          <Link href="/register">
            <a>Hesap Oluştur</a>
          </Link>
        </div>
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

export default Login
