import request from './request'

function Getmultidata() {
    return request({ url: '/home/multidata' })
}
function GetData(options) {
    return request({
        url: '/home/data', data: {
            type: options.type,
            page: options.page
        }
    })
}

export { Getmultidata, GetData } 