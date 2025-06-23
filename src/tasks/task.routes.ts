import express from 'express'
import { requireAuth } from '../middleware/requireAuth'
import { createTask, getTaskById, updateTaskStatus } from './task.controller'

const router = express.Router()
router.use(requireAuth)

router.post('/', createTask)
router.get('/:id', getTaskById)
router.put('/:id/status', updateTaskStatus)

export default router
