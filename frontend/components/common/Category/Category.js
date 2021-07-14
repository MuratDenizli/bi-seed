import React from 'react'
import styles from './Category.module.css'
import { Filter } from '../../icons'
import ProductBox from '../../ui/ProductBox'

function Category({ ...props }) {
  return (
    <div className={styles.category}>
      <h1>{props.category.name}</h1>
      <div className={styles.filter}>
        <span>{props.category.products.length} Sonuç</span>
        <button>
          <Filter></Filter>Sırala ve Filtrele
        </button>
      </div>
      <div className={styles.products}>
        {props.category.products.map((product) => (
          <ProductBox product={product} key={product.id}></ProductBox>
        ))}
      </div>
    </div>
  )
}

export default Category
