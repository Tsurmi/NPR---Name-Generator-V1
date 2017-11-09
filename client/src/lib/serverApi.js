const ajaxRequest = (uri, method, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers: headers,
    method: method,
    body: JSON.stringify(body),
    credentials: 'include'
  }

  return fetch(`/api/${uri}`, options)
    .then(handleErrors)
    .then(response => response.json())
    .then(json => json.data)
}

const handleErrors = response => {
  if (!response.ok) {
    return response.json()
      .then(({message, data}) => {
        const err = Error(message)
        Object.assign(err, data)
        err.status = response.status
        throw err
      })
  }
  return response
}
export const getAllHosts = () => ajaxRequest({url: '/api/hosts', method: 'GET'})

export const getHostById = (hostId) => ajaxRequest({url: `/api/hosts/id/${hostId}`, method: 'GET'})

export const addHost = (host) => ajaxRequest({url: '/api/hosts', method: 'POST', body: host})

export const updateHost = (hostId, host) => ajaxRequest({url: `/api/hosts/id/${hostId}`, method: 'PUT', body: host})

export const deleteHost = (hostId) => ajaxRequest({url: `/api/hosts/id/${hostId}`, method: 'DELETE'})

export const getRandomHost = () => ajaxRequest({url: '/api/hosts/random', method: 'GET'})
