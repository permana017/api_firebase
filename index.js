const express = require('express')
const app = express()
const cors = require('cors')
const { urlencoded, json } = require('body-parser')
const router = require('./src/view/index')
const db = require('./config')

app.use(urlencoded({extended:true}))
app.use(json())
app.use(cors())


app.use('/api', router)


app.get("*", (req, res) => {
    return res.status(404).send({status: 404, message: "not found"});
});


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})