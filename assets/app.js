// api = "http://api.giphy.com/v1/gifs/search?";
// apiKey = "&api_key=dc6zaTOxFJmzC";

// ex. query = "kyrie+irving"

// var testURL = "http://api.giphy.com/v1/gifs/search?q=jason+williams&api_key=dc6zaTOxFJmzC"



function getData() {
  var input = $("#searchText").val()

  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=dc6zaTOxFJmzC");
  xhr.done(function (response) {
    console.log("success got data", response);
    var giphyimages = response.data

    for (i in giphyimages) {
      $("#giphyContent").append("<img src='" + giphyimages[i].images.original.url + "' style='height:300px; width:300px; 'class=mx-auto>")
    }

    searchAgain();

  });


}


function searchAgain() {
  $("#seachGifs").get();
}




// code for fetch API (Optional) // 

  // fetch(url)
  // .then(function(response) {
  //   if (response.status !== 200) {
  //       console.log('there was an error querying that location');
  //   }
  //   console.log(response);
  // });

  // code for fetch API (Optional) // 



