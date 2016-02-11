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
    var ageInput = $("input#age").val();

// ----- START LOGIC FOR RECOMMENDATIONS -------
  // send children to Disneyland and old people to Vermont
    if (ageInput < 15) {
      var destinationReco = "DisneyLand";
      }
      else if (ageInput > 70) {
        var destinationReco = "Vermont";
      }
      else
        var destinationReco = "Undefined";

// ----- END LOGIC FOR RECOMMENDATIONS -------


// Log answers to console for debug. COMMENT OUT IN PRODUCTION
    console.log("FormResponse: Age = " + ageInput);
    console.log("FormResponse: Name = " + nameInput);

// Inject form input variables into recommendation text
    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".destination").text(destinationReco);



// Show recommended destination and image

// Generate URL for appropriate vacation destination page


// Prevent default form submit function with "event" argument
    event.preventDefault();
  });

});
