require("dovenv").config();

const { Client } = require("pg");

const client = new Client({
    host: process.env.DB_HOST,
    host: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
})

client.connect();

client.query("SELECT * FROM users", (err, res) => {
    if (err) {
        console.error(err)
    } else {
        console.log(res.rows)
    }
    client.end();
});