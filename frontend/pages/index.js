import Head from 'next/head'

import styles from '../styles/Home.module.css'
import cn from 'classnames'

import Layout from '../components/common/Layout'

export default function Home() {
  return (
    <div className={cn(styles.container)}>
      <Head>
        <title>BI-SEED Türkiye / Turkey | Online Moda Alışveriş Sitesi</title>
        <meta
          name="description"
          content="BI-SEED’in yeni online koleksiyonunu keşfedin Kadın, erkek ve çocuk ürünlerinde son trendler ve yeni sezonun editoryalleri."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout></Layout>
    </div>
  )
}
