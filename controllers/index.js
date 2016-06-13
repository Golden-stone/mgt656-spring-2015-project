// 'use strict';

// var events = require('../models/events');
// /**
// * Controller that renders our index (home) page.
// */
// function index (request, response) {
//   var now = new Date();
  
//   var contextData = {
//     'title': 'eventNinja',
//     'tagline': 'A MGT 656 Class Project.',
//     'events': []
//   };
//   for(var i=0;i < events.all.length; i++){
//     var event = events.all[i];
//     if(event.date > now){
//       contextData.events.push(event);
//     }
//   }
//   response.render('index.html', contextData);
// }

// module.exports = {
//   index: index
// };
//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "https://docs.google.com/spreadsheets/d/19nPqTvg6QWrxygfIZJI2dayXzLsC2M7gZbKeoeraFMY/pubhtml"
  
//  "19nPqTvg6QWrxygfIZJI2dayXzLsC2M7gZbKeoeraFMY";
//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [{
  "data": "acronym",
  "title": "Acronym"
}, {
  "data": "definition",
  "title": "Definition"
}, {
  "data": "domain",
  "title": "Domain"
}];

$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive" id="mySelection"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#mySelection").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns,
      "order": [
        [2, "desc"]
      ], //order on second column
      "pagingType": "simple" //no page numbers
        //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
    });
  }
});
//end of writeTable
