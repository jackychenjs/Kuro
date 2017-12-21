const http = require('http')

function createRequest (path, method, data, callback, errorcallback) {
  return new Promise((resolve, reject) => {
    let ne_req = ''
    const req = http.request({
      hostname: 'music.163.com',
      method: method,
      path: path,
      headers: {
        'Referer': 'http://music.163.com',
        'Cookie': 'appver=2.0.2',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }, res => {
      res.setEncoding('utf8')
      res.on('error', err => {
        reject(err)
      })
      res.on('data', chunk => {
        ne_req += chunk
      })
      res.on('end', () => {
        resolve(ne_req)
      })
    })

    if(method === 'POST') {
      req.write(data)
    }
    req.end()

  })
}

function combineLyric(lyric, tlyric) {
  const timeReg = /\[.{8}]/;
  let lyric_arr = lyric.split('\n')
  let tlyric_arr = tlyric.split('\n')

  let combine_arr = lyric_arr.map((x) => {
    // x.timeReg
  })
}

function unicode2Words(unicode, littleEndian) {
  if(littleEndian) {
    // littleEndian unicode编码 2个字节顺序倒一下 4E25 => 254E
    let strArr = unicode.match(/\w{4}/g)
    let strRev = ''

    strArr.forEach((v, i, arr) => {
      v = v.slice(2) + v.slice(0, 2)
      strRev += v
    })
    unicode = strRev
  }
  return unescape(unicode.replace(/(\w{4})/g,'%u$1'))
}

module.exports = {
  createRequest,
  unicode2Words,
  combineLyric
}