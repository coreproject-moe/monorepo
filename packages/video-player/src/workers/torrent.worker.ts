// browser compatible version
import WebTorrent from 'webtorrent/dist/webtorrent.min.js';

const client = new WebTorrent();

export const streamVideo = async (magnet: string) => {
  return new Promise<string>((resolve, reject) => {
    if (!magnet) {
      reject('magnet link missing')
      return
    }

    console.log(magnet)
    client.add(magnet, (torrent) => {
      console.log('downloading')
      const file = torrent.files.find((file) => file.name.match(/\.(mp4|mkv|webm)$/i));
      if (file) {
        file.getBlobURL((err, url) => {
          if (err) {
            reject('failed to create blob url')
          } else {
            resolve(url)
          }
        })
      } else {
        reject('no playable video found')
      }
    })
  })
}

export const destroyClient = async () => {
  client.destroy()
  console.log('webtorrent client destroyed')
}
