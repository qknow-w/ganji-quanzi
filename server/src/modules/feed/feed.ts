/**
 * Filename: /Users/wei/Desktop/project/ganji-quanzi/server/src/models/feed/feed.test.ts
 * Path: /Users/wei/Desktop/project/ganji-quanzi/server
 * Created Date: Sunday, October 22nd 2017, 12:57:16 pm
 * Author: wei
 * 
 * Copyright (c) 2017 Your Company
 */

import * as log4js from 'log4js'
import { Router, Request, NextFunction, Response } from 'express';
import { IResponse } from '../../interface'
import { WebHandler } from '../../utils'
import { headers } from '../../constants'

const logger = log4js.getLogger('feed')
const feed: Router = Router();

feed.get('/list',async(req: Request, res: IResponse) => {
    try {
        let getVideolistUrl = 'https://app.ganji.com/api/v1/msc/v1/jn/feed/list?scene=videoplaza&user_id=163409644&longitude=104.041967&latitude=30.585384&location=45&city_id=45&optype=0&filter=video'    
        let result:any = await new WebHandler().Get(getVideolistUrl,null,headers,{gzip: true})
        // logger.info('WebHandler',WebHandler)
        res.apiSuccess(JSON.parse(result).data) 
    } catch (error) {
        logger.error('list',error)
        res.apiError(JSON.parse(error).errormsg) 
    }
})

export { feed }