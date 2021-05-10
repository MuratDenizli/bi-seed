import Image from 'next/image'
import Link from 'next/link'

import styles from './Trends.module.css'

function Trends() {
  return (
    <div className={styles.trends}>
      <Link href="/">
        <a className={styles.bgWrap}>
          <Image
            alt="Mountains"
            src={'/images/87018634_70-99999999_01.jpg'}
            layout="fill"
            className={styles.img}
          />
          <div className={styles.bgTextArea}>
            <h2>Ayın Trendleri</h2>
            <span>Daha fazla keşfet</span>
          </div>
        </a>
      </Link>
      <Link href="/">
        <a className={styles.bgWrap}>
          <Image
            alt="Mountains"
            src="/images/mm_landing_sostenibilidad_1904.webp"
            layout="fill"
            className={styles.img}
          />
          <div className={styles.bgTextArea}>
            <h2>Sezon Ürünleri</h2>
            <span>Daha fazla keşfet</span>
          </div>
        </a>
      </Link>
      <Link href="/">
        <a className={styles.bgWrap}>
          <Image
            alt="Mountains"
            src="/images/she_lino_300521.webp"
            layout="fill"
            className={styles.img}
          />
          <div className={styles.bgTextArea}>
            <h2>Beyaz Modeller</h2>
            <span>Daha fazla keşfet</span>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Trends
