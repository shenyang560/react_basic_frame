import React from 'react'
import RouterMap from './routerMap'
import {HashRouter,Route,Switch} from 'react-router-dom'
//import MediaQuery from "react-responsive";
//import {MediaQueryWidthMin} from "../components/MediaQueryWidth";
import SamePart_head from "../../pages/samePart/samePart_head";
import Error from '../../pages/404/index'
class RouterIndex extends React.Component{
    componentDidMount() {}
    render(){
        return (
            // 根容器
            <HashRouter>
                <div style={{width:'100%',height:'100%',position:'relative'}}>
                   {/* <Header/>*/}
                    {/* 路由规则，Route是配置路由的规则，同时也是一个占位符 */}
                    <Switch>
                        {RouterMap.map((item,index)=>{
                           if(item.name==="mod"){ //如果有页面有部分内容通用时，主页面为通用部分，不通用的部分使用路由切换
                               return <Route key={index} path={item.path}>
                                   {/* SamePart_head 通用页面组件 */}
                                   <SamePart_head>
                                       <Switch>
                                           {item.children.map((item1,index1)=>{
                                               return  <Route exact key={index1} path={item1.path} component={item1.component}/>
                                           })}
                                           {/*匹配不到路由的时候跳转到404*/}
                                           <Route component={Error} />
                                       </Switch>
                                   </SamePart_head>
                               </Route>
                           }else {
                               if(item.name==="index"){
                                   return <Route key={index} path={item.path} exact component={item.component} />
                               }else {
                                   return <Route key={index} path={item.path} component={item.component} />
                               }
                           }
                        })}
                        {/*匹配不到路由的时候跳转到404*/}
                        <Route component={Error} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default RouterIndex;