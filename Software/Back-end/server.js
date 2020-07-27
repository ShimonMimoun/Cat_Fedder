// const express = require('express');
// const bodyParser =require('body-parser');
// const bcrypt=require('bcrypt-nodejs')
// const cors=require('cors');
// var mysql = require('mysql');
// const app = express();
// const port = 3001;

// app.use(bodyParser.json());
// app.use(cors());

// const SELECT_ALL='SELECT tag_id from log where id=19';


// var connection = mysql.createConnection({
//     host: 'avim.eu',
//     user: 'shimon',
//     password: '****************',
//     database: 'catfeeder'

//   });


//   connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting to mysql '+err.message );
//       return;
//     }
//     console.log('connected to mysql' );
//   });



// app.post('/signin', (req,res)=>{
// })

// app.get('/', (req, res)=>{

//     connection.query(SELECT_ALL,(err,results)=>{
//       if(err){
//         return res.send(err);
//       }
//       else{
//         return res.send(results)
//       }
//     }
//     )


// });

// app.get('/home', function(req,res){
//   connection.query('SELECT *, max(log.current_time) as lastTime from cat join log on cat.uid=log.tag_id where log.current_time  GROUP BY cat.uid ', function(error,results,fields){
//     if (error) throw error;
//     res.send(results); 
//    });

// });

// app.get('/AboutTheCat', function(req,res){
//   connection.query('SELECT * from cat join log on cat.uid=log.tag_id', function(error,results,fields){
//     if (error) throw error;
//     res.send(results); 
//    });

// });


// app.post('/AddCat', (req, res)=>{
//   const cat = {  
//     ChipNumber: req.body.ChipNumber,
//     CatName: req.body.CatName,
//     id:'fdfd',
//     CatWeight: req.body.CatWeight,
//     CatAge: req.body.CatAge


//   };


//   connection.query("INSERT INTO cat  VALUES ?", [cat],  function(error,results,fields){
//     if (error) throw error.message;
//     res.send(results); 
//    });





// });






// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var mysql = require('mysql');
var port = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

var Users = require('./routes/Users')

app.use('/users', Users)


var connection = mysql.createConnection({
    host: 'avim.eu',
    user: 'shimon',
    password: '***********',
    database: 'catfeeder'

});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting to mysql ' + err.message);
        return;
    }
    console.log('connected to mysql');
});



app.get('/home/:user', function(req, res) {
    connection.query('SELECT *  from cat  join auth on auth.uid=cat.uid  WHERE cat.key= ?', [req.params.user], function(error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

});

app.use('/catD/:id', function(req, res) {
    connection.query('UPDATE auth SET auth=0  WHERE auth.uid= ?', [req.params.id], function(error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

});




app.use('/catP/:id', function(req, res) {
    connection.query('UPDATE auth SET auth=1  WHERE auth.uid= ?', [req.params.id], function(error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

});


app.use('/delete/:id', function(req, res) {
    connection.query('DELETE cat, auth FROM cat INNER JOIN auth on cat.uid=auth.uid WHERE cat.uid= ?', [req.params.id], function(error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

});


app.get('/details/:user', function(req, res) {
    connection.query('SELECT * from cat join log on cat.uid=log.tag_id WHERE cat.key= ? ORDER BY log.current_time DESC', [req.params.user], function(error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

});

app.get('/AboutTheCat/:id', function(req, res) {
    connection.query('SELECT  * from cat join log on cat.uid=log.tag_id WHERE cat.uid= ? ORDER BY log.current_time DESC LIMIT 1', [req.params.id], function(error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

});


app.listen(port, function() {
    console.log('Server is running on port: ' + port)
})




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var express = require('express')
// var cors = require('cors')
// var bodyParser = require('body-parser')
// var app = express()
// var port = process.env.PORT || 3001

// app.use(bodyParser.json())
// app.use(cors())
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// )

// var Users = require('./routes/Users')

// app.use('/users', Users)

// app.listen(port, function() {
//   console.log('Server is running on port: ' + port)
// })