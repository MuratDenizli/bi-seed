import React, { useState } from 'react'

import styles from './Navbar.module.css'

import * as Icon from '../../icons'
import CONST from '../../../constants'
import useWindowSize from '../../../hooks/useWindowSize'

import Sidebar from '../Sidebar'

function Navbar({ children, ...props }) {
  const size = useWindowSize()
  return (
    <div>
      {size.width > CONST.TABLET_SIZE ? (
        <NavbarDesktop />
      ) : (
        <NavbarTablet isOpen={false} />
      )}
    </div>
  )
}

function NavbarDesktop() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <a href="#">New</a>
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
          <a href="#">Man</a>
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
          <a href="#">Woman</a>
        </li>
        <li>
          <a href="#">Kids</a>
        </li>
      </ul>
      <div className={styles.logo}>
        <a href="/">BI-SEED</a>
      </div>
      <ul>
        <li>
          <a href="#">
            <Icon.SearchSolid />
          </a>
        </li>
        <li>
          <a href="/userlogin">
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

function NavbarTablet({ isOpen }) {
  const [openSidebar, setopenSidebar] = useState(isOpen)
  return (
    <div>
      {openSidebar ? (
        <Sidebar isOpen={openSidebar} />
      ) : (
        <div className={styles.navbar}>
          <a
            className={styles.bars}
            onClick={() => setopenSidebar(!openSidebar)}
          >
            <Icon.BarsSolid />
          </a>
          <div className={styles.logo}>
            <a href="/">BI-SEED</a>
          </div>
          <ul>
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
      )}
    </div>
  )
}

export default Navbar
