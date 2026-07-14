import express from 'express'
import { signup } from '../controllers/userLogic.js'
import { login } from '../controllers/userLogic.js'

const router = express.Router()


router.post('/signup', signup)
router.post('/login',login)

export default router