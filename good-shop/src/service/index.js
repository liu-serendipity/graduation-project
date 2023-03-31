import request from '../untils/request';

// 首页banner配置
export function getHomeBannerList() {
  return request({ endpoint: '/home/bannerList', method: 'GET', ignoreToken: true });
}

// 首页recommend配置
export function getHomeRecommendList() {
  return request({ endpoint: '/home/recommendList', method: 'GET', ignoreToken: true });
}

// 商城热搜
export function getHotList() {
  return request({ endpoint: '/mall/hotList', method: 'GET', ignoreToken: true });
}

// 商品列表
export function getGoodsList() {
  return request({ endpoint: '/mall/goodsList', method: 'GET', ignoreToken: true });
}

// 商品详情
export function getGoodsDetail(params = {}) {
  return request({ endpoint: '/goods_detail', method: 'POST', ignoreToken: true, body: params });
}

// 搜索

// 购物车列表
export function getCartList(params = {}) {
  return request({ endpoint: '/cart/cartList', method: 'POST', ignoreToken: true, body: params });
}
