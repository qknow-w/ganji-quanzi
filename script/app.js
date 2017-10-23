const request = require('request')

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

/*
    "feed_id": "191164729",
    "feed_category": "2",
    "user_id": "150455333",
    "user_category": "2",
    "image_url": [
        "https://tct5.ganjistatic1.com/gjfsqq/a3707369aa3742789c0cc5024842a172_360-640_7-5.jpg"
    ],
    "content": "三龙骨山龟[勾引][勾引][勾引]",
    "longitude": "113.158611",
    "latitude": "22.599702",
    "city_id": "21",
    "score": "27",
    "createtime": "1508367128",
    "modify_time": "1508479321",
    "tags": [
        {
            "tag_id": "325",
            "tag_name": "宠物"
        }
    ],
    "comment_num": "1",
    "love_num": "26",
    "user_avatar": "https://tct5.ganjistatic1.com/gjfsqq/1f1d2c9cfb5f49b89533740287147410_70-70c_7-0.jpg",
    "user_name": "顺仔",
    "activity_id": "0",
    "company_ids": "",
    "video_src": "https://wos.ganjistatic1.com/rUpOnMlKjrt/communitytransform/301dba5b-a24e-42d4-b2e4-d98fb1f862e8.m202.mp4",
    "video_view_num": 743,
    "video_gif": "gjfsqq/e8af8486332c41ef9b2b8ed4072340fe.gif",
    "activity_name": "",
    "activity_url": "",
    "activity_type": "",
    "loved": false,
    "can_delete": 0,
    "city_distance": "江门",
    "company_name": "",
    "company_id": 0,
    "commentforfeed": [
        {
            "id": "471319",
            "comment_id": "192399864",
            "root_id": "0",
            "parent_id": "0",
            "floor": "0",
            "post_id": "191164729",
            "post_category": "1",
            "from_user_id": "267703690",
            "from_user_category": "2",
            "from_user_avatar": "https://tct4.ganjistatic1.com/gjfs13/M00/5F/2A/CgEHaVXADLXozrVJAABbSoChqzk625_70-70c_7-0.jpg",
            "from_user_name": "液化气配送",
            "to_user_id": "150455333",
            "to_user_category": "2",
            "to_user_avatar": "https://tct3.ganjistatic1.com/gjfsqq/1f1d2c9cfb5f49b89533740287147410_70-70c_7-0.jpg",
            "to_user_name": "顺仔",
            "content": "[憨笑]",
            "createtime": "1508411186",
            "modify_time": "0",
            "comment_status": "0",
            "audit_status": "0",
            "audit_time": "0",
            "audit_user_id": "0",
            "audit_name": "",
            "audit_delete_reason": "0",
            "love_num": "2",
            "votetype": "0"
        }
    ],
    "relation": 4,
    "time_show": "昨天",
    "p": 1,
    "reason": "hot",
    "reserve": "0",
    "category": "hot",
    "seqno": "3D68CB8CBDD8AF5002FF3D317B95D312",
    "algno": "1",
    "scene": "videoplaza",
    "optype": 0,
    "extend": ""
    }
*/

let getVideolistUrl = 'https://app.ganji.com/api/v1/msc/v1/jn/feed/list?scene=videoplaza&user_id=163409644&longitude=104.041967&latitude=30.585384&location=45&city_id=45&optype=0&filter=video'

function getVideolist () {
  return new Promise((resolve, reject) => {
    request
        .get({
          url: getVideolistUrl,
          headers: headers,
          gzip: true
        }, (err, httpResponse, body) => {
          if (err)reject(err)
          resolve(JSON.parse(body))
        // console.log(body) // 200
        //  console.log('feed_id', body.data.list[0].feed_id) // 200
        /// / getVideoById(body.data.list[0].feed_id)
        })
  })
}

// getVideolist()

/*
    feed_id": "193037989",
    "feed_category": "2",
    "user_id": "694526817",
    "user_category": "2",
    "image_url": ["https:\/\/tct5.ganjistatic1.com\/gjfsqq\/c2353c80e5824a43bdce5a4986cea4eb_480-640_6-0.jpg"],
    "content": "",
    "longitude": "0.000000",
    "latitude": "0.000000",
    "city_id": "0",
    "feed_status": "0",
    "score": "207",
    "createtime": "1508462222",
    "modify_time": "1508468723",
    "tags": [],
    "comment_num": "66",
    "love_num": "72",
    "user_avatar": "https:\/\/tct4.ganjistatic1.com\/gjfsqq\/v1bl2lwke4cm2vtjzxmrba_70-70c_7-0.jpg",
    "user_name": "\u5bc4\u4e0e\u5fc3@",
    "activity_id": "0",
    "company_ids": "",
    "video_src": "https:\/\/wos.ganjistatic1.com\/rUpOnMlKjrt\/communitytransform\/1eae639c-5571-4ce1-98fe-a1b4725db13a.m202.mp4",
    "video_view_num": 2299,
    "video_gif": "",
    "activity_name": "",
    "activity_url": "",
    "activity_type": "",
    "can_delete": "0",
    "loved": false,
    "company_name": "",
    "company_id": 0,
    "city_distance": "\u6765\u81ea\u706b\u661f",
    "now_user_name": "\u7389\u78ec\u5b50",
    "now_user_avatar": "https:\/\/m.ganjistatic1.com\/84fe42940894ba4f71c15f604cdb2619\/gyq\/avator_male02@3x.png",
    "video_is_view": false,
    "share_url": "https:\/\/wssta.ganji.com\/workcircle\/video\/193037989",
    "relation": 4,
    "can_comment": true,
    "time_show": "09:17"

*/

function getVideoById (feedId) {
  let getVideoByIdUrl = `https://app.ganji.com/api/v1/msc/v1/jn/feed/info/${feedId}?&user_id=732539543&longitude=104.041918&latitude=30.585407&location=45`

  request
    .get({
      url: getVideoByIdUrl,
      headers: headers,
      gzip: true
    }, (err, httpResponse, body) => {
      if (err) console.log(err)
      console.log(body) // 200
    })
}

// getVideoById()
/*
    "id": "471836",
    "comment_id": "193114455",
    "root_id": "0",
    "parent_id": "0",
    "floor": "0",
    "post_id": "193037989",
    "post_category": "1",
    "from_user_id": "289456280",
    "from_user_category": "2",
    "from_user_avatar": "https:\/\/tct5.ganjistatic1.com\/gjfsqq\/c7d289221a724361b081434a66cea482_70-70c_7-0.jpg",
    "from_user_name": "\u5fae\u98ce",
    "to_user_id": "694526817",
    "to_user_category": "2",
    "to_user_avatar": "https:\/\/tct.ganjistatic1.com\/gjfsqq\/v1bl2lwke4cm2vtjzxmrba_70-70c_7-0.jpg",
    "to_user_name": "\u5bc4\u4e0e\u5fc3@",
    "content": "\u597d\u68d2",
    "createtime": "1508466595",
    "modify_time": "0",
    "comment_status": "0",
    "audit_status": "0",
    "audit_time": "0",
    "audit_user_id": "0",
    "audit_name": "",
    "audit_delete_reason": "0",
    "love_num": "6",
    "votetype": "0",
    "loved": false,
    "company_name": "",
    "company_id": 0,
    "son_num": 0,
    "son": []
*/

function getCommentbyVid (feedId) {
  let getCommentbyVidUrl = `https://app.ganji.com/api/v1/msc/v1/jn/comment/post/${feedId}/type/1/list?page=1&user_id=732539543`
  return new Promise((resolve, reject) => {
    request
    .get({
      url: getCommentbyVidUrl,
      headers: headers,
      gzip: true
    }, (err, httpResponse, body) => {
      if (err) reject(err)
     // console.log(body) // 200

      resolve(JSON.parse(body))
    //   body.data.hotList.forEach((item) => {
    //     console.log('item', item.comment_id)
    //   })
    })
  })
}

// getCommentbyVid()

/*
{
    "errorno": 0,
    "errormsg": "\u6210\u529f",
    "data": {
        "deal_result": true
    }
}
*/
let commentLoveUrl = 'https://app.ganji.com/api/v1/msc/v1/jn/trace/love/comment?&scene=videoplaza&action=like&source=detail'
function commentLove (arg) {
  // console.log('arg', arg)
  let { post_id, comment_id } = arg
  console.log('post_id', post_id)
  console.log('comment_id', comment_id)
  return new Promise((resolve, reject) => {
    request
    .put({
      url: commentLoveUrl,
      headers: headers,
      gzip: true,
      json: {
        'user_id': '163409644',
        'post_id': post_id,
        'comment_id': comment_id
      }
    }, (err, httpResponse, body) => {
      if (err) reject(err)
      console.log('commentLove:body', body)
     // resolve(JSON.parse(body))
    })
  })
}

// commentLove()

/*
{
    "errorno": 0,
    "errormsg": "\u6210\u529f",
    "data": {
        "deal_result": true
    }
}
*/

let commentCancelLoveUrl = 'https://app.ganji.com/api/v1/msc/v1/jn/trace/love/comment?&scene=videoplaza&action=delete&source=detail&user_id=163409644&post_id=192540613&comment_id=192617824'

function commentCancelLove () {
  request
    .delete({
      url: commentCancelLoveUrl,
      headers: headers,
      gzip: true
    }, (err, httpResponse, body) => {
      if (err) console.log(err)
      console.log(body) // 200
    })
}

// commentCancelLove()

function feedLove (feedId) {
  let feedLoveUrl = `https://app.ganji.com/api/v1/msc/v1/jn/trace/love/feed?&scene=videoplaza&action=like&source=detail`
  return new Promise((resolve, reject) => {
    request
    .put({
      url: feedLoveUrl,
      headers: headers,
      gzip: true,
      json: {
        'user_id': '163409644',
        'feed_id': feedId
      }
    }, (err, httpResponse, body) => {
      if (err) reject(err)
      console.log('commentLove:body', body)
      resolve(body)
    })
  })
}

// feedLove(191004401)

async function main () {
  try {
    let videoList = await getVideolist()
    console.log('videoList', videoList)
   // console.log('videoList.data.list[0].feed_id', videoList.data.list[0].feed_id)
    console.log('videoList.data.list.length', videoList.data.list.length)
    for (let i = 0; i < videoList.data.list.length; i++) {
      console.log(i)
      // console.log('videoList.data.list[i]', videoList.data.list[i])
      console.log('videoList.data.list.content', videoList.data.list[i].content)
      await feedLove(videoList.data.list[i].feed_id)
    }
    /*
    let commentList = await getCommentbyVid(193037989)
    console.log('commentList', commentList)

    for (let i in commentList.data.hotList) {
      await commentLove(commentList.data.hotList[i])
    }
    */
  } catch (error) {

  }
}

main()
