export function isHttp(url: string) {
  return url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1
}

export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}