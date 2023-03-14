/*
KEY FEATURE: Personalize it
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you about STEM educaton in our school district. It is very important to have STEM classes that provide students with the exposure to fields that they would have never seen before. This is particularly important for black women who are very underrepresented in STEM fields. I hope that this call has impacted you as a leader in education in our area to either start, expand, or continue out district's STEM programs. Thank you and have a nice day!";
}


//Move these variables to the top
var factList = [
  "Science, technology, engineering, and mathematics (STEM) occupations are expected to experience rapid growth in the coming decade.1 Technology and engineering are among the top sought-after skills in the United States.2 However, a gender gap in STEM persists across the world.", 
  "Women receive a premium for working in STEM (105 percentage points higher than the earnings of women in non-STEM) but are more likely than men to work in the “STEM periphery”—roles in which they can apply STEM skills and expertise, but in lower-paying jobs outside of traditional STEM occupations.", 
  "In March, the National Science Foundation reported that in 2016 alone, Black women earned more than 33,000 bachelor’s degrees in science and engineering, and 24 percent of doctorates awarded to Black women were in STEM. But that same report showed that in 2017, only 5 percent of managerial jobs in STEM were held by Black women and men combined.", 
  
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
