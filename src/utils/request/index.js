import axios from 'axios';

const defaultConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 300 * 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

const service = axios.create(defaultConfig);

service.interceptors.request.use(
  config => {
    if (config.method === 'get') {
      config.params = {
        t: Date.now() / 1000,
        ...config.params,
      };
    }
    return config;
  },
  error => Promise.reject(error)
);

service.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);

const createRequest = (method, url, options = {}, customOptions = {}) => {
  return service[method](url, { ...options, ...customOptions });
};

export default {
  get(url, params = {}, customOptions = {}) {
    return createRequest('get', url, { params }, customOptions);
  },
  put(url, data = {}, customOptions = {}) {
    return createRequest('put', url, { data }, customOptions);
  },
  post(url, data = {}, customOptions = {}) {
    return createRequest('post', url, { data }, customOptions);
  },
  delete(url, params = {}, customOptions = {}) {
    return createRequest('delete', url, { params }, customOptions);
  },
  data_delete(url, data = {}, customOptions = {}) {
    return createRequest('delete', url, { data }, customOptions);
  },
  post_download(url, data = {}, customOptions = {}) {
    return createRequest('post', url, { data, responseType: 'blob' }, customOptions);
  },
  put_download(url, data = {}, customOptions = {}) {
    return createRequest('put', url, { data, responseType: 'blob' }, customOptions);
  },
  download(url, params = {}, customOptions = {}) {
    return createRequest('get', url, { params, responseType: 'blob' }, customOptions);
  },
  post_download_arraybuffer(url, data = {}, customOptions = {}) {
    return createRequest('post', url, { data, responseType: 'arraybuffer' }, customOptions);
  },
};