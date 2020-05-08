var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "mydb"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  // CREATE DATABASE
  // con.query("CREATE DATABASE mydb", function (err, result) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });

  // CREATE TABLE and primary key
  // var sql = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });

  // ALTER TABLE when table is exists
  // var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table altered");
  // });

  // INSERT 1 record
  // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });

  // INSERT Multiple records
  // var sql = "INSERT INTO products (name) VALUES ?";
  // value customers
  // var values = [
  //   ['John', 'Highway 71'],
  //   ['Peter', 'Lowstreet 4'],
  //   ['Amy', 'Apple st 652'],
  //   ['Hannah', 'Mountain 21'],
  //   ['Michael', 'Valley 345'],
  //   ['Sandy', 'Ocean blvd 2'],
  //   ['Betty', 'Green Grass 1'],
  //   ['Richard', 'Sky st 331'],
  //   ['Susan', 'One way 98'],
  //   ['Vicky', 'Yellow Garden 2'],
  //   ['Ben', 'Park Lane 38'],
  //   ['William', 'Central st 954'],
  //   ['Chuck', 'Main Road 989'],
  //   ['Viola', 'Sideway 1633']
  // ];
  // value users
  // var values = [
  //   ['John', '154'],
  //   ['Peter', '154'],
  //   ['Amy', '155'],
  //   ['Hannah', ''],
  //   ['Michael', ''],
  // ];
  // value products
  // var values = [
  //   ['Chocolate Heaven'],
  //   ['Tasty Lemons'],
  //   ['Vanilla Dreams'],
  // ];
  // con.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records inserted: " + result.affectedRows);
  // });
  // GET Inserted ID
  // var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted, ID: " + result.insertId);
  // });

  // SELECT FROM
  // SELECT *
  // con.query("SELECT * FROM customers", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // Selecting Columns
  // con.query("SELECT name FROM customers", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // SELECT The Fields Object
  // con.query("SELECT name, address FROM customers", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(fields);
  // });

  // WHERE
  // Select With a Filter
  // con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // Wildcard Characters
  // con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // Escaping Query Values
  // var adr = 'Mountain 21';
  // var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // using ? in WHERE
  // var adr = 'Mountain 21';
  // var sql = 'SELECT * FROM customers WHERE address = ?';
  // con.query(sql, [adr], function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // multi in WHERE
  // var name = 'Amy';
  // var adr = 'Mountain 21';
  // var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
  // con.query(sql, [name, adr], function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  // SORT ORDER BY
  // con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  // DELETE Record
  // var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records deleted: " + result.affectedRows);
  // });

  // UPDATE record
  // var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result.affectedRows + " record(s) updated");
  // });

  // LIMIT
  // var sql = "SELECT * FROM customers LIMIT 5";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // Start From Another Position
  // var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // Shorter Syntax
  // var sql = "SELECT * FROM customers LIMIT 2, 5";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  // JOIN
  // JOIN, INNER JOIN
  // var sql = "SELECT users.name AS user, products.name AS favorite FROM users INNER JOIN products ON users.favorite_product = products.id";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // LEFT JOIN
  // var sql = "SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = products.id";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // RIGHT JOIN
  var sql = "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});