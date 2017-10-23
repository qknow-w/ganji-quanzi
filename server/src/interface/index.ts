import { Response } from 'express';

export interface IResponse extends Response {
    apiSuccess,
    apiError
}

