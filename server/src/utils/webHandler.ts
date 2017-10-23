import * as request from 'request'
import * as log4js from 'log4js'

const logger = log4js.getLogger('webhandler')

export  class WebHandler{
    constructor(){

    }
    public Get (url,query,headers,options){
        return new Promise((resolve,reject) =>{
            request.get(Object.assign({
                url:url,
                qs:query,
                headers:headers,
            },options),(error,response,body) =>{
                if (error) {
                    logger.error('get',error)
                    reject(error)
                  }
                  if (!response.statusCode) {
                    reject(body)
                  }
        
                  if (!error && /^2\d+/.test(response.statusCode.toString())) {
                    resolve(body)
                  } else {
                    reject(body)
                  }
            })
        })
    }
    public Post (url,data,headers,options){
        return new Promise((resolve,reject) =>{
            request.post(Object.assign({
                url:url,
                form:data,
                headers:headers,
            },options),(error,response,body) =>{
                if (error) {
                    logger.error('post',error)
                    reject(error)
                  }
                  if (!response.statusCode) {
                    reject(body)
                  }
        
                  if (!error && /^2\d+/.test(response.statusCode.toString())) {
                    resolve(body)
                  } else {
                    reject(body)
                  }
            })
        })
    }
    public Delete (url,data,headers,options){
        return new Promise((resolve,reject) =>{
            request.delete(Object.assign({
                url:url,
                form:data,
                headers:headers,
            },options),(error,response,body) =>{
                if (error) {
                    logger.error('Delete',error)
                    reject(error)
                  }
                  if (!response.statusCode) {
                    reject(body)
                  }
        
                  if (!error && /^2\d+/.test(response.statusCode.toString())) {
                    resolve(body)
                  } else {
                    reject(body)
                  }
            })
        })
    }
    public Put (url,data,headers,options){
        return new Promise((resolve,reject) =>{
            request.put(Object.assign({
                url:url,
                form:data,
                headers:headers,
            },options),(error,response,body) =>{
                if (error) {
                    logger.error('put',error)
                    reject(error)
                  }
                  if (!response.statusCode) {
                    reject(body)
                  }
        
                  if (!error && /^2\d+/.test(response.statusCode.toString())) {
                    resolve(body)
                  } else {
                    reject(body)
                  }
            })
        })
    }
}

