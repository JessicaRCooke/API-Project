const baseUrl = 'https://images-api.nasa.gov/search?q='
let url;

const searchTerm = document.querySelector('.search')
const submitBtn = document.querySelector('submit')
const searchForm = document.querySelector('form')
const section = document.querySelector('section')

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
  e.preventDefault();
  url= `${baseUrl}${searchTerm.value}`;
  console.log('URL:', url);
  
  fetch(url)
  .then(response => response.json())
  .then(json => displayResults(json))
  
}

  


function displayResults(json) {

 //console.log(json)
while (section.firstChild) 
  section.removeChild(section.firstChild);
 

let images = json.collection.items
//console.log(images)
for (let i = 0; i <= 3; i++) {
let image = document.createElement('img')

let current = images[i]
  image.src = current.links[0].href
  console.log(current)
 section.appendChild(image) 
}
}  


