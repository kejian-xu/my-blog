import Vue from 'vue'
import Router from 'vue-router'
import NavHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
import MyBody from '@/components/Body'
import editor from '@/components/editor'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      components: {
        'default':NavHeader,
        'body':MyBody,
        'footer':MyFooter
      }
    },
    {
      path:'/addArticle',
      name:'editor',
      component: editor
    }
  ]
})
