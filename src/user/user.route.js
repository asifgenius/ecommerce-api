const express = require("express");
const router = express.Router();
const {  requiresAuth } = require('../auth/jwt');
const userController = require('./user.controller');
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/',  requiresAuth, userController.addUsers);
router.get('/',  requiresAuth, userController.getUserList);
router.post('/',  requiresAuth, userController.getUser);
router.patch('/:id',  requiresAuth, userController.updateUser);
router.delete('/:id',  requiresAuth, userController.deleteUser);

module.exports = router;