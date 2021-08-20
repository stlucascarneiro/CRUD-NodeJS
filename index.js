const express = require('express')
const routes = require('./routes')

const app = express()
const port = 5001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

routes(app)

app.listen(port, () => { console.log('Application running on port ' + port) })

module.exports = app