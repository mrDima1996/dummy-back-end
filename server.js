const express = require('express');
const http = require('http');

/*
var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "ohud",
    password: "1234567890",
    database: 'ITEA'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

*/

class HandlerGenerator {
    async get_modules_count (req, res) {
        let count;
        let query = 'SELECT * FROM my_modules'
        // count = await con.query(query, (err, rows) => {
        //     if(err) throw err;
        //     res.json({
        //         count: rows.length
        //     });
        // });
        res.json({
            count: 11
        });
    }
}



function main () {
    let app = express();
    let handlers = new HandlerGenerator();
    const port = process.env.PORT || 8000;
    // app.use(function (req, res, next){
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Headers', '*');
    // res.header('Access-Control-Allow-Credentials', 'true');
    //})
    app.get('/', handlers.get_modules_count);
    var server = http.createServer(app);
    server.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();