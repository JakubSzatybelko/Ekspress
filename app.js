const { json } = require('express')
const express = require('express')
const app = express()
const path = require('path');
var db = require("./database/database.js");

const port = 3000

app.use(express.json());

app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
app.get('/', (req, res) => {
  res.type('.html');
  res.sendFile(path.join(__dirname + '/frontend/index.html'));
})
app.get('/index.js', (req, res) => {
  res.type('.js');
  res.sendFile(path.join(__dirname + '/frontend/index.js'));
})
app.get('/style.css', (req, res) => {
  res.type('.css');
  res.sendFile(path.join(__dirname + '/frontend/style.css'));
})


app.post('/save', (req, res) => {
  db.run(`UPDATE notes SET data = ? WHERE id = 1`, [req.body.data], function(err) {
    if (err) {
      return console.log(err.message);
    }
    res.status(200).send("success");
  });
})
app.get('/load', (req, res) => {
  db.get(`SELECT data FROM notes WHERE id = 1`, function(err, row) {
    if (err) {
      return console.log(err.message);
    }
    res.status(200).json(JSON.stringify({data:row.data}));
  });
})

app.use(function(req, res){
    res.status(404);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  


