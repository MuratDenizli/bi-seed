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
        <Link href="/">
          <a>Şifremi Unuttum</a>
        </Link>
      </div>
      <div className={styles.loginImg}>
        <Image
          src="/images/gomlek-kampanya-1.webp"
          alt="Picture of the author"
          layout="responsive"
          width={16}
          height={9}
          className={styles.img}
        />
      </div>
    </div>
  )
}

export default Login
