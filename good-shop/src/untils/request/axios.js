import axios from 'axios';

axios.defaults.withCredentials = true;

export class HttpRequest {
  constructor() {
    this.queue = {};
  }

  getInsideConfig() {
    const config = {
      baseURL: '',
      timeout: 60000,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // 'application/x-www-form-urlencoded',
      },
    };

    return config;
  }

  destroy(url) {
    delete this.queue[url];
  }

  interceptors(instance, url, options = {}) {
    // 请求拦截
    instance.interceptors.request.use(
      (config) => {
        this.queue[url] = true;

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    // 响应拦截
    instance.interceptors.response.use(
      (res) => {
        this.destroy(url);

        const data = res.data || {};
        let err;

        if (data.status && data.status !== '0000' && !options.allowStatusFalse) {
          err = new Error(data.msg);
          err.response = res;
          return Promise.reject(err);
        }

        if (typeof data.success !== 'undefined' && !data.success && !options.allowSuccessFalse) {
          err = new Error(data.message);
          err.response = res;
          return Promise.reject(err);
        }

        if (data.systemTime) {
          window.systemTime = data.systemTime;
        }
        return data;
      },
      (error) => {
        this.destroy(url);

        const data = error.response ? error.response.data || {} : {};

        if (data.status && data.status !== '0000') {
          return Promise.reject(new Error(data.msg));
        }

        if (typeof data.success !== 'undefined' && !data.success) {
          return Promise.reject(new Error(data.message));
        }

        return Promise.reject(error);
      },
    );
  }

  /**
   *
   * @param {*} options
   * @param {*} interceptorOptions {allowSuccessFalse: false}
   */
  request(options, interceptorOptions) {
    const instance = axios.create();

    const mergedOptions = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, mergedOptions.url, interceptorOptions);

    if (window.token) {
      if (typeof options.data === 'object') {
        options.data.token = window.token;
      }
    }

    return instance(mergedOptions);
  }
}

export default new HttpRequest();
