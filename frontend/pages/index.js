import styles from '../styles/Home.module.css'
import cn from 'classnames'

import Layout from '../components/common/Layout'

export default function Home() {
  return (
    <div className={cn(styles.container)}>
      <Layout></Layout>
    </div>
  )
}
