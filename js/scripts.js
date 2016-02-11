$(document).ready(function() {
// Click to begin survey, hide start button, and show survey form
  $("button#startSurvey").click(function() {
    $("button#startSurvey").hide();
    $("#survey").show();
  });

// On form submit, hide survey and show recommendation
  $("#survey form").submit(function(event) {
    $("#survey").hide();
    $("#reco").show();

// Identify form input variables
    var nameInput = $("input#name").val();

// Logic to determine recommendations


// Inject form input variables into recommendation text
    $(".name").text(nameInput);

// Show recommended destination and image

// Generate URL for appropriate vacation destination page


// Prevent default form submit function with "event" argument
    event.preventDefault();
  });

});
