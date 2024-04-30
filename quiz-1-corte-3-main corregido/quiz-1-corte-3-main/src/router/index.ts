import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import VistaMod from '../views/VistaMod.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/modulo',
    name: 'Modulos',
    component: VistaMod
  },
  {
    path: '/rol',
    name: 'Roles',
    component: VistaMod
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router