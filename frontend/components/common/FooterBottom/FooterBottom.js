import Image from 'next/image'

import styles from './FooterBottom.module.css'

function FooterBottom() {
  return (
    <div className={styles.footerBottom}>
      <div className={styles.paymentlogos}>
        <p>Güvenli Ödeme Sistemi Sunuyoruz</p>
        <div>
          <Image
            src="/images/gomlek-kampanya-1.webp"
            alt="Picture of the author"
            layout="responsive"
            width={100}
            height={25}
          />
        </div>
      </div>
      <div className={styles.cardlogos}> </div>
    </div>
  )
}

export default FooterBottom
