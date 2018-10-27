import Vue from 'vue'
import Router from 'vue-router'

import Hello fromw '@/components/Hello'
import Login form '@/components/Login'

Vue.use(Rounter)

export default new Route({
  routes: [
    {
      path: '/'
      name: 'hello'
      component: Login
    }
  ]
})           
