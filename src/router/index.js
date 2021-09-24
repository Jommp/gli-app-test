import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin-profile/:profileId',
    name: 'AdminProfile',
    component: () => import('../views/AdminProfile.vue'),      
  },
  {
    path: '/admin-profile/:profileId/edit',
    name: 'EditAdmin',
    component: () => import('../views/EditAdmin.vue'),      
  }
]

const router = new VueRouter({
  routes
})

export default router
