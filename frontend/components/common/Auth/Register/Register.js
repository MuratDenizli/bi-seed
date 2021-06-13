import React from 'react'
import Link from 'next/link'

import styles from './Register.module.css'

//ccsler Layouta taşınacak
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
        <div className={styles.checkboxArea}>
          <label htmlFor="checkbox-true">
            <input id="checkbox-true" type="checkbox" name="marketing-email" />
            <p>
              Kampanyalardan haberdar olmak için elektronik ileti almak
              istiyorum.
            </p>
          </label>
        </div>
        <input type="submit" value="Üye Ol" />
        <div className={styles.links}>
          <Link href="/userlogin">
            <a>Giriş yap</a>
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

export default Register
