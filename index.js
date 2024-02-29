'use strict'

/*
NodeJs SERVER
*/

//console.log("welcome");

//server ve host no yu .env den alalim
require('dotenv').config(); // conmfig dedigimizde sadece configdeki dosyalari calistir deriz boylece oradaki verielr processs.env ye gelmistir // env dosyasindakileri almak icin env require dedik. npm i dotenv dedik
const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || "127.0.0.1"
const http = require("node:http")

//http.createServer((param1,param2)=>{ // 1.par her zaman req 2. her zaman response, bununla server olusturuyoruz
//})  bunun yerine daha kolayi kullaniyoruz
//listen(8000, () => console.log("server runned : http://127.0.0.1:8000"
const app = http.createServer((req, res) => {
    /*
    console.log(req); //hepsini gormek istersek
    console.log(req.method);
    console.log(req.url);
    */
    //end points home: /,list: /list:, test: /test
    //    if(req.url=='/') {
    //     res.end('<h1>HOME Page</h1>')
    // }
    //    else if(req.url=='/list'){
    //     res.end('<h1>LIST Page</h1>')
    // } 
    //   else if(req.url=='/test'){
    //     res.end('<h1>TEST Page</h1>')
    // }


    //add methods
    if (req.url == '/') {
        console.log();

        if (req.method == 'GET') {  // default GET 
            res.write('this ')
            res.write('is ')
            res.write('home ')
            res.write('page')
            res.end()
        } else if (req.method == 'POST') {
            res.statusCode = 400  // default 200
            res.statusMessage = "post yapamazsin"
            res.end(' can not use this method')
        } else if (req.method == 'DELETE') {
            res.writeHead(405, "silme yapamazsin", {

                // write head ile ayni anda birden fazla icerigi kodlriz
                "Content-Type": "text/html",
                "another-header": "another content"
            })

            res.end(' can not use this method')

        }
        else
            res.end(' can not use this method')

    }

    else if (req.url == '/list') {
        const obj = {
            "error": false,
            "message": "this is list page",
            "deneme": "deneme "
        }
        res.end(JSON.stringify(obj))
    }
    else if (req.url == '/test') {
        res.end('<h1> TEST Page </> ')
    }


})

app.listen(8000, () => console.log(`server runned : http://${HOST}:${PORT}`))


// default local api si her zaman 127.0.0.1 dir. listen diyerek bir portu dinle diyoruz. nodejs de genelde 8000 kullanilir. bosta baska port varsa oda kullanilabilir. 


