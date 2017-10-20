import Route from '@ember/routing/route';
import Ember from 'ember';
// import * as request from 'request'

const headers = {
  cid: '801',
  aid: '52597565A4109E0B4CF465951CADD775',
  vs: '8.3.0',
  ay: 'baidustore2',
  rid: '65ef2fa4-15bf-4d10-87ab-f0288aaf9d03',
  unid: '3863b62d62d05612f17a8e0708013c01',
  uid: '163409644',
  'tk': '474d4c556450554876352f685170734b474d32774b53496d',
  sid: 'c056ccbf-9d81-4b38-8b9c-170ab1b55578',
  xadid: 'hTtbpzdZz4YOOCfdYkHNJHOEH7Icl5y0KR22RmknIPYciIQ2NzlSuLxqxslZ4QYK',
  xasmaid: '963690b6ee7b7ac70a89851b74d2c114',
  of: 'self',
  net: 'wifi',
  isp: '46011',
  os: 'Android',
  ov: '21',
  dv: 'nubia/NX511J',
  rl: '1080*1920',
  ds: '3.0',
  ct: '45',
  lng: '104.041967',
  lat: '30.585384',
  lct: '45',
  lar: '581',
  lbs: '',
  Accept: '*/*',
  'Accept-Encoding': 'gzip',
  'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 5.0.2; NX511J Build/LRX22G)',
  'Host': 'app.ganji.com'
}

export default Route.extend({
  ajax: Ember.inject.service(),
  model() {
    let getVideolistUrl = '/api/v1/msc/v1/jn/feed/list?scene=videoplaza&user_id=163409644&longitude=104.041967&latitude=30.585384&location=45&city_id=45&optype=0&filter=video'

    return $.get({
          url: getVideolistUrl,
          headers: headers,
          gzip: true
        })
    // return this.get('ajax').request({
    //   url: getVideolistUrl,
    //   headers: headers,
    //   gzip: true
    // })
    // request.get({
    //     url: getVideolistUrl,
    //     headers: headers,
    //     gzip: true
    //     }, (err, httpResponse, body) => {
    //         if (err)  console.log(err)
    //         return body.data.list
    //     })

    // return [{
    //     feed_id:1,
    //     content:'11'
    // }]
  }
});
