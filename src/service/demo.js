
import request from '@/utils/request'
import ajax from '@/utils/ajax'
import jsonp from '@/utils/jsonp'

request({ url: 'http://localhost:3000/request' })
  .then(res => {
    console.log('fetch', res)
  })

ajax({ url: 'http://localhost:3000/request', method: 'post', data: { type: 'ajax' } })
  .then(res => {
    console.log('ajax', res)
  })

jsonp({ url: 'http://localhost:3000/request', data: { type: 'jsonp' } })
  .then(res => {
    console.log('jsonp', res)
  })
