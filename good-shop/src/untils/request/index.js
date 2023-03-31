import { Toast } from '../../components';

const baseApiUrl = 'https://www.fastmock.site/mock/2cabb6e9578a4173ca1d1f94b46b67a3/goods_shop';

let systemTime;
/**
 * 网络请求封装
 */
const makeOptions = (options) => {
  const defaultOptions = {
    url: undefined,
    method: 'POST',
    qs: undefined,
    body: undefined,
    headers: { 'Access-Control-Allow-Origin': '*' },
    type: 'json',
    crossOrigin: true,
    credentials: 'include',
    withCredentials: true,
    isShowLoading: false,
    mode: 'cors',
  };

  const { url, endpoint, ...rest } = options;
  let newOptions = {
    url: url || `${baseApiUrl}${endpoint}`,
    ...rest,
  };

  newOptions = { ...defaultOptions, ...newOptions };
  return newOptions;
};

const addQs = (url, qs) => {
  let queryString = '';
  let newUrl;
  if (qs && typeof qs === 'object') {
    for (const k of Object.keys(qs)) {
      queryString += `&${k}=${qs[k]}`;
    }
    if (queryString.length > 0) {
      if (url.split('?').length < 2) {
        queryString = queryString.substring(1);
      } else if (url.split('?')[1].length === 0) {
        queryString = queryString.substring(1);
      }
    }
  } else if (qs && typeof qs === 'string') {
    queryString = qs;
  }
  if (queryString && url.indexOf('?') === -1) {
    newUrl = `${url}?${queryString}`;
  } else {
    newUrl = `${url}${queryString}`;
  }
  return newUrl;
};

const request = async (options) => {
  const fullOptions = makeOptions(options); // 合并默认参数
  const { method, credentials, qs, type, mode, isShowLoading, crossOrigin, ignoreError, ignoreToken } = fullOptions;
  let { body, headers, url } = fullOptions;
  if (!body && method !== 'GET') {
    body = {};
  }

  if (method !== 'GET' && !body.token) {
    body.token = window.token || '';
  }

  // 对同一接口 不同业务中，传不传token处理不同
  if (ignoreToken || body.token === 'isIgnore' || !body.token) {
    // delete body.token;
  }

  let res;
  //   if (isShowLoading) {
  //     Toast.loading('加载中...', 0);
  //   } else {
  //     Toast.hide();
  //   }

  url = addQs(url, qs);
  try {
    switch (type.toLowerCase()) {
      case 'json':
        body = JSON.stringify(body);
        if (method.toLowerCase() === 'post' || method.toLowerCase() === 'put' || method.toLowerCase() === 'patch') {
          headers = {
            ...headers,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          };
        }
        break;
      case 'form':
        break;
      default:
        if (method.toLowerCase() === 'post' || method.toLowerCase() === 'put' || method.toLowerCase() === 'patch') {
          headers = {
            ...headers,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'x-www-form-urlencoded',
          };
        }
    }

    const fetchOptions = {
      method,
      headers: {
        ...headers,
      },
      body,
      credentials,
      mode,
      crossOrigin,
    };

    res = await fetch(url, fetchOptions); // 设置超时时间

    if (isShowLoading) {
      Toast.hide();
    }

    if (res.ok) {
      const responseJson = await res.json();
      responseJson.url = url;

      if (responseJson?.status !== '0000') {
        // responseJson?.msg && !ignoreError && Toast.info(responseJson?.msg);
      }

      systemTime = responseJson.systemTime;
      if (window) {
        window.systemTime = systemTime;
      }

      return responseJson;
    }

    if (res.status === 502) {
      Toast.info('服务器开小差了，请稍后再试');
    } else {
      Toast.info(res?.status);
    }

    return Promise.reject(res.status);
  } catch (e) {
    let msg = e.message ?? e.msg ?? e ?? '未知错误';

    if (msg === 'Network request failed') {
      console.log(e);
      return;
    } else if (msg === 'Failed to fetch') {
      Toast.info('网络连接失败');
    } else {
      Toast.info(msg);
    }

    return Promise.reject(msg);
  }
};

export default request;

export { systemTime };
