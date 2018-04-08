const mysql = require('mysql');
const ArrayList = require('ArrayList');
var express = require('express');


// First you need to create a connection to the db
var connection = mysql.createConnection({
    host     : '35.185.243.160',
    user     : 'root',
    password : '12345',
    database : 'sunhacks'
});

var app = express();


fetch_Navbar(function(id) {
    console.log(id);
});
function fetch_Navbar(result) {
    connection.connect();
    var list = new ArrayList;
    connection.query('SELECT navItem from Navbar', function(err, rows, fields) {
        if (!err){
            // console.log('The solution is: ', rows);

            var keys = Object.keys(rows);
            for (var i = 0; i < keys.length; i++) {
                // var output = Object.toString(rows);

                var value = JSON.stringify(rows[keys[i]]).split(':');

                var j = value[1].indexOf('}');
                list.add(value[1].slice(0,j));

            }
            // list.flatten;
            result(list);
        }

        else
            console.log('Error while performing Query.');
    });
    connection.end();
}



// app.get("/",function(req,res){
//     connection.query('SELECT * from Bank', function(err, rows, fields) {
//         connection.end();
//         if (!err){
//             console.log('The solution is: ', rows);
//         }
//
//         else{console.log('Error while performing Query.');}
//
//     });
// });
//
// app.listen(3000);