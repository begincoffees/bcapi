import * as jwt from 'jsonwebtoken'
import { Prisma } from './generated/prisma'
import { Context } from './resolvers/types/Context';
import { resolve } from 'path';

export function getUserId(ctx: Context) {
  const Authorization = ctx.request.headers.authorization
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId }: any = jwt.decode(token)
    // const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
    // arbirtrary revision
    return userId || ''
  }

  throw new AuthError()
}

export function setUserId(req, res, next) {
  console.log(req.headers.Authorization)
  next()
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}
