import React,{ Component } from "react";
export default class Index extends Component{
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h1>这是首页</h1><br />
                <h3><a href='#/mod/news'>跳转到news</a><br /></h3>
                <h3><a href='#/mod/otherNews'>跳转到othernews</a></h3>
            </div>
        );
    }
}