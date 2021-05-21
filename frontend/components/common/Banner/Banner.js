import React from 'react'

import Image from 'next/image'
import Slider from 'react-slick'

import styles from './Banner.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 0,
    arrows: false
  }

  return (
    <div className={styles.banner}>
      <Slider {...settings}>
        <Image
          src="/images/gomlek-kampanya-1.webp"
          alt="Picture of the author"
          layout="responsive"
          width={1920}
          height={800}
          className={styles.img}
        />
        <Image
          src="/images/LB_22.04_Essential_Dye-25_1440x.webp"
          alt="Picture of the author"
          layout="responsive"
          width={1920}
          height={800}
          className={styles.img}
        />
      </Slider>
    </div>
  )
}

export default Banner
