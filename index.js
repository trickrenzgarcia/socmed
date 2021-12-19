const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({data: "this is data."})
})

app.listen(8080)