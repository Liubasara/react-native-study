import { Platform, DeviceEventEmitter } from "react-native";
import { Actions } from "react-native-router-flux";
import config from '../config'

const { BaseUrl } = config

/**
 * 网络请求的工具类
 */
export default class NetUtils {

    /**
     * 普通的get请求
     * @param {*} url 地址
     * @param {*} params  参数
     */
    static get(url, params = {}) {
        let newParams = this.getNewParams(params);
        let newUrl = BaseUrl + url;
        if (newUrl.includes("?")) newUrl += "&";
        else newUrl += "?";

        for (let key in newParams) {
            newUrl = newUrl + key + "=" + newParams[key] + "&";
        }
        newUrl = newUrl.substr(0, newUrl.length - 1);
        __DEV__ && console.log("===getRequest===", newUrl);
        return new Promise((resolve, reject) => {
            fetch(newUrl, {
                credentials: "include",
                method: "GET"
            }).then(response => {
                return response.json();
            }).then(json => {
                __DEV__ && console.log("===getResponse===", newUrl, json);
                resolve(json);
            }).catch(error => {
                __DEV__ && console.log("get======error", newUrl, error.toString());
                reject({ code: -11, msg: error.toString() });
            }).done();
        });
    }


    /**
     * @param {*} url
     * @param {*} params
     * @param {*} callback
     */
    static post(url, params = {}) {
        url = BaseUrl + url;
        __DEV__ && console.log("===post=url", url, params);
        return new Promise((resolve, reject) => {
            fetch(url, {
                credentials: "include",
                method: "POST",
                body: JSON.stringify(params),
                headers: { "Content-Type": "application/json;charset=UTF-8" }
            }).then(response => {
                return response.json();
            }).then(json => {
                __DEV__ && console.log("===post=json ", url, json);
                return resolve(json)
            }).catch(error => {
                __DEV__ &&
                    console.log("===post error=", url, params, error);
                reject({ code: -11, msg: error });
            }).done();
        });
    }



    /**
     * @param {*} url
     * @param {*} service
     * @param {*} jsonObj
     */
    static postJson(url, jsonObj) {
        url = BaseUrl + url;
        return new Promise((resolve, reject) => {
            fetch(url, {
                credentials: "include",
                method: "POST",
                body: JSON.stringify(jsonObj),
                headers: { "Content-Type": "application/json;charset=UTF-8" }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then(json => {
                    console.log(json);
                    resolve(json);
                })
                .catch(error => {
                    reject(error.toString());
                })
                .done();
        });
    }


    /**
     * 设置公共参数
     * @param {*} params 参数 key-value形式的字符串
     * @return 新的参数
     */
    static getNewParams(params, ) {
        params.platform = Platform.OS;
        return params;
    }

}
