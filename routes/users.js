const { Router } = require('express')
const UsersController = require('../controller/users')

const router = Router()

router.get('/users', UsersController.readAll)
router.get('/users/:id', UsersController.readOne)

router.post('/users', UsersController.create)

router.patch('/users/:id', UsersController.update)

router.delete('/users/:id', UsersController.delete)

module.exports = router