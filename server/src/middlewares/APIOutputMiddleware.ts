/**
 * Filename: /Users/wei/Desktop/project/ganji-quanzi/server/src/middlewares/APIOutputMiddleware.js
 * Path: /Users/wei/Desktop/project/ganji-quanzi/server
 * Created Date: Sunday, October 22nd 2017, 10:30:56 pm
 * Author: wei
 * 
 * Copyright (c) 2017 Your Company
 */


/**
 * 给res对象添加拓展的返回方法
 */
function APIOutputMiddleware (req, res, next) {
    // 相应api成功结果
  res.apiSuccess = (data) => {
    res.jsonp({
      status: 'OK',
      code: 200,
      data: data,
      server_time: Date.parse(new Date().toString())
    })
  }
    // 相应api出错结果，err是一个Error对象
  res.apiError = (err) => {
    res.jsonp({
      status: 'Error',
      error_code: parseInt(err.code) || parseInt(err.err_code) || 500,
      error_msg: err.message || err.error_msg || 'Unknown Error',
      server_time: Date.parse(new Date().toString())
    })
  }
  next()
}

export { APIOutputMiddleware } 