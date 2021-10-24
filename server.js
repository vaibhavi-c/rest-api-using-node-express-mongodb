require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');




mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

// Setting up basic middleware for all Express requests
// app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
// app.use(bodyParser.json()); // Send JSON responses

app.use(express.json())


const studentsRouter = require('./routes/students')
app.use('/students', studentsRouter)


app.listen(3000, () => console.log('Server has started'));
