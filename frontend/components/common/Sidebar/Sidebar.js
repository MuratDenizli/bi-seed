import React, { useState } from 'react'

import styles from './Sidebar.module.css'

import * as Icon from '../../icons'

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(null)

  const onClick = (itemIndex) => {
    let _activeIndex = activeIndex ? [...activeIndex] : []

    if (_activeIndex.length === 0) {
      _activeIndex.push(itemIndex)
    } else {
      const index = _activeIndex.indexOf(itemIndex)
      if (index === -1) {
        _activeIndex.push(itemIndex)
      } else {
        _activeIndex.splice(index, 1)
      }
    }
    setActiveIndex(_activeIndex)
  }

  return (
    <div className={styles.sidebar}>
      <Icon.TimesSolid />
      <ul>
        <li>
          <a href="#" onClick={() => onClick(0)}>
            <span>New</span>
            {activeIndex && activeIndex.some((index) => index === 0) ? (
              <Icon.MinusSolid />
            ) : (
              <Icon.PlusSolid />
            )}
          </a>
          {activeIndex && activeIndex.some((index) => index === 0) && (
            <ul>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Benjicoin</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" onClick={() => onClick(1)}>
            <span>Man</span>
            {activeIndex && activeIndex.some((index) => index === 1) ? (
              <Icon.MinusSolid />
            ) : (
              <Icon.PlusSolid />
            )}
          </a>
          {activeIndex && activeIndex.some((index) => index === 1) && (
            <ul>
              <li>
                <a href="#">Apparel</a>
              </li>
              <li>
                <a href="#">Activewear</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#">
            <span>Woman</span>
            {activeIndex && activeIndex.some((index) => index === 2) ? (
              <Icon.MinusSolid />
            ) : (
              <Icon.PlusSolid />
            )}
          </a>
        </li>
        <li>
          <a href="#">
            <span>Kids</span>
            {activeIndex && activeIndex.some((index) => index === 3) ? (
              <Icon.MinusSolid />
            ) : (
              <Icon.PlusSolid />
            )}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
