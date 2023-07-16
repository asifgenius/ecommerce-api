const express = require("express");
const router = express.Router();
const userController = require('./user.controller');
router.post('/', userController.addUsers)
router.get('/', userController.getUserList)
router.post('/', userController.getUser)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router;