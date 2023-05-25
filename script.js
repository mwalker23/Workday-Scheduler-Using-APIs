var saveButton = document.querySelector("#save-button");
var planner = document.getElementsByClassName("description")



// A listener for click events on the save button. 
$(function () {
  $(".saveBtn")
    .on("click", function () {
      console.log($(this));
    })

  // Code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
  $(".time-block")
    .each(function () {
      console.log($(this).attr("id").split("-")[1]);
      var time = $(this).attr("id").split("-")[1]
      var hour = dayjs().hour();
      console.log(hour);
      if (time == hour) {
        $(this).addClass("present")
      }
      else if (time < hour) {
        $(this).addClass("past")
      }
      else {
        $(this).addClass("future")
      }
    })


  // Code to display the current date in the header of the page.
  $("#currentDay")
    .text(dayjs().format('MM/DD/YYYY'))
});
