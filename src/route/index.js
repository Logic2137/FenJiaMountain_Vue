import { createRouter,createWebHistory } from 'vue-router'


const routes = [
    {
      path: '/',
    //   redirect: '/', // 重定向
      component: () => import('../views/HomeView.vue'),
    //   children:[
      
    //     ]
    },
    {
        path: '/matrix',
        component: () => import('@/views/MatrixView.vue'),
    }
    
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router