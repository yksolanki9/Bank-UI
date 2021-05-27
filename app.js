const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { Client } = require('pg');

const app = express();
dotenv.config();

const PORT = process.env.PORT;

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
}

const client = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

client.connect();

app.get('/api/branches/city', (req, res) => {
    const q = req.query.q;
    const limit = req.query.limit;
    const offset = req.query.offset;

    var query = `SELECT * FROM branches `;

    if(q) {
        query += ` WHERE LOWER(city) = '${q.toLowerCase()}' `;
    } 
    query += `ORDER BY ifsc ASC `;
    if(limit) {
        query += `LIMIT ${limit} `;
    }
    if(offset) {
        query +=  `OFFSET ${offset} `;
    }
    (async() => {
        try {
            const response = await client.query(query);
            res.send(response.rows);
        } catch (err) {
            console.log(err.stack);
        }
    })();
});

app.listen(PORT || 3002, () => {
    console.log('Server is up and running!');
});