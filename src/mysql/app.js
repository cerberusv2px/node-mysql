const express = require('express');
const mysql = require('mysql');
const app = express();
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'evolveasia',
  database: 'nodemysql'
});

db.connect((err) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log('MySQL Connected');
  }
});

// create db
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('database created');
  });
});

//create table
app.get('/createpoststable', (req, res) => {
  let sql = 'CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), body VARCHAR(255))';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Table created');
  });
});

//insert
app.get('/insert', (req, res) => {
  let post = { title: 'Kiki', body: 'Shitty Song' };
  let sql = 'INSERT INTO posts SET ?';
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('post created');
  });
});

//select posts
app.get('/getposts', (req, res) => {
  let sql = 'SELECT * FROM posts';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send('posts fetched');
  });
});

//select single post
app.get('/getposts/:id', (req, res) => {
  let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send('Row fetched');
  });
});

app.listen('5000', () => {
  console.log('Server started on port 5000');
});