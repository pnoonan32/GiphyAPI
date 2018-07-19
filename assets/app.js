// api = "http://api.giphy.com/v1/gifs/search?";
// apiKey = "&api_key=dc6zaTOxFJmzC";

// ex. query = "kyrie+irving"

// var testURL = "http://api.giphy.com/v1/gifs/search?q=jason+williams&api_key=dc6zaTOxFJmzC"


// improvising to do list: 

// 1: create a slide down message for every time an event occurs





//////////////////////////////////////////////////////////////
// Code to retrieve the user's desired search inputs //
function getData() {
  var input = $("#searchText").val()
  console.log(input);
  var xhr = $.get("https://api.giphy.com/v1/gifs/search?q="+input+"&api_key=dc6zaTOxFJmzC&limit=15");
  xhr.done(function (response) {
    console.log("success got data", response);
    var giphyimages = response.data

    $("#giphyContent").html(""); 
    for (i in giphyimages) {
      $("#giphyContent").append("<img src='" + giphyimages[i].images.original.url + "' style='height:300px; width:300px; 'class=mx-auto>")
    }


  });

}
// Code to retrieve the user's desired search inputs //
//////////////////////////////////////////////////////////////////


// The predefined buttons are all 30 teams in the NBA
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

var $nbaTeams;

///////////////////////////////////////////////////////////////////
// To append all 30 NBA teams as buttons on the screen //
var nbaButtons = function nbaGiphy() {
  for ( i in predefinedButtons ) {
    $nbaTeams = createButton(predefinedButtons[i])
    $("#nbaTags").append($nbaTeams);
  }
}
// To append all 30 NBA teams as buttons on the screen //



// The function for creating all buttons dynamically //
function createButton(text){
  return $('<button data-value="' + text + '" class="btn btn-secondary team-select">')
  .text(text);
}
// The function for creating all buttons dynamically //

nbaButtons();
//////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////
// After the category is created (Lines 121-131),  when the user clicks the created category button this will retrieve the data on it  //
$('.team-select').on('click', getNBAGiphy)
// After the category is created, when the user clicks the created category button this will retrieve the data on it //
/////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////
// The code where the preDefined buttons images are retrieved for whichever button is clicked  //

function getNBAGiphy(event) { 
   var nbaSearchGifs = $(this).data('value');
   console.log({nbaSearchGifs});
    xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+nbaSearchGifs+"&api_key=dc6zaTOxFJmzC&limit=15");
    xhr.done(function (response) {
      console.log("success got data", response);
       nbaTeamData = response.data
       $("#giphyContent").html("");
       for (i in nbaTeamData) {
         $("#giphyContent").append("<img src='" + nbaTeamData[i].images.original.url + "' style='height:300px; width:300px; 'class=mx-auto>")
       }
  
  })
};

// The code where the preDefined buttons images are retrieved for whichever button is clicked  //
/////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////
// where the categories are created and rendered to the screen by the user //

$('#addCategory button').on('click', function(event){
  var text = $('#addCategory input').val()
  console.log({text})
  if(text.length === 0){
    return;
  }
  $category = createButton(text)
  predefinedButtons.push(text);
  $("#userCategories").append($category);
  $category.on('click', getNBAGiphy)
})

// where the categories are created and rendered to the screen by the user //
//////////////////////////////////////////////////////////////////////











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



