const path = require('path');
const express = require('express');
const morgan = require('morgan');
const flash = require('connect-flash');

const publicDir = require('path').join(__dirname, 'public');
const router = express.Router();
const engine = require('ejs');
const app = express();

// Importing routes
const indexRoutes = require('./routes/index');

// Settings
app.set('port', process.env.PORT || 8000);
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

// Middleware
app.use(flash()); // to change between pages
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(publicDir));
//routes
app.use('/', indexRoutes);

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
  });

// FAVICON MIDDLEWARE
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})