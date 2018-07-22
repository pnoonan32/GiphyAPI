// api = "http://api.giphy.com/v1/gifs/search?";
// apiKey = "&api_key=dc6zaTOxFJmzC";

// ex. query = "kyrie+irving"

// var testURL = "http://api.giphy.com/v1/gifs/search?q=jason+williams&api_key=dc6zaTOxFJmzC"

// Note to Self //
//to see how the images pause and play go to under the id giphyContent div tag and in the image url the ones that are paused have an "_s" in them.
https://media0.giphy.com/media/3ohfFICCWUzfhdiLwA/giphy.gif?cid=e1bb72ff5b54d39f326f332e51da949c
// Note to Self //




// // Flash Message features for when any button is clicked  (Specifically for the add category section)// //
$("#addCategoryMessage").hide();

function showAddCategoryMessage() {
  $("#addCategoryMessage")
    .fadeIn(1000)
    .delay(4000)
    .fadeOut(1000);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};


// Flash Message features for when any button is clicked //
$("#flashMessage").hide();

function showFlashMessage() {
  $("#flashMessage")
    .fadeIn(1000)
    .delay(3000)
    .fadeOut(1000);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
// Flash Message features for when any button is clicked //
///////////////////////////////////////////////////////////////////////



// Dynamically adding giphy images //
function imageState(gifs) {
  var imageTag = $("<img>");
  imageTag.attr("src", gifs[i].images.original.url);
  imageTag.addClass("mx-auto text-center gifState");
  imageTag.attr("style", "width: 300px; height: 300px");
  //  imageTag.attr("id", "play-pause");
  imageTag.attr('data-animate', gifs[i].images.original.url);
  imageTag.attr('data-still', gifs[i].images.original_still.url);
  imageTag.attr('data-state', 'animate');


  $("#giphyContent").prepend(imageTag);
};
// Dynamically adding giphy images //
//////////////////////////////////////////////////////////////////////////




// To pause and play the gifs //
$(document.body).on('click', ".gifState", function () {

  // To make sure when the user is clicking a certain image, that image will pause and play while all the other images are still animated (the default setting) //
  var $ImageElement = $(this);


  var $allImages = $(".gifState");
  $allImages.each(function () {
    var $image = $(this);
    if ($image.data('animate') === $ImageElement.data('animate')) {
      return;
    }
    $image.attr('src', $image.data('animate'));
    $image.data('state', 'animate');
  });
  // To change the state of the image (when the image is playing & when the image is paused) //
  if ($ImageElement.data('state') === 'animate') { // currently animating -> change to still
    $ImageElement.removeClass('animate');
    $ImageElement.attr('src', $ImageElement.data('still'));
    $ImageElement.data('state', 'still');
    // changing the src attr to the still image
  } else { // still -> animating
    $ImageElement.addClass('animate');
    $ImageElement.attr('src', $ImageElement.data('animate')); // changing the src attr to the animated image
    $ImageElement.data('state', 'animate');
  };

});
    // To change the state of the image (when the image is playing & when the image is paused) //

// To pause and play the gifs //
///////////////////////////////////////////////////////////////////////////////////





// Code to retrieve the user's desired search inputs //
$("#searchGifs").on("click", getData);
function getData() {
  var input = $("#searchText").val()
  console.log(input);
  var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC&limit=15");
  xhr.then(function (response) {
    console.log("success got data", response);
    var giphyimages = response.data
    $("#giphyContent").html("");
    for (i in giphyimages) {
      imageState(giphyimages)

      // $("#giphyContent").append("<img src='" + giphyimages[i].images.original.url + "' style='height:300px; width:300px; 'class=mx-auto data-attr>")
    }


  });

};
// Code to retrieve the user's desired search inputs //
///////////////////////////////////////////////////////////////





// The predefined buttons are all 30 teams in the NBA //
var predefinedButtons = [
  "Atlanta Hawks",
  "Boston Celtics",
  "Brooklyn Nets",
  "Charlotte Hornets",
  "Chicago Bulls",
  "Cleveland Cavaliers",
  "Dallas Mavericks",
  "Denver Nuggets",
  "Detroit Pistons",
  "Golden State Warriors",
  "Houston Rockets",
  "Indiana Pacers",
  "LA Clippers",
  "LA Lakers ",
  "Memphis Grizzlies",
  "Miami Heat",
  "Milwaukee Bucks",
  "Minnesota Timberwolves",
  "New Orleans Hornets",
  "New York Knicks",
  "Oklahoma City Thunder",
  "Orlando Magic",
  "Philadelphia Sixers",
  "Phoenix Suns",
  "Portland Trail Blazers",
  "Sacramento Kings",
  "San Antonio Spurs",
  "Toronto Raptors",
  "Utah Jazz",
  "Washington Wizards"
];
console.log(predefinedButtons);

// The predefined buttons are all 30 teams in the NBA //



// Function to dynamically append the 30 buttons on the webpage and for all other buttons //

// To append all 30 NBA teams as buttons on the screen //
var $nbaTeams;
function nbaButtons() {
  for (i in predefinedButtons) {
    $nbaTeams = createButton(predefinedButtons[i])
    $("#nbaTags").append($nbaTeams);
  }
};
// To append all 30 NBA teams as buttons on the screen //

// The function for creating all buttons dynamically //
function createButton(text) {
  return $('<button data-value="' + text + '" class="btn btn-secondary team-select" onclick="showFlashMessage()">')
    .text(text);
};
// The function for creating all buttons dynamically //

nbaButtons();
// Function to dynamically append the 30 buttons on the webpage and for all other buttons //



// After the category is created (Lines 121-131),  when the user clicks the created category button this will retrieve the data on it  //
$('.team-select').on('click', getNBAGiphy)
// After the category is created, when the user clicks the created category button this will retrieve the data on it //




// The code where the preDefined buttons images are retrieved for whichever button is clicked  //

function getNBAGiphy(event) {
  var nbaSearchGifs = $(this).data('value');
  console.log({ nbaSearchGifs });
  xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + nbaSearchGifs + "&api_key=dc6zaTOxFJmzC&limit=15");
  xhr.done(function (response) {
    console.log("success got data", response);
    nbaTeamData = response.data
    $("#giphyContent").html("");
    for (i in nbaTeamData) {
      imageState(nbaTeamData);
    }

  })
};
// The code where the preDefined buttons images are retrieved for whichever button is clicked  //
/////////////////////////////////////////////////////////////////






// where the categories are created and rendered to the screen by the user //

$('#addCategory button').on('click', function (event) {
  var text = $('#addCategory input').val()
  console.log({ text })
  if (text.length === 0) {
    return;
  }
  $category = createButton(text)
  predefinedButtons.push(text);
  $("#userCategories").append($category);
  $category.on('click', getNBAGiphy)
})

// where the categories are created and rendered to the screen by the user //












// *irrelevant to project, ignore text below this line (158)


// if ( nbaButtons().val() ) {
//   xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=dc6zaTOxFJmzC&limit=15");
//   xhr.done(function (response) {
//     console.log("success got data", response);
//      giphyimages = response.data
// });
// }

// $("#giphyContent").html(""); 
// console.log($nbaTeams);




// nbaButtons.on('click', function () {
//   xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=dc6zaTOxFJmzC&limit=15");
//   xhr.done(function (response) {
//     console.log("success got data", response);
//      giphyimages = response.data
//     $("#giphyContent").html(""); 
//   console.log($nbaTeams);
//   });

// });

// Add the team logos next to the buttons??


// Make sure to research pagination api?


// function searchAgain() {
//   $("#seachGifs").click(function() {
//     window.location.href = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=dc6zaTOxFJmzC"); 
//  });

// }

// getData();





// code for fetch API (Optional) // 

  // fetch(url)
  // .then(function(response) {
  //   if (response.status !== 200) {
  //       console.log('there was an error querying that location');
  //   }
  //   console.log(response);
  // });

  // code for fetch API (Optional) // 



