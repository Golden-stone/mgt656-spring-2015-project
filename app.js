'use strict';

// Import our express and our configuration
var express = require('express');
var configure = require('./config.js');

// Import our controllers
var indexControllers = require('./controllers/index.js');
var aboutControllers = require('./controllers/about.js');
var eventControllers = require('./controllers/events.js');


// Create our express app
var app = express();

// Configure it
configure(app);

// Add routes mapping URLs to controllers
app.get('/', indexControllers.index);
app.get('/about', aboutControllers.about);
app.get('/events', eventControllers.listEvents);
app.get('/events/new', eventControllers.newEvent);
app.get('/api/events', eventControllers.api);

app.post('/events/new', eventControllers.saveEvent);
app.get('/events/:id([0-9]+)', eventControllers.eventDetail);
app.post('/events/:id([0-9]+)',eventControllers.rsvp);
// <<<<<<< HEAD
// =======
// app.get('/events/:id([0-9]+)', eventControllers.eventDetail);
// >>>>>>> 061472a30b2c90b5e54a4484f4fd633c800efbb9
// app.get('/api/events', eventControllers.api);

module.exports = app;
