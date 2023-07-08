
$(document).ready(function () {

  var now = dayjs().format('dddd MMMM D, YYYY. h:mm a');
  $('#currentDay').text(now);
 

  $('.btn').click(function() {
    var text = $(this).siblings('.description').val();
    var taskStorage = $(this).siblings('.hour').text();
    localStorage.setItem(taskStorage, text);
    alert("Task Saved");
  });

  
  $('.description').each(function() {
    taskStorage = $(this).siblings('.hour').text();
    text = localStorage.getItem(taskStorage);
    $(this).text(text);
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
