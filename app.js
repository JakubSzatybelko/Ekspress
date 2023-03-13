const { json } = require('express')
const express = require('express')
const app = express()

var db = require("./database.js")

const port = 3000

app.get("/api/users", (req, res, next) => {
  var sql = "select * from user"
  var params = []
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
});

app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

app.use(function(req, res){
    res.status(404);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  


// MongoDB integration

// async function FetchPlanets() {
//   await mongoose.connect('mongodb+srv://say10:BwcauBfbz8mmF6x@cluster0.c8egod1.mongodb.net/sample_guides?retryWrites=true&w=majority');
//   const PlanetSchema = new mongoose.Schema({
//     name:String,
//   });
//   const Planet = mongoose.model('planet', PlanetSchema);
// const PlanetD = await Planet.find();
// }


