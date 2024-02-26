'use strict'

/*
node server
*/

require('dotenv').config();

const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || "127.0.0.1"

//npm i express

const express = require("express")
const app = express()
console.log("express server");
app.get('/', (res, req) => {
    res.send("express deneme")
})
app.listen(8000, () => console.log('server sunned: http://${HOST}:${PORT}'))