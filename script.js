


fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1995-06-16")
.then(function(response) {
  return response.json();
  console.log(response)
});
















 





















//const baseURL = 'https://cors-anywhere.herokuapp.com/images-api.nasa.gov/search'
//let url;

//const searchTerm = document.querySelector('.date');
//const searchForm = document.querySelectorAll('form');
//const submitBtn = document.querySelector('.submit');
//const section = document.querySelector('section');

//submitBtn.addEventListener('submit', fetch);
/*
 
function fetchResult(e) {
e.preventdefault();
url= `${baseURL}${date.value}`;
console.log('URL:', url);
};
fetch('https://api.nasa.gov/planetary/apod?api_key=n2hRy0Gy07ZPDBnBhzqTjqzIIexufkE0b4ptXLOV/date')
.then(response => {
  return response.json();
}) 
.then(displayResult(json) {
let img = document.createElement('img')
});
  
fetch(url) // using fetch to call the url for the api with our specific search terms -- thsi fetch is asynchrons and returns a promise
    .then(function (result) { //promise resolver to call the function result
      console.log(result) // console logs the result
      return result.json(); // returns the result and jsonifies it
    })
    .then(function (json) { //second promise that takes in the json as an object
      console.log(json); // console logs the jsonified information
      displayResults(json); //calls the 'displayResults' function with the jsonifiied information
    });

    function displayResults(json) {
      while (section.firstChild) {
        section.removeChild(section.firstChild);
      }};

      let img = document.createElement('img');
      let para = document.createElement('p');

      para.textContent = "copyright:"; "explanation:" ;
*/
      

//fetchResults(e);