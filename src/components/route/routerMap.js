/*所有的页面路由配置*/
import asyncComponent from './asyncComponent.js'////懒加载导入的文件
/*Magic Comments魔术注释法     webpackChunkName: 'index' 能够修改生成文件的name名称*/
const index = asyncComponent(() => import(/* webpackChunkName: 'index' */ '../../pages/index/index'));
const mod = asyncComponent(() => import(/* webpackChunkName: 'mod' */ '../../pages/samePart/samePart_head'));
const news = asyncComponent(() => import(/* webpackChunkName: 'mod' */ '../../pages/news/index'));


let RouterMap= [
    { path: "/", name: "index", component: index ,chinese:'首页',isShow:true},
    { path: "/mod", name: "mod", component: mod ,chinese:'详情页框架',isShow:true,
       children:[
           {path: "/mod/news", name: "news", component: news ,chinese:'新闻中心',isShow:true},
       ]
    },
];

export default  RouterMap