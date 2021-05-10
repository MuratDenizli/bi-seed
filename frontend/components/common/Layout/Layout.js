import React, { Children } from 'react'

import Navbar from '../Navbar'

import styles from './Layout.module.css'

function Layout({ ...props }) {
  return (
    <div className={styles.layout}>
      <Navbar></Navbar>
      <div>{props.children}</div>
    </div>
  )
}

export default Layout
