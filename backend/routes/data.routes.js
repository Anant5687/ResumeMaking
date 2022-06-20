const express = require('express')
const { postData, getallData, fileUpload } = require('../controllers/data.controller')
const multipart = require('connect-multiparty')
const path = require('path')
const multiPartyMiddleWare = multipart({uploadDir:path.join(__dirname,"uploads")})
const dataRoute = express()

dataRoute.post('/',multiPartyMiddleWare, postData)

dataRoute.get('/get', getallData)
// dataRoute.post('/upload', fileUpload )

module.exports = dataRoute