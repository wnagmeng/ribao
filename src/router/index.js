import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/one/index'
import manage from '@/components/one/manage'
import write from '@/components/one/write'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: "index",component :index,
        children: [
          {
            path:'write',
            name:'write',
            component:write
          },
          {
            path:'manage',
            name:'manage',
            component:manage
          }
        ]
    },
  ]
})
