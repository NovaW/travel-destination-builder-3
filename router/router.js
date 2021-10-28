import Countries from '../views/Countries.vue'
import MyList from '../views/MyList.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Countries',
    component: Countries,
  },
  {
    path: '/mylist',
    name: 'MyList',
    component: MyList,
  }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
  })
