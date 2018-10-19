import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/one/index'
import manage from '@/components/one/manage'
import write from '@/components/one/write'
import groups from '@/components/one/groups'
import person from '@/components/one/person'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: "index",
    component: index,
    children: [{
        path: 'write',
        name: 'write',
        component: write
      },
      {
        path: 'manage',
        name: 'manage',
        component: manage
      }, {
        path: 'groups',
        name: 'groups',
        component: groups
      }, {
        path: 'person',
        name: 'person',
        component: person
      }
    ]
  }, ]
})
