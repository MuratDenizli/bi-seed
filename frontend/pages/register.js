import Head from 'next/head'

import styles from '../styles/Home.module.css'
import cn from 'classnames'

import Layout from '../components/common/Auth/Layout'
import Register from '../components/common/Auth/Register'

export default function UserRegister() {
  return (
    <div className={cn(styles.container)}>
      <Head>
        <title>Üye Olma Sayfası & Üye Ol - BI-SEED Türkiye / Turkey | </title>
        <meta
          name="description"
          content="BI-SEED hesabınıza bu sayfadan üye olma işlemini gerçekleştirebilir, eğer daha önce kayıt olduysanız giriş ekranından işlem yapabilirsiniz."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Register></Register>
      </Layout>
    </div>
  )
}
