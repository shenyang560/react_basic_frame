/*懒加载导入的文件,实现JS代码分片打包到多个文件中*/
import React, { Component } from 'react'

export default function asyncComponent (importComponent) {
    class AsyncComponent extends Component {
        state = {
            component: null // 动态加载的组件
        }
        componentDidMount () {
            importComponent().then(mod => {
                this.setState({
                    component: mod.default ? mod.default : mod
                })
            })
        }
        render () {
            // 渲染动态加载的组件
            const C = this.state.component
            return C ? <C {...this.props} /> : null
        }
    }
    return AsyncComponent
}