import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

import Crear from '../components/Crear.vue'
import Editar from '../components/Editar.vue'
import Listar from '../components/Listar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/crear',
      name: 'Crear',
      component: Crear
    },
    {
      path: '/editar/:id',
      name: 'Editar',
      component: Editar
    },
    {
      path: '/listar',
      name: 'Listar',
      component: Listar
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
