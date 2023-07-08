// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  var now = dayjs().format('MMMM D, YYYY. h:mm a');
  $('#currentDay').text(now);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.btn').click(function() {
    var text = $(this).siblings('.description').val();
    var taskStorage = $(this).siblings('.hour').text();
    localStorage.setItem(taskStorage, text);
    console.log(taskStorage)
    console.log(text);
    //alert("Task Saved");
  });

  



  //retrieves current time and sets variable to the current hour
  var currentHour = dayjs().hour()
  //parse the text of each time block to get the hour
  $('.time-block').each(function(){
    var timeText = $(this).text();
    var blockHour = parseInt(timeText);
    //converts blockHour to 24hr for comparison to current hour 
    if (blockHour < 6){
      blockHour += 12
    }
    //adds classes based on comparison to current hour
    if (blockHour < currentHour){
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
  


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
});
