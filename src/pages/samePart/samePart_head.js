import React,{ Component } from "react";
export default class Index extends Component{
    render() {
        return (
            <div>
                <div>通用部分</div>
                {this.props.children}
            </div>
        );
    }
}