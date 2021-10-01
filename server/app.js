let express = require('express');
let app = express();
const cors = require('cors');

// Middleware
let createError = require('http-errors');
app.use(express.json());
app.use(cors());

let indexRouter = require('./routes');
let usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;

// let path = require('path');
// let cookieParser = require('cookie-parser');
// let logger = require('morgan');

// app.use(logger('dev'));
// Routes
// catch 404 and forward to error handler

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

