import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Login from "../views/login";
import Main from "../views/main/Main";
import Changerpass from "../views/main/pass/Changerpass"
import list from "../views/main/list";
import Categoryadd from "../views/main/category/Add";
import Index from "../views/main/category/Index";
import Categoryedit from "../views/main/category/Categoryedit";
import Stayhomeadd from "../views/main/stayhome/Stayhomeadd";
import Stayhomeindex from "../views/main/stayhome/Stayhomeindex";
import Stayhomeedit from "../views/main/stayhome/Stayhomeedit";
import Echart from "../views/main/echars/Echarts";
let router=new VueRouter({
         routes:[
             {path:'/',component:Main,name:'index',redirect:'/echar',
             meta:{
                 auth:true,title:'首页'
             },
                 children:[{
                     path:'cateadd',component:Categoryadd,name:'Cateadd',
                     meta:{
                         auth:true,
                         title:'分类添加'
                     }
                 },
                     {path:'cateindex',component:Index,name:'Cateindex',
                         meta:{
                             auth:true,
                             title:'分类查询'
                         }
                     },
                     {path:'cateedit',component:Categoryedit,name:'Cateedit',
                         meta:{
                             auth:true,
                             title:'分类编辑'
                         },
                     },
                     {path:'stayhomeadd',component:Stayhomeadd,name:'stayhomeadd',
                         meta:{
                             auth:true,
                             title:'民宿添加'
                         },
                     },
                     {path:'changepass',component:Changerpass,name:'changepass',
                         meta:{
                             auth:true,
                             title:'密码修改'
                         }
                     },
                     {path:'stayhomeindex',component:Stayhomeindex,name:'stayhomeindex',
                         meta:{
                             auth:true,
                             title:'名宿查询'
                         }
                     },
                     {path:'stayhomeedit/:id',component:Stayhomeedit,name:'stayhomeedit',
                         meta:{
                             auth:true,
                             title:'名宿编辑'
                         }
                     },
                     {path:'echar',component:Echart,name:'echar',
                         meta:{
                             auth:true,
                             title:'可视化'
                         }
                     }]
             },
             {path: '/login',component:Login,name:'login',
             meta: {
                 auth: false,title:'登录'
             }
             },
             {path: '/list',component:list,name:'list',
             meta: {
                 auth: true,title:'列表'
             }
             },
         ]
})
router.beforeEach((to, from, next) =>{
    let title=to.meta.title || '首页';
    document.title=title;
    if(to.meta.auth){
        let token=sessionStorage.getItem('token');
        token =token && token.trim();
        if(token){
            next();
        }else{
           next({name:'login',query:{redirect:to.name}});
        }
    }else {
        next();
    }

} )
export default router;