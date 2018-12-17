const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Povezava na Mongo
mongoose
    .connect(db)
    .than(() => console.log('MongoDB povezan...'))
    .catch(err => console.log(err));

    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Strežnik se je zagnal na ${port}`));