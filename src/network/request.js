import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000,
    method: 'get'
  })
  instance.interceptors.request.use(res => {
    // console.log('request拦截器', res);
    return res
  })

  instance.interceptors.response.use(config => {
    // console.log('response拦截器', config.data);
    return config.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}