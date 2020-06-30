const backendUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : process.env.REACT_APP_BACKEND_URL

const urlBuilder = (url) => {
  return backendUrl + url;
}

export {urlBuilder, backendUrl}