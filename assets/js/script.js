//prevents jquery from running until DOM is constructed
$(document).ready(function () {
  
  //Uses dayjs to display the current day, date and time
  var now = dayjs().format('dddd MMMM D, YYYY. h:mm a');
  $('#currentDay').text(now);
  
  
  $('.btn').click(function() {
    //declares the text of the div with class "hour" as a variable, to be used as a unique key. this ensures the data will display in the proper place when retreived from local storage  
    var taskStorage = $(this).siblings('.hour').text();

    //declares user input as a variable, to be saved in localStorage
    var text = $(this).siblings('.description').val();
    
    //stores user input in localStorage
    localStorage.setItem(taskStorage, text);
    alert("Task Saved");
  });

  //retrieves data from localStorage
  $('.description').each(function() {
    var taskStorage = $(this).siblings('.hour').text();
    text = localStorage.getItem(taskStorage);
    
    //displays data from localStorage in the text area
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
  
});
