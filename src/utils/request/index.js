//这边封装的包含一些常规请求，post、get等等
import axios from 'axios'
//此处的baseURL即为我们根据环境启动时候设置的后端服务地址
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 300 * 1000
})

service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['X-Auth-Token'] = getToken() 
    // }
    if (config.method === 'get') {
      config.params = {
        t: Date.parse(new Date()) / 1000,
        ...config.params
      }
    }
    return config
  }
)
service.interceptors.response.use(
  response => {
    return response
  },
)

export default {
  get (url, params) {
    return service.get(url, {
      params: params,
    })
  },
  put (url, data) {
    return service.put(url, data)
  },
  post (url, data) {
    return service.post(url, data)
  },
  delete (url, params) {
    return service.delete(url, {
      params: params,
    })
  },
  data_delete (url, data) {
    return service.delete(url, {
      data: data,
    })
  },
  post_download (url, data) {
    return service.post(url, data, {
      responseType: 'blob'
    })
  },
  put_download (url, data) {
    return service.put(url, data, {
      responseType: 'blob'
    })
  },
  download (url, params) {
    return service.get(url, {
      params: params,
      responseType: 'blob',
    })
  },
  post_download_arraybuffer (url, data) {
    return service.post(url, data, {
      responseType: 'arraybuffer'
    })
  },
}
