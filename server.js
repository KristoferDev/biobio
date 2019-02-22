const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Db
mongoose
   .connect(db, { useNewUrlParser: true })
   .then(() => console.log('Mongodb connected'))
   .catch(err => console.log(err))

// Routes
app.use('/api/users', users);

// Port number for Heroku and local
const port = process.env.PORT || 5000;

app.listen(port, () => {
   console.log(`Server up and running on port ${port}`);
});
