import service from './request'

export function getInfo(params) {
  console.log(11)
  return service({
    url: '/api/user/info',
    method: 'get',
    params
  })
}
