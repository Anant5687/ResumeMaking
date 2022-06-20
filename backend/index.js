require('dotenv').config()
require('./Db/Db')
const express = require('express')
const cors = require('cors')
const dataRoute = require('./routes/data.routes')
const port = process.env.PORT || 7080
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('./routes/uploads'))


app.get('/', (req, res) => {
    res.json("server start")
})
app.use(dataRoute)

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})