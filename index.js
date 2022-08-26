const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const connToMongo = require('./db');
var cors = require('cors');

app.use(cors());

connToMongo();

app.use(express.json());

// available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});