$(document).ready(function() {

// Click to begin survey, hide start button, and show survey form
  $("button#startSurvey").click(function() {
    $("button#startSurvey").hide();
    $(".jumbotron img").hide();
    $("#survey").show();
  });

// On form submit, hide survey and show recommendation
  $("#survey form").submit(function(event) {
    $("#survey").hide();
    $("#reco").show();
  // debugger;

// Identify form input variables. Looping doesn't work here?
    // var responses = ["name","age"];
    // questions.forEach(function(response) {
    //   // var userInput = $("input#" + response).val();
    //   // var (response + "Input") = $("input#" + response).val();
    //   // $("." + response).text(userInput);
    //   // console.log("Form Response for " + "is " + response)
    // });

    var nameInput = $("input#name").val()
    var ageInput = parseInt($("input#age").val());
    var weatherInput = $("select#weather").val();
    var activitiesInput = $("select#activities").val();

// ----- START LOGIC FOR RECOMMENDATIONS -------
  // adapt for anonymous form entry
    if (nameInput == null || nameInput == "") {
      nameInput = "Sir or Madam";
    }


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
    console.log("FormResponse: Weather = " + weatherInput);
    console.log("FormResponse: Activities = " + activitiesInput);

// Inject form input variables into recommendation text
    // questions.forEach(function(response) {
    //   $("." + response).text(userInput);
    // });

    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".weather").text(weatherInput);
    $(".activities").text(activitiesInput);
    $(".destination").text(destinationReco);



// Show recommended destination and image

// Generate URL for appropriate vacation destination page


// Prevent default form submit function with "event" argument
    event.preventDefault();
  });

});
