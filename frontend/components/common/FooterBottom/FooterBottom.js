import React from 'react'
import Image from 'next/image'

import styles from './FooterBottom.module.css'

function FooterBottom() {
  return (
    <div className={styles.footerbottom}>
      <div className={styles.logosarea}>
        <div className={styles.paymentlogos}>
          <p>Güvenli Ödeme Sistemi Sunuyoruz</p>
          <div>
            <div
              style={{ position: 'relative', width: '80px', height: '20px' }}
            >
              <Image
                src="/images/payment/3dsecure.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <div
              style={{ position: 'relative', width: '80px', height: '20px' }}
            >
              <Image
                src="/images/payment/visa.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <div
              style={{ position: 'relative', width: '80px', height: '20px' }}
            >
              <Image
                src="/images/payment/masterpass.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className={styles.cardlogos}>
          <p>LC Waikiki'de Taksit Avantajları</p>
          <div>
            <div
              style={{ position: 'relative', width: '80px', height: '20px' }}
            >
              <Image
                src="/images/payment/advantage.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <div
              style={{ position: 'relative', width: '80px', height: '20px' }}
            >
              <Image
                src="/images/payment/axess.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <div
              style={{ position: 'relative', width: '80px', height: '20px' }}
            >
              <Image
                src="/images/payment/bankkartcombo.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <div
              style={{ position: 'relative', width: '80px', height: '20px' }}
            >
              <Image
                src="/images/payment/bankkartcombo.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <div
              style={{ position: 'relative', width: '80px', height: '20px' }}
            >
              <Image
                src="/images/payment/bonus.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <div
              style={{ position: 'relative', width: '80px', height: '20px' }}
            >
              <Image
                src="/images/payment/maximum.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <div
              style={{ position: 'relative', width: '80px', height: '20px' }}
            >
              <Image
                src="/images/payment/paraf.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <div
              style={{ position: 'relative', width: '80px', height: '20px' }}
            >
              <Image
                src="/images/payment/world.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(FooterBottom)
