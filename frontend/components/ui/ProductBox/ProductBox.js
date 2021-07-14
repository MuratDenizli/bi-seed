import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Slider from 'react-slick'

import styles from './ProductBox.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ProductBox({ product }) {
  console.log('porps:', product)
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 40000,
    arrows: false
  }
  return (
    <div className={styles.box}>
      <a className={styles.imageArea}>
        <Link href="#">
          <Slider {...settings}>
            {product.images.map((image) => (
              <img
                src={image.url}
                alt={image.altText}
                key={image.url}
                height={image.height}
                width={image.width}
              />
            ))}
          </Slider>
        </Link>
        {product.sale && <span>{product.sale}%</span>}
      </a>
      <a className={styles.name}>{product.name}</a>
      <p className={styles.price}>
        {product.price.value} {product.price.currencyCode}
      </p>
      {product.sale && (
        <p className={styles.sale}>
          {product.price.value -
            parseFloat((Math.round(product.price.value) * product.sale) / 100)}
          &nbsp;{product.price.currencyCode}
        </p>
      )}
    </div>
  )
}

export default ProductBox
