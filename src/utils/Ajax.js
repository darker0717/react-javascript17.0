import qs from 'qs'
function Ajax(method, path, data, headers) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open(method, path, true);//配置

        request.setRequestHeader('Content-type', headers); //设置请求头

        request.send(method === 'get' ? null : data);   //post body请求

        request.onreadystatechange = function (response) {
            if (request.readyState == 4 && request.status == 200) {
                resolve(response);
            } else {
                reject(request.statusText || '接口异常');//new Error(request.statusText)
            }
        }
    })
}

const get = (path, data) => {
    let url = path;
    if (data && Object.keys(data).length) {
        url = `${path}?=${qs.stringify(data)}`
    }
    return Ajax('get', url, data, 'application/x-www-form-urlencoded')
}

const post = (path, data) => {
    return Ajax('post', path, qs.stringify(data), 'application/x-www-form-urlencoded')
}

const postJosn = (path, data) => {
    return Ajax('post', path, JSON.stringify(data), 'application/json;charset=UTF-8')
}

export default { get, post, postJosn };