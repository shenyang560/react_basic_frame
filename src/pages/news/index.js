import React,{ Component } from "react";
export default class Index extends Component{
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h1>这是新闻中心</h1>
                <h3><a href='#/'>跳转到首页</a><br /></h3>
                <h3><a href='#/mod/otherNews'>跳转到othernews</a></h3>
            </div>
        );
    }
}