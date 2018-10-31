import Vue from 'vue'
import Router from 'vue-router'

import Hello fromw '@/components/Hello'
import Login form '@/components/Login'

Vue.use(Rounter)

export default new Router({
  routes: [
    {
      path: '/hello'
      name: 'hello'
      component: Hello
    },
     path:'/login',
     name: 'login'
     component:Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
     }
  ]
})       
