import React from 'react'

import Image from 'next/image'

import styles from './Category.module.css'
import { Filter } from '../../icons'
import ProductBox from '../../ui/ProductBox'

function Category({ ...props }) {
  return (
    <div className={styles.category}>
      <h1>{props.category.name}</h1>
      <div className={styles.filter}>
        <span>291 Sonuç</span>
        <button>
          <Filter></Filter>Sırala ve Filtrele
        </button>
      </div>
      <div className={styles.products}>
        {props.category.products.map((product) => (
          <ProductBox></ProductBox>
        ))}
      </div>
    </div>
  )
}

export default Category
