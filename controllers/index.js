'use strict';

var events = require('../models/events');q
/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var now = new Date();
  
  var contextData = {
    'title': 'MGT 656 Project',
    'tagline': 'A MGT 656 Class Project.',
    'events': []
  };
  for(var i=0;i < events.all.length; i++){
    var event = events.all[i];
    if(event.date > now){
      contextData.events.push(event);
    }
  }
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
