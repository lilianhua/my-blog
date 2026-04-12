import Layout from './Layout.vue'
import BlogList from './BlogList.vue'
import './custom.css'

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('BlogList', BlogList)
  },
}
