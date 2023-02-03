// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let images = document.querySelector(".image");
let songNames = document.querySelector(".song-name");
let artists = document.querySelector(".artist");
let songLinks = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let songNamesList = ["Changes","Cigarettes Out The Window","Are We Still Friends","The Perfect Girl","90210"]
let artistNamesList = ["Deftones","Tv Girl","Tyler The Creator","Mareux","Travis Scott"]
let songLinksList = [
	"https://soundcloud.com/deftones_official/deftones-change-in-the-house",
	"https://soundcloud.com/tv-girl/cigarettes-out-the-window",
	"https://soundcloud.com/tylerthecreatorofficial/are-we-still-friends",
	"https://soundcloud.com/mareux/the-perfect-girl",
	"https://www.youtube.com/watch?v=BuNBLjJzRoo"
]
let imageUrlsList = ["https://i.scdn.co/image/ab67616d0000b2735c53799f473fa3e1a48c00ed","https://i.scdn.co/image/ab67616d0000b27332f5fec7a879ed6ef28f0dfd","https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57","https://i.ytimg.com/vi/W5Sq71VTJ9Q/maxresdefault.jpg","https://images.genius.com/1f2c3d087f56781aad526287f64d24b2.1000x1000x1.png"]


//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  imageUrlsList.forEach(function(imageUrl){
  displayImage.insertAdjacentHTML(`beforeend`,`<img src=${imageUrl}>`)  
  });
  songNamesList.forEach(function(songName){
  displaySong.insertAdjacentHTML(`beforeend`,`<p>${songName}</p>`)
  });
  artistNamesList.forEach(function(artistName){
  displayArtist.insertAdjacentHTML(`beforeend`,`<p>${artistName}</p>`)  
  });
  songLinksList.forEach(function(songLink){
  displayLink.insertAdjacentHTML(`beforeend`,`<a href= "${songLink}">"${songLink}"</a>`)  
  });

}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
