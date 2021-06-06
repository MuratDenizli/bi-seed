import Head from 'next/head'

import styles from '../styles/Home.module.css'
import cn from 'classnames'

import Layout from '../components/common/Auth/Layout'
import Login from '../components/common/Auth/Login'

export default function UserLogin() {
  return (
    <div className={cn(styles.container)}>
      <Head>
        <title>Üye Giriş Sayfası & Üye Ol - BI-SEED Türkiye / Turkey | </title>
        <meta
          name="description"
          content="BI-SEED hesabınıza bu sayfadan üye girişi işlemini gerçekleştirebilir, eğer daha önce kayıt olmadıysanız kayıt işlemini tamamlayabilirsiniz."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Login></Login>
      </Layout>
    </div>
  )
}
