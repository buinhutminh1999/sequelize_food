const express = require('express')
const { likeRest, unlikeRes, userLikeRes, addRate, userRateRes, addOrder } = require('../controller/userController')
const userRouter = express.Router()
userRouter.post('/like', likeRest)
userRouter.delete('/unlike', unlikeRes)
userRouter.get('/like-rest/:user_id', userLikeRes)
userRouter.post('/add-rate', addRate)
userRouter.get('/rate-res/:user_id', userRateRes)
userRouter.post('/add-order', addOrder)

module.exports = userRouter