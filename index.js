'use strict'

/*
NodeJs SERVER
*/

//console.log("welcome");

//server ve host no yu .env den alalim
require('dotenv').config();
const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || "127.0.0.1"
const http = require("node:http")
//http.createServer((param1,param2)=>{ // 1.par her zaman req 2. her zaman response
//})
//listen(8000, () => console.log("server runned : http://127.0.0.1:8000"
const app = http.createServer((req, res) => {
    /*
    console.log(req); //hepsini gormek istersek
    console.log(req.method);
    console.log(req.url);
    */
    //end points home: /,list: /list:, test: /test
    //    if(req.url=='/')
    //     res.end('<h1>HOME Page</h1>')
    // }


    //add methods
    if (req.url == '/') {

        if (req.method = 'GET') {
            res.write('this ')
            res.write('is ')
            res.write('home ')
            res.write('page')
            res.end()
        }

        else
            res.end('cannot use this method')
    }

    app.listen(8000, () => console.log(`server runned : http://${HOST}:${PORT}`))

})
