import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Counter from '../components/Counter.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/counter',
  },
  {
    path: '/counter',
    name: 'counter',
    component: Counter,
    props: (route: any) => {
      // console.log(route);
      // ROUTE.PARAMS, HREF...
      const id = Number(route.query.id);
      const msg = 'Counter as prop through router';
      return isNaN(id)
        ? { id: 1, msg }
        : { id, msg }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue'),
    children: [
      {
        path: 'team',
        name: 'team',
        component: () => import(/* webpackChunkName: "TheTeam" */ '../components/TheTeam.vue'),
      },
      {
        path: '',
        redirect: { name: 'about' }
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "NoPageFound" */ '../shared/pages/NoPageFound.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
