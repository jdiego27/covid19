const path = require('path');
const express = require('express');
const morgan = require('morgan');

const publicDir = require('path').join(__dirname, 'public');
const router = express.Router();
const engine = require('ejs');
const app = express();

// Importing routes
const indexRoutes = require('./routes/index');

// Settings
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(publicDir));
//routes
app.use('/', indexRoutes);


// FAVICON MIDDLEWARE
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})