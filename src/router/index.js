import Vue from 'vue'
import Router from 'vue-router'
import NavHeader from '@/components/Header'
import MyFooter from '@/components/Footer'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      components: {
        'default':NavHeader,
        'footer':MyFooter
      }
    }
  ]
})
