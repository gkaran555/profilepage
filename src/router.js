import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Gallery from './views/Gallery.vue'
import Social from './views/Social.vue'

Vue.use(Router)

export default new Router({
  
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/goranb',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/social',
      name: 'social',
      component: Social
    }
  ]
})
