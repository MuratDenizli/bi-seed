import Layout from '../../components/common/Layout'
import Category from '../../components/common/Category'

import data from '../../lib/mook/products.json'

export default function CategoryPage() {
  return (
    <Layout>
      <Category category={data}></Category>
    </Layout>
  )
}
