import React from 'react'
import Link from 'next/link'
import { Phone, Whatsapp, Document } from '../../icons'

import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <ul>
          <li>Yardım</li>
          <li>
            <Link href="/">Sıkça Sorulan Sorular</Link>
          </li>
          <li>
            <Link href="/">İade ve Değişim</Link>
          </li>
          <li>
            <Link href="/">Site Haritası</Link>
          </li>
          <li>
            <Link href="/">Kullanım Koşulları</Link>
          </li>
          <li>
            <Link href="/">İşlem Rehberi</Link>
          </li>
        </ul>
        <ul>
          <li>Kurumsal</li>
          <li>
            <Link href="/">Hakkımızda</Link>
          </li>
          <li>
            <Link href="/">Mağazalarımız</Link>
          </li>
          <li>
            <Link href="/">Kurumsal/Corporate</Link>
          </li>
          <li>
            <Link href="/">Kariyer Fırsatları</Link>
          </li>
          <li>
            <Link href="/">Kurumsal Destek</Link>
          </li>
        </ul>
        <ul>
          <li>Politikalar</li>
          <li>
            <Link href="/">Aydınlatma Metni</Link>
          </li>
          <li>
            <Link href="/">Veri Gizliliği ve Güvenliği Politikası </Link>
          </li>
        </ul>
      </div>
      <div className={styles.contacts}>
        <span>BI-SEED Destek</span>
        <div className={styles.form}>
          <Link href="/">
            <a>
              <Document /> İletişim Formu
            </a>
          </Link>
          <Link href="/">
            <a>
              <Phone /> 444 4 444
            </a>
          </Link>
        </div>
        <Link href="/">
          <a className={styles.whatsapp}>
            <Whatsapp /> Whatsapp Destek 444 4 529
          </a>
        </Link>
      </div>
    </div>
  )
}

export default React.memo(Footer)
