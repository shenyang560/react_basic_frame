/**
 * 网络请求配置
 */
import React from 'react';
import axios from 'axios'; // 引入axios
import ReactDOM from 'react-dom';
import {message,Spin} from 'antd'
import './spin.css'


/*// 显示加载动画
function showLoading () {
    let dom = document.createElement('div');
    dom.setAttribute('id', 'loading');
    document.body.appendChild(dom);
    ReactDOM.render( <Spin size="large" >
        <div className='loading_box' />
    </Spin>, dom)
}
// 隐藏加载动画
function hideLoading () {
    document.body.removeChild(document.getElementById('loading'))
}*/

/**
 * http request 拦截器
 */
axios.interceptors.request.use(
    (config) => {
        let gToken=localStorage.getItem('token');
      /*  config.data = JSON.stringify(config.data);*/
        config.headers = {
            "Content-Type": "application/json",
            'Authorization': gToken?'JWT '+ gToken.split("&&")[0]:''//用户身份验证信息
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
/**
 * http response 拦截器
 */
axios.interceptors.response.use(
    (response) => {
        if(response.status===200 || response.status===201){
            return response.data;
        }
    },
    (error) => {
        msag(error)
    }
);
let outFF = {
    /**
     * 封装get方法
     * @param url  请求url
     * @param params  请求参数
     * @returns {Promise}
     */
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params,
            }).then((response) => {
                resolve(response);
            })
                .catch((error) => {
                    msag(error);
                    reject(error);
                });
        });
    },

    /**
     * 封装post请求
     * @param url
     * @param data
     * @returns {Promise}
     */

    post(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data).then(
                (response) => {
                    //关闭进度条
                    resolve(response);
                },
                (err) => {
                    msag(err);
                    reject(err);
                }
            );
        });
    },

    /**
     * 封装patch请求
     * @param url
     * @param data
     * @returns {Promise}
     */
    patch(url, data = {}) {
        return new Promise((resolve, reject) => {
            axios.patch(url, data).then(
                (response) => {
                    resolve(response);
                },
                (err) => {
                    msag(err);
                    reject(err);
                }
            );
        });
    },

    /**
     * 封装put请求
     * @param url
     * @param data
     * @returns {Promise}
     */

    put(url, data = {}) {
        return new Promise((resolve, reject) => {
            axios.put(url, data).then(
                (response) => {
                    resolve(response);
                },
                (err) => {
                    msag(err);
                    reject(err);
                }
            );
        });
    }
}

export default outFF
//失败提示
function msag(err) {
   // hideLoading ()
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                message.error(err.response.data.non_field_errors);
                break;
            case 401:
                message.error("未授权，请登录");
                break;

            case 403:
                message.error("拒绝访问");
                break;

            case 404:
                message.error("请求地址出错");
                break;

            case 408:
                message.error("请求超时");
                break;

            case 500:
                message.error("服务器内部错误");
                break;

            case 501:
                message.error("服务未实现");
                break;

            case 502:
                message.error("网关错误");
                break;

            case 503:
                message.error("服务不可用");
                break;

            case 504:
                message.error("网关超时");
                break;

            case 505:
                message.error("HTTP版本不受支持");
                break;
            default:
        }
    }
}
