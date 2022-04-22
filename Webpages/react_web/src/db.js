import mysql from 'mysql';

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dnjfchs231@",
  database : 'opentutorials'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const table = db.query('SELECT * FROM topic', function(error,results) {
    if (error) {
        console.log(error);
    }
    return results;
})

export default table;