const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./routes/users');
const path = require('path')
const app = express();

//DB config
require('dotenv/config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, './static')));
//template engine
app.set('view engine', 'pug');
app.set('views', './views');

//connect to db
mongoose.connect(process.env.DB, { useNewUrlParser: true,useUnifiedTopology: true});

  mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

//user route
app.use('/user',User);

// app.get('/', (req,res) => {
//     res.sendFile(__dirname + '/index.html')
// });


//server running
app.listen(port, (req,res) => {
    console.log('Listening on port 3000.....')
})