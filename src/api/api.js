import axios from 'axios'
import qs from 'qs'

let DOMAIN = 'http://b.pokerlady.com.cn'

// 轮播图 /Web/api?act=getBannerList
export const getCarousel = params => axios.get(`${DOMAIN}/Web/api?act=getBannerList`, {params: params}).then(res => res.data)

// 登录
export const userLogin = params => axios.get(`${DOMAIN}/Web/api?act=login`, {params: params}).then(res => res.data)

// 注册
export const userReg = params => axios.get(`${DOMAIN}/Web/api?act=register`, {params: params}).then(res => res.data)

// 首页推荐 /Web/api?act=getHomeRecommend
export const getBrandRecommendCommodity = params => axios.get(`${DOMAIN}/Web/api?act=getHomeRecommend`, {params: params}).then(res => res.data)

// 顶级分类
export const getTopCategory = params => axios.get(`${DOMAIN}/Web/api?act=getTopCategory`, {params: params}).then(res => res.data)

// 获取分类商品 /Web/api?act=getCategoryGoods
export const getCategoryGoods = params => axios.get(`${DOMAIN}/Web/api?act=getCategoryGoods`, {params: params}).then(res => res.data)

// 获取搭配列表 /Web/api?act=getMatchList
export const getMatchList = params => axios.get(`${DOMAIN}/Web/api?act=getMatchList`, {params: params}).then(res => res.data)

// 获取我的搭配列表 /Web/api?act=getMyMatchList
export const getMyMatchList = params => axios.get(`${DOMAIN}/Web/api?act=getMyMatchList`, {params: params}).then(res => res.data)

// 我的收藏 /Web/api?act=getMyCollectGoodsList
export const getMyCollectGoodsList = params => axios.get(`${DOMAIN}/Web/api?act=getMyCollectGoodsList`, {params: params}).then(res => res.data)

// 收藏/取消收藏 /Web/api?act=collect
export const toggleCollect = params => axios.get(`${DOMAIN}/Web/api?act=collect`, {params: params}).then(res => res.data)

// 搭配详情 /Web/api?act=getMatchDetailM2
export const getMatchDetail = params => axios.get(`${DOMAIN}/Web/api?act=getMatchDetailM2`, {params: params}).then(res => res.data)

// 创建搭配 /Web/api?act=createUserMatch
export const createUserMatch = params => axios.post(`${DOMAIN}/Web/api?act=createUserMatch`, qs.stringify(params)).then(res => res.data)

// 搭配详情 /Web/api?act=getGoodsDetail
export const getGoodsDetail = params => axios.get(`${DOMAIN}/Web/api?act=getGoodsDetail`, {params: params}).then(res => res.data)

// 精选搭配 /Web/api?act=getChoicenessMatchList
export const getChoicenessMatchList = params => axios.get(`${DOMAIN}/Web/api?act=getChoicenessMatchList`, {params: params}).then(res => res.data)

export const testpost = params => axios.post('url', params).then(res => res.data)
