import {API_PUBLIC_PATH} from './env'
import tools from './mUtils';
// GET请求
const GET = (url, data, header) => {
    return request(url, 'GET', data, header)
}

// POST请求
const POST = (url, data, header) => {
    return request(url, 'POST', data, header)
}

const request = (url, method, data, header, isShowLoading = true) => {
    isShowLoading && wx.showLoading && wx.showLoading({
        title: '加载中...'
    })
    var promise = new Promise(function(resolve, reject) {
        wx.request({
            url: API_PUBLIC_PATH + url,
            data: data,
            method: method,
            header: header ? header : {},
            success: function(res) {
                isShowLoading && wx.hideLoading && wx.hideLoading();
                if (res.statusCode === 200) {
                    if (res.data) {
                        if (res.data.code === 1) {
                            resolve(stringToJson(res.data));
                        } else {
                            reject({
                                msg: res.data.msg,
                                code: res.data.code
                            });
                            tools.error(res.data.msg);
                        }
                    } else {
                        reject({
                            msg: '服务器错误,请稍后重试',
                            code: 2
                        });
                        tools.error('服务器错误');
                    }
                } else {
                    reject({
                        msg: '网络错误,请稍后重试',
                        code: res.statusCode
                    });
                    tools.error('网络错误');
                }
            },
            fail: function(res) {
                // fail调用接口失败
                isShowLoading && wx.hideLoading && wx.hideLoading()
                reject({
                    msg: '网络错误,请稍后重试',
                    code: 404
                });
                tools.error('网络错误');
            }
        })
    });
    return promise;
}

export default {
    get: GET,
    post: POST
}
