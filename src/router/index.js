import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Header from '@/components/Header'
import LeftBox from '@/components/LeftBox'
import userTable from '@/components/UserTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: userTable,
      hidden: true
    },
    {
      path: '/header',
      component: Header,
      hidden: true
    },
    {
      path: '/login',
      component: Login,
      hidden: true
    }
  ]
})
