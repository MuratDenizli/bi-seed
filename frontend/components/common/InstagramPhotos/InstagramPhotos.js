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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true
  }
  return (
    <div className={styles.insta}>
      <div className={styles.title}>
        <h2>#INSTAGRAM'DA BİZ</h2>
        <span>
          Seçtiğiniz parçaları kombinlemeden önce instagram sayfamıza gözatın.
        </span>
      </div>
      <div className={styles.instapic}>
        <Slider {...settings}>
          <Image
            src="/images/mm_landing_sostenibilidad_1904.webp"
            alt="Picture of the author"
            width={393}
            height={594}
            className={styles.img}
          />
          <Image
            src="/images/she_lino_300521.webp"
            alt="Picture of the author"
            width={393}
            height={594}
            className={styles.img}
          />
          <Image
            src="/images/87018634_70-99999999_01.jpg"
            alt="Picture of the author"
            width={393}
            height={594}
            className={styles.img}
          />
          <Image
            src="/images/LB_22.04_Essential_Dye-25_1440x.webp"
            alt="Picture of the author"
            width={393}
            height={594}
            className={styles.img}
          />
          <Image
            src="/images/gomlek-kampanya-1.webp"
            alt="Picture of the author"
            width={393}
            height={594}
            className={styles.img}
          />
          <Image
            src="/images/LB_22.04_Essential_Dye-25_1440x.webp"
            alt="Picture of the author"
            width={393}
            height={594}
            className={styles.img}
          />
          <Image
            src="/images/gomlek-kampanya-1.webp"
            alt="Picture of the author"
            width={393}
            height={594}
            className={styles.img}
          />
          <Image
            src="/images/LB_22.04_Essential_Dye-25_1440x.webp"
            alt="Picture of the author"
            width={393}
            height={594}
            className={styles.img}
          />
          <Image
            src="/images/gomlek-kampanya-1.webp"
            alt="Picture of the author"
            width={393}
            height={594}
            className={styles.img}
          />
          <Image
            src="/images/LB_22.04_Essential_Dye-25_1440x.webp"
            alt="Picture of the author"
            width={393}
            height={594}
            className={styles.img}
          />
        </Slider>
      </div>
    </div>
  )
}

export default InstagramPhotos
