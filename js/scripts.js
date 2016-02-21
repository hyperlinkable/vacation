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

  // age prescan with exceptions for kids & elderly
    if (ageInput < 16 && activitiesInput==="Drinking Coffee") {
        var destinationReco = "ERROR: nocoffee";
        $("#nocoffee").show();
          }
      else if (ageInput < 16) {
        var destinationReco = "ERROR: kids";
        $("#kids").show();
        }
      else if (ageInput > 75 && (activitiesInput==="Skiing" || activitiesInput==="Surfing")) {
        var destinationReco = "ERROR: safety";
        $("#safety").show();
        }
      else if (ageInput > 75) {
        var destinationReco = "Ashland";
        $("#ashland").show();
        }
      else if (ageInput < 75 && ageInput > 16) {
        var destinationReco = "Oregon";
        }

      if (destinationReco==="Oregon" && weatherInput==="Warm & Sunny") {
        var destinationReco = "Hood River";
        $("#oregon").show();
        $(".oregonImage").append("<img class='img-responsive' src='img/hoodriver.jpg'>");
        $(".oregonURL").append("<a href='http://traveloregon.com/cities-regions/hood-river/'>Click for more info about " + destinationReco +"</a>");
          }
        else if (destinationReco==="Oregon" && weatherInput==="Cold & Snowy") {
          var destinationReco = "Mount Hood";
          $("#oregon").show();
          $(".oregonImage").append("<img class='img-responsive' src='img/mounthood.jpg'>");
          $(".oregonURL").append("<a href='http://traveloregon.com/cities-regions/mt-hood-the-gorge/'>Click for more info about " + destinationReco +"</a>");
            }
        else if (destinationReco==="Oregon" && weatherInput==="Hot & Dry") {
          var destinationReco = "Eastern Oregon";
          $("#oregon").show();
          $(".oregonImage").append("<img class='img-responsive' src='img/easternoregon.jpg'>");
          $(".oregonURL").append("<a href='http://traveloregon.com/cities-regions/eastern-oregon/'>Click for more info about " + destinationReco +"</a>");
            }
        else if (destinationReco==="Oregon" && weatherInput==="Cool & Rainy" && activitiesInput==="Skiing") {
          var destinationReco = "Mount Hood";
          $("#oregon").show();
          $(".oregonImage").append("<img class='img-responsive' src='img/mounthood.jpg'>");
          $(".oregonURL").append("<a href='http://traveloregon.com/cities-regions/mt-hood-the-gorge/'>Click for more info about " + destinationReco +"</a>");
            }
        else if (destinationReco==="Oregon" && weatherInput==="Cool & Rainy" && activitiesInput==="Surfing") {
          var destinationReco = "Oregon Coast";
          $("#oregon").show();
          $(".oregonImage").append("<img class='img-responsive' src='img/oregoncoast.jpg'>");
          $(".oregonURL").append("<a href='http://traveloregon.com/cities-regions/oregon-coast/'>Click for more info about " + destinationReco +"</a>");
            }
        else if (destinationReco==="Oregon" && weatherInput==="Cool & Rainy") {
          var destinationReco = "Portland";
          $("#oregon").show();
          $(".oregonImage").append("<img class='img-responsive' src='img/portland.jpg'>");
          $(".oregonURL").append("<a href='http://traveloregon.com/cities-regions/greater-portland/'>Click for more info about " + destinationReco +"</a>");
            }


// ----- END LOGIC FOR RECOMMENDATIONS -------


// Log answers to console for debug. COMMENT OUT IN PRODUCTION
    console.log("FormResponse: Age = " + ageInput);
    console.log("FormResponse: Name = " + nameInput);
    console.log("FormResponse: Weather = " + weatherInput);
    console.log("FormResponse: Activities = " + activitiesInput);
    console.log("Recommendation: destinationReco = " + destinationReco);

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
