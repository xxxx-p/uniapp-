import {
  baseURL
} from './const.js'

function request(options) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${baseURL}${options.url}`,
      method: options.method || 'GET',
      data: options.data,
      success: function(res) {
        resolve(res)
      },
      fail: reject,
    })
  })
}

export default request;