import React from 'react'

import styles from './Sidebar.module.css'

import * as Icon from '../../icons'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Icon.TimesSolid />
      <ul>
        <li>
          <a href="#">
            <span>New</span>
            <Icon.MinusSolid />
          </a>
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Benjicoin</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span>Man</span>
            <Icon.PlusSolid />
          </a>
          <ul>
            <li>
              <a href="#">Apparel</a>
            </li>
            <li>
              <a href="#">Activewear</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span>Woman</span>
            <Icon.PlusSolid />
          </a>
        </li>
        <li>
          <a href="#">
            <span>Kids</span>
            <Icon.PlusSolid />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
