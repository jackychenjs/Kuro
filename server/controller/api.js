const http = require('http')
const xml2js = require('xml2js')
const { createRequest, unicode2Words } = require('../util/util')

var builder = new xml2js.Builder()

exports.search = (req, res) => {
  const keywords = req.query.keywords
  const type = req.query.type || 1
  const limit = req.query.limit || 30
  const offset = req.query.offset || 0

  const data = 's=' + keywords + '&limit=' + limit + '&type=' + type + '&offset=' + offset
  createRequest('/api/search/pc/', 'POST', data)
    .then(result => {
      res.setHeader('Content-Type', 'application/json')
      res.send(result)
    })
    .catch(err => {
      res.status(502).send('fetch error')
    })
}

exports.lyric = (req, res) => {
  const id = req.query.id
  createRequest('/api/song/lyric?os=osx&id=' + id + '&lv=-1&kv=-1&tv=-1', 'GET', null)
    .then(result => {
      res.setHeader("Content-Type", "application/json")
      res.send(result)
    })
    .catch(err => {
      res.status(502).send('fetch error')
    })
}

exports.ttlyric = (req, res) => {
  let handleType = req.query['sh?Artist'] ? 'sh' : 'dl'

  if(handleType === 'sh') {
    let artistUnicode = req.query['sh?Artist'] || req.query['dl?Artist']
    let title = unicode2Words(req.query.Title, true)
    let artist = unicode2Words(artistUnicode, true)
    const type = req.query.type || 1
    const limit = req.query.limit || 30
    const offset = req.query.offset || 0
    let keywords = artist + ' ' + title

    const data = 's=' + keywords + '&limit=' + limit + '&type=' + type + '&offset=' + offset
    createRequest('/api/search/pc/', 'POST', data)
      .then(result => {
        let jsonResult = JSON.parse(result)
        let songs = jsonResult.result.songs

        let songsListXml = `<?xml version="1.0" encoding="UTF-8"?>
          <result>
            ${songs.map(song => `
              <lrc id="${song.id}" artist="${song.artists.map(
                  artist => `${artist.name}`
                ).join('/')}" title="${song.name}"></lrc>`
              ).join('')
            }
          </result>`
        
        // res.send({
        //   query: req.query,
        //   artist: artist,
        //   title: title,
        //   handleType: handleType,
        //   songList: jsonResult,
        //   xml: xml
        // })
        res.setHeader("Content-Type", "text/xml")
        res.send(songsListXml)
      })
  } else {
    const id = req.query['dl?Id']
    createRequest('/api/song/lyric?os=osx&id=' + id + '&lv=-1&kv=-1&tv=-1', 'GET', null)
      .then(result => {
        
        // res.setHeader("Content-Type", "text/plain")
        res.setHeader("Content-Type", "application/json")
        //res.send(JSON.parse(result).lrc.lyric)
        res.send(result)
      })
      .catch(err => {
        res.status(502).send('fetch error')
      })
  }
}