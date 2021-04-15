import React from 'react'

import styles from './Navbar.module.css'

import * as Icon from '../../icons'

function Navbar({ children, ...props }) {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <a href="#">New</a>
          <ul>
            <li>Collections</li>
            <li>Benjicoin</li>
          </ul>
        </li>
        <li>
          <a href="#">Man</a>
        </li>
        <li>
          <a href="#">Woman</a>
        </li>
        <li>
          <a href="#">Kids</a>
        </li>
      </ul>
      <div className={styles.logo}>
        <a href="/">LES BENJAMINS</a>
      </div>
      <ul>
        <li>
          <a href="#">Sale</a>
        </li>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">
            <Icon.SearchSolid />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon.UserRegular />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon.ShoppingBagSolid />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
