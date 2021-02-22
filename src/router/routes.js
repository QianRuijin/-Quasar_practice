import Cimdr from '../pages/Cimdr'
import CimdrLayout from '../layouts/CimdrLayout'
import SimpleLayout from '../layouts/SimpleLayout'
import Detail from '../pages/Detail'
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
    component: CimdrLayout,
    children: [
      { path: '', component: Cimdr }
    ]
  },
  {
    path: '/detail',
    component: CimdrLayout,
    children: [
      { path: '', component: Detail }
    ]
  },
  {
    path: '/register',
    component: SimpleLayout,
    children: [
      { path: '', component: Register }
    ]
  },
  {
    path: '/forgetPWD',
    component: SimpleLayout,
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
