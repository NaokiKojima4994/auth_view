import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password,
    grant_type: 'password',
    client_id: 2,
    client_secret: 'RTvIyg4SXwgWwTR6jGGuBCi14yot4wcc1a9pdIh9',
    scope: '*'
  }
  return request({
    url: '/oauth/token',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

