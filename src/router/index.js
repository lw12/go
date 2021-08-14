import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/home/Home')
const City=()=>import('@/views/city/City')
const Detail=()=>import('@/views/detail/Detail')

Vue.use(Router)
const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/city',
    component: City
  },
  {
    path:'/detail',
    component:Detail
  }
]
export default new Router({
  routes,
  mode: 'history'
})
