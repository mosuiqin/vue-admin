import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/one',
      // redirect: '/one/itemOne',
      alwaysShow: true, // will always show the root menu
      name: 'one',
      component: HomeView,
      children: [{
          path: 'itemOne',
          component: () => import('@/views/one/itemOne.vue'),
          // name: 'itemOne'
        },
        {
          path: 'itemTwo',
          component: () => import('@/views/one/itemTwo.vue'),
          name: 'itemTwo'
        },
        {
          path: 'itemThree',
          component: () => import('@/views/one/itemThree.vue'),
          name: 'itemThree'
        },
        {
          path: 'itemFour',
          component: () => import('@/views/one/itemFour.vue'),
          name: 'itemFour'
        }
      ]
    },
    {
      path: '/two',
      redirect: '/two/itemOne',
      alwaysShow: true, // will always show the root menu
      name: 'two',
      component: HomeView,
      children: [{
        path: 'itemOne',
        component: () => import('@/view/two/itemOne.vue'),
        // name: 'itemOne2'
      }]
    },
    {
      path: '/three',
      redirect: '/three/itemOne',
      alwaysShow: true, // will always show the root menu
      name: 'three',
      component: HomeView,
      children: [{
          path: 'itemOne',
          component: () => import('@/views/three/itemOne.vue'),
          name: 'itemOne2'
        },
        {
          path: 'itemTwo',
          component: () => import('@/views/three/itemTwo.vue'),
          name: 'itemTwo2'
        },
        {
          path: 'itemThree',
          component: () => import('@/views/three/itemThree.vue'),
          name: 'itemThree3'
        },
        {
          path: 'itemFour',
          component: () => import('@/views/three/itemFour.vue'),
          name: 'itemFour4'
        }
      ]
    }
  ]
})

export default router