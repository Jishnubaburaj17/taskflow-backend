
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { signToken } from './jwt'
const prisma = new PrismaClient()

export async function demoLogin(req: Request, res: Response) {
  const { email, name } = req.body
  if (!email || !name) return res.status(400).json({ error: 'Missing email or name' })

  let user = await prisma.user.findUnique({ where: { email } })
  if (!user) user = await prisma.user.create({ data: { email, name } })

  const token = signToken({ id: user.id, email: user.email })
  res.json({ token, user })
}