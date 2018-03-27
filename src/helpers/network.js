const API_ROOT = 'https://5ab9ca1ed9ac5c001434ecb4.mockapi.io'

export const httpGet = async endPoint => {
  try {
    const response = await fetch(`${API_ROOT}/${endPoint}`)
    if (response.status >= 200 && response.status < 300) {
      const json = await response.json()
      return json
    } else {
      console.log(response)
      throw new Error('Status', response.status)
    }
  } catch (err) {
    console.warn('httpGet error ', err)
  }
}

// without async/await
/* export const httpGetWithoutAsync = (endPoint) => {
  try {
    return fetch(`${API_ROOT}/${endPoint}`)
      .then(response => response.json())
      .then(json => json)
    
  } catch (err) {
    console.warn('httpGet error ', err)
  }
} */
