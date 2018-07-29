const ajax = ({ url, method = 'get', data }) => {
  let xhr = new XMLHttpRequest()
  // xhr.withCredentials = true
  return new Promise((resolve, reject) => {
    xhr.open(method, url, true)
    if (method.toLocaleLowerCase() === 'post') {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve({ ...JSON.parse(xhr.responseText) })
        }
      }
    }

    xhr.send(data)
  })
}

export default ajax
