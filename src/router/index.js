import Vue from 'vue'
// 引入vue-router插件
import VueRouter from 'vue-router'
// vue使用vue-router
Vue.use(VueRouter)
// 引入页面组件
// import vIndex from '../components/index.vue'
import vLogin from '../components/login.vue'
import vHeader from '../components/header.vue'
import vBottom from '../components/bottom.vue'
import vMain from '../components/main.vue'
import vNav from '../components/nav.vue'
import vUser from '../components/user.vue'
import vUserInfo from '../components/userInfo.vue'
import vProfile from '../components/profile.vue'



const router = new VueRouter({
    // mode:'history',
    // 定义路由映射配置表
    routes:[
        {path:'/',
        // component:vIndex,
        component:()=>import('../components/index.vue'),
        children:[
           {
               path:'',
               components:{
                   header:vHeader,
                   main:vMain,
                   bottom:vBottom,
                   nav:vNav
               }
           },
           {
            path:'user',
            // 路由独享守卫
            /* beforeEnter:function(to,from,next){
                // next();
                next('/login');//执行默认路由规则
                // next(false);
            }, */
            components:{
                header:vHeader,
                main:vUser,
                bottom:vBottom,
                nav:vNav
            }
        },
        {
            path:'user/info',
            components:{
                header:vHeader,
                main:vUserInfo,
                bottom:vBottom,
                nav:vNav
            }
        },
        {
            path:'profile',
            components:{
                header:vHeader,
                main:vProfile,
                bottom:vBottom,
                nav:vNav
            }
        },
        ]},
       
        {path:'/login',component:vLogin,alias:'/denglu'},
        // {path:'*',redirect:'/'}
      
    ]
  })
//   加入全局守卫
router.beforeEach((to,from,next)=>{
    // 验证用户登录状态，如果用户没有登录，则只能访问登录页面
    if(to.fullPath === '/login'){
        next();
    }else{
        var userinfo = localStorage.getItem('userinfo');
        if(userinfo === null){
            console.log('跳转到登录页面。。。');
            next('/login');
        }else{
            next();
        }
    }
})
// router.afterEach((to,from,next)=>{
//     console.log(to,2);
//     console.log(from,2);
   
// })
  export default router;