const request = ({url, method = 'get', data = {}}) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
    // credentials: 'same-origin'
  }
  if (method === 'post') {
    options.body = JSON.stringify(data)
  }
  return fetch(url, options)
    .then(res => res.json())
    .then(result => {
      if (!result.success) {
        alert(result.error)
      }
      return Promise.resolve({ ...result })
    })
}

export default request
