import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myComponent from '../components/myComponent'
import childrenCom from '../components/childrenCom'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default: HelloWorld,
        store: childrenCom
      },
      children: [
      ]
    }, {
      path: '/my/:id',
      name: 'hello-my',
      component: myComponent,
      children: [
        {
          path: 'store',
          name: 'c',
          component: childrenCom
        }
      ]
    },
    {
      path: '/red',
      redirect: '/'
    }
  ]
})
