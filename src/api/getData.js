import service from './request'

export function getInfo(params) {
  return service({
    url: '/api/user/info',
    method: 'get',
    params
  })
}

export function regPost(data) {
  return service({
    url: '/api/user/register',
    method: 'post',
    data
  })
}

export function getAdress(params) {
  return service({
    url: '/api/user/address',
    method: 'get',
    params
  })
}

export function postOrder(data) {
  return service({
    url: '/api/order',
    method: 'post',
    data
  })
}