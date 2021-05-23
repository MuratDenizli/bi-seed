import React, { Children } from 'react'

import Navbar from '../Navbar'
import Footer from '../Footer'

import styles from './Layout.module.css'
import FooterBottom from '../FooterBottom'

function Layout({ ...props }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
      <FooterBottom />
    </div>
  )
}

export default Layout
