var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const ArrayList = require('ArrayList');

var q = require('q');


// First you need to create a connection to the db
var connection = mysql.createConnection({
    host     : '35.185.243.160',
    user     : 'root',
    password : '12345',
    database : 'sunhacks'
});

function fetch_Navbar() {
    var deferred = q.defer();
    // connection.connect();
    var list = new ArrayList;
    connection.query('SELECT navItem from Navbar', function (err, rows, fields) {
        if (err)
            deferred.reject(err);
        else{
            // console.log('The solution is: ', rows);

            var keys = Object.keys(rows);
            for (var i = 0; i < keys.length; i++) {

                var value = JSON.stringify(rows[keys[i]]).split(':');

                var j = value[1].indexOf('}');
                var new_val = value[1].slice(0, j)
                list.add(JSON.parse(new_val));

            }


            deferred.resolve(list);
        }


    });
    // connection.end();
    return deferred.promise;

}






function fetch_checkings() {
    var deferred = q.defer();
    // connection.connect();
    // var list = new ArrayList;
    connection.query('SELECT B.BankName, L.state FROM Bank B INNER JOIN Location L INNER JOIN LocationSpecificBankDetails C ON B.BankId = C.BankId AND C.LocationId = L.id WHERE L.state = "Arizona" AND C.Checking = 1', function (err, rows, fields) {
        if (err)
            deferred.reject(err);
        else{
            console.log('The solution is: ', rows);

            // var keys = Object.keys(rows);
            // for (var i = 0; i < keys.length; i++) {
            //
            //     var value = JSON.stringify(rows[keys[i]]).split(':');
            //
            //     var j = value[1].indexOf('}');
            //     var new_val = value[1].slice(0, j)
            //     list.add(JSON.parse(new_val));
            //
            // }


            deferred.resolve(rows);
        }


    });
    // connection.end();
    return deferred.promise;

}






function fetch_savings() {
    var deferred = q.defer();
    // connection.connect();
    // var list = new ArrayList;
    connection.query('SELECT B.BankName, L.state FROM Bank B INNER JOIN Location L INNER JOIN LocationSpecificBankDetails C ON B.BankId = C.BankId AND C.LocationId = L.id WHERE L.state = "Arizona" AND C.Saving = 1', function (err, rows, fields) {
        if (err)
            deferred.reject(err);
        else{
            console.log('The solution is: ', rows);

            // var keys = Object.keys(rows);
            // for (var i = 0; i < keys.length; i++) {
            //
            //     var value = JSON.stringify(rows[keys[i]]).split(':');
            //
            //     var j = value[1].indexOf('}');
            //     var new_val = value[1].slice(0, j)
            //     list.add(JSON.parse(new_val));
            //
            // }


            deferred.resolve(rows);
        }


    });
    // connection.end();
    return deferred.promise;

}



/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

router.get('/getdata', function (req, res) {
  res.send('respond with a resource getdata');
});

router.get("/getNavbarItem",function(req,res){
    fetch_Navbar()
        .then(function(rows){
            // This function get called, when success

            res.send(rows);
        },function(error){
            // This function get called, when error
            res.send(error);

        });

});


router.get("/getCheckingDetails",function(req,res){
    fetch_checkings()
        .then(function(rows){
            // This function get called, when success

            res.send(rows);
        },function(error){
            // This function get called, when error
            res.send(error);

        });

});



router.get("/getSavingsDetails",function(req,res){
    fetch_savings()
        .then(function(rows){
            // This function get called, when success

            res.send(rows);
        },function(error){
            // This function get called, when error
            res.send(error);

        });

});


module.exports = router;
