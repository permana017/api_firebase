const express = require('express')
const userRouter = require('./user.view')
const router = express()

router.get('/', (req, res) => {
    res.send('Hello world')
  })
router.use("/user",userRouter)


module.exports = router