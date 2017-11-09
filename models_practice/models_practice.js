var mysqlModel = require('mysql-model');

var connection = mysqlModel.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'none',
  database : 'model_practice',
});
 
var Movie = connection.extend({
    tableName: "movies",
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

//this becomes orm?

//var connection = require("./connection")???
 
movie = new connection({tableName: "movies"});

movie.find();
movie.find(method);
movie.find(callback);
movie.find(method, conditions);
movie.find(method, callback);
movie.find(method, conditions, callback);