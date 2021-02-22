import Cimdr from '../pages/Cimdr'
import CimdrLayout from '../layouts/CimdrLayout'
import Register from '../pages/Register'
import ForgetPWD from '../pages/ForgetPWD'

const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]
  // },
  {
    path: '/',
    name: 'Cimdr',
    component: CimdrLayout,
    children: [
      { path: '', component: Cimdr }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: CimdrLayout,
    children: [
      { path: '', component: Register }
    ]
  },
  {
    path: '/forgetPWD',
    name: 'ForgetPWD',
    component: CimdrLayout,
    children: [
      { path: '', component: ForgetPWD }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
