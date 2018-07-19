// api = "http://api.giphy.com/v1/gifs/search?";
// apiKey = "&api_key=dc6zaTOxFJmzC";

// ex. query = "kyrie+irving"

// var testURL = "http://api.giphy.com/v1/gifs/search?q=jason+williams&api_key=dc6zaTOxFJmzC"


// Code to retrieve the user's desired search inputs //
function getData() {
  var input = $("#searchText").val()
  console.log(input);
  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=dc6zaTOxFJmzC&limit=15");
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


//  Code for predefined buttons  //
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

var nbaButtons = function nbaGiphy() {
for ( i in predefinedButtons ) {
  $nbaTeams = $("<button class='btn btn-secondary' 'onclick='getNBAGiphy()''>").text(predefinedButtons[i]);
  $("#nbaTags").append($nbaTeams);
}

}
nbaButtons();

function getNBAGiphy() {
var nbaSearchGifs;
  nbaSearchGifs.addEventListener('click', function() {
    nbaSearchGifs = $(".btn btn-secondary").val();
    xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+nbaSearchGifs+"&api_key=dc6zaTOxFJmzC&limit=15");
    xhr.done(function (response) {
      console.log("success got data", response);
       nbaTeamData = response.data
       $("#giphyContent").html(""); 
  console.log(nbaSearchGifs);
  })
});

}
getNBAGiphy();



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


// Make sure to research pagination api


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



