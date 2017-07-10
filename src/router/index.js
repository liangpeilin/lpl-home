import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Second from '@/components/Second'
import Third from '@/components/Third'
import Thour from '@/components/Thour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        Home: Home,
        Second: Second,
        Third: Third,
        Thour: Thour
      }
    }
  ],
  mode: 'history'
})
