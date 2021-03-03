import React,{ Component } from "react";
export default class Index extends Component{
    render() {
        return (
            <div>
                <h1>这是另一个新闻中心</h1>
                <h3><a href='#/'>跳转到首页</a><br /></h3>
                <h3><a href='#/mod/news'>跳转到news</a></h3>
            </div>
        );
    }
}