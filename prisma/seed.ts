import { PrismaClient, TaskStatus } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.task.deleteMany()
  await prisma.user.deleteMany()
  const user = await prisma.user.create({
    data: { email: 'demo@example.com', name: 'Demo User' }
  })
  const task = await prisma.task.create({
    data: {
      title: 'Initial Task',
      description: 'Seeded task',
      assigneeId: user.id,
      status: TaskStatus.todo
    }
  })
  await prisma.task.create({
    data: {
      title: 'Subtask 1',
      description: 'Child task',
      assigneeId: user.id,
      parentId: task.id,
      status: TaskStatus.inProgress
    }
  })
  console.log('✅ Seed complete')
}
main().finally(() => prisma.$disconnect())