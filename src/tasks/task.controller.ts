import { Request, Response } from 'express'
import { PrismaClient, TaskStatus } from '@prisma/client'
const prisma = new PrismaClient()

export async function createTask(req: Request, res: Response) {
  const { title, description, status, parentId } = req.body
  if (!title || !description) return res.status(400).json({ error: 'Missing required fields' })

  // @ts-ignore
  const assigneeId = req.user.id

  const task = await prisma.task.create({
    data: { title, description, status, assigneeId, parentId }
  })
  res.json(task)
}


export async function updateTaskStatus(req: Request, res: Response) {
  const id = req.params.id
  const { status } = req.body
  if (!Object.values(TaskStatus).includes(status)) return res.status(400).json({ error: 'Invalid status' })
  const task = await prisma.task.update({ where: { id }, data: { status } })
  res.json(task)
}

export async function getTaskById(req: Request, res: Response) {
  const task = await prisma.task.findUnique({
    where: { id: req.params.id },
    include: { subtasks: true }
  })
  if (!task) return res.status(404).json({ error: 'Task not found' })
  res.json(task)
}