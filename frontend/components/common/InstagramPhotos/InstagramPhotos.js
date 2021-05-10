import Image from 'next/image'
import Link from 'next/link'

import Slider from 'react-slick'

import styles from './InstagramPhotos.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function InstagramPhotos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerPadding: 0,
    arrows: false
  }
  return (
    <div className={styles.insta}>
      <Slider {...settings}>
        <Link href="/">
          <a className={styles.bgImg}>
            <Image
              src="/images/gomlek-kampanya-1.webp"
              alt="Picture of the author"
              layout="fill"
              className={styles.img}
            />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.bgImg}>
            <Image
              src="/images/LB_22.04_Essential_Dye-25_1440x.webp"
              alt="Picture of the author"
              layout="fill"
              className={styles.img}
            />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.bgImg}>
            <Image
              src="/images/gomlek-kampanya-1.webp"
              alt="Picture of the author"
              layout="fill"
              className={styles.img}
            />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.bgImg}>
            <Image
              src="/images/gomlek-kampanya-1.webp"
              alt="Picture of the author"
              layout="fill"
              className={styles.img}
            />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.bgImg}>
            <Image
              src="/images/gomlek-kampanya-1.webp"
              alt="Picture of the author"
              layout="fill"
              className={styles.img}
            />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.bgImg}>
            <Image
              src="/images/gomlek-kampanya-1.webp"
              alt="Picture of the author"
              layout="fill"
              className={styles.img}
            />
          </a>
        </Link>
      </Slider>
    </div>
  )
}

export default InstagramPhotos
