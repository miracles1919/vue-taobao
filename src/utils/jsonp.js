const jsonp = ({ url, data }) => {
  let head = document.getElementsByTagName('head')[0]
  let script = document.createElement('script')
  let callbackName = `jsonp${Math.round(Math.random() * 1000000)}`

  url += url.indexOf('?') > 0 ? '' : '?'
  for (let key in data) {
    url += `${key}=${data[key]}&`
  }

  url += `callback=${callbackName}`

  script.src = url

  head.appendChild(script)

  return new Promise((resolve, reject) => {
    window[callbackName] = function (data) {
      resolve(data)
      delete window[callbackName]
    }
  })
}

export default jsonp
