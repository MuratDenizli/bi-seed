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
    autoplay: true,
    autoplaySpeed: 40000,
    arrows: false
  }

  return (
    <div className={styles.banner}>
      <Slider {...settings}>
        <video autoPlay muted loop>
          <source
            src="https://player.vimeo.com/external/518475316.hd.mp4?s=33b20602fd10dee2b749cb1b96afda6b5034c30a&profile_id=175"
            type="video/mp4"
          ></source>
        </video>
        <Image
          src="/images/gomlek-kampanya-1.webp"
          alt="Picture of the author"
          layout="responsive"
          width={16}
          height={9}
          className={styles.img}
        />
        <video autoPlay muted loop>
          <source
            src="https://static1.lacoste.com/videos/marketing/1A-durableelegance-aveclogo-dk.mp4"
            type="video/mp4"
          ></source>
        </video>
        <Image
          src="/images/LB_22.04_Essential_Dye-25_1440x.webp"
          alt="Picture of the author"
          layout="responsive"
          width={16}
          height={9}
          className={styles.img}
        />
      </Slider>
    </div>
  )
}

export default Banner
