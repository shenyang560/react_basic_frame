import React,{ Component } from "react";
export default class Index extends Component{
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <div>
                    <h1>详情页通用部分代码</h1>
                    <p style={{color:'#999'}}>备注：不停的点击news和othernews可以查看路由之间切换动画</p>
                </div>
                {/*不同部分，通过路由切换*/}
                {this.props.children}
            </div>
        );
    }
}