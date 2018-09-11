import axios from 'axios';

// axios 配置
axios.defaults.timeout = 20000;  // 设置超时时间
axios.defaults.baseURL = 'http://work.flybycloud.com:6674';
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json'
    };
    if (global.token) {
      config.headers.token = global.token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

const checkStatus = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res.data;
  }
  const error = new Error(res.statusText);
  error.res = res;
  throw error;
};

const checkCode = (res) => {
  if (res.code !== null && res.code === '0000') { // 正常返回
    return res;
  } else {
    if (res.code !== null && (res.code === '10015' || res.code === '1004')) {
      console.log('TOKEN失效');
    }
    return Promise.reject(res);
  }
};

const request = (url, params, method = 'get') => {
  console.log('url:', url);
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: method === 'post' ? params : {},
      params: method === 'get' ? params : {}
    })
      .then(checkStatus)
      .then(checkCode)
      .then(data => resolve(data))
      .catch(error => {
        console.log('返回异常:', error);
        reject(error);
      });
  });
};
export default request;
