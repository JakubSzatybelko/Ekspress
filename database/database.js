var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
    console.error(err.message)
    throw err
}}
)
db.serialize(() => {
    db.run(`CREATE TABLE notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        data TEXT
        )`,
    (err) => {
        if (err) {
            // Table already created
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO notes (data) VALUES (?)'
            db.run(insert, [""])
        }
    });  
}
)


module.exports = db