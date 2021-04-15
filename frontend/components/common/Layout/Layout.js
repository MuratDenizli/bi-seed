import React from 'react'

import Navbar from '../Navbar'

import styles from './Layout.module.css'

function Layout() {
  return (
    <div className={styles.layout}>
      <Navbar></Navbar>
      <div></div>
    </div>
  )
}

export default Layout
