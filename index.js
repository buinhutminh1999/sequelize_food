const express = require('express')
const cors = require('cors')
const rootRouter = require('./src/Router/rootRouter')
const app = express()
app.use(express.static('.'))

app.use(express.json())
app.listen(8080)
app.use(cors());


app.use('/api', rootRouter)