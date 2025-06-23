import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../auth/jwt'

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized' })

  try {
    const token = auth.split(' ')[1]
    const payload = verifyToken(token)
    // @ts-ignore
    req.user = payload
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}