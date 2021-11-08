
  // Defining Question, Yes, No ,Next and Answer for later function
  const Question = document.querySelector("#question");
  const Answer = document.querySelector("#answer")
  const Yes = document.querySelector("#yes")
  const No = document.querySelector("#no")
  const Next = document.querySelector("#next")
  const Subquestion = document.querySelector("#subQuestion")
  
  //swap

const Change= document.querySelector("#change"); //defining the variable Swap
let time = 0; // defining time   
let imagelist = ["alt1.jpg","alt2.jpg"] //list of src
for (let i=0; i<imagelist.length; i++ ){ // move number up by one 
 task(i); 
 } 


 
  
 

 function task(i) {
   setTimeout(function() {
     Change.src = (imagelist[time]);// telling where to show the text
     time +=1; // making time go up by one
   }, 86400000 * i);// when to change CHANGE BACK TO 24 HOURS AFTER TESTS  
  }


     //Common products slideshow
  
var slideIndex = 1; //defining the varaible slide index
showSlides(slideIndex);
  
function plusSlides(n) { // writing out the function plusSlides
  showSlides(slideIndex += n); // adding a number to the current slide (n) to move it
}

function currentSlide(n) { // writing out the function currentSlide
  showSlides(slideIndex = n); // stating that n is the current slide
}

function showSlides(n) { //writing out the function showSlides
  var i; // creating a variable called i
  var slides = document.getElementsByClassName("mySlides"); // creating a variable called slides
  if (n > slides.length) {slideIndex = 1} // if n is greater than the number of slides go back to 1    
  if (n < 1) {slideIndex = slides.length} // if slide index is less than 1 the slideIndex is equal to the slide length
  for (i = 0; i < slides.length; i++) { // increase the slide.length by 1
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block"; // shows the slide  
}


//Popup survey

 
 
  
    
  function openForm() { // opens the survey
      let myForm = document.getElementById("myForm") // creates variable called myForm
      myForm.style.display = "block"; //shows the survey
      Yes.style.display = "none"; // hiding Yes button 
      No.style.display = "none";// hiding No button 
      Subquestion.style.display = "none";// hiding subquestion textscience 
      Question.innerHTML = "What is your name ? " ;//stating where the text should be 
  }
  

  
  //Question 2
  
 //Question 2
  
 function sFunction(){ //telling the function sFunction what to do 
  var user = document.querySelector("#answer").value; //creating a variable called user
  Question.innerHTML = "Hi   " + user + ", is there are product we are missing?" //stating where the text should be
  Yes.style.display = "block"; // showing Yes button
  No.style.display = "block"; // showing No button
  Answer.style.display = "none"; // hide Answer element
  Next.style.display = "none"; // hide Next element
  Subquestion.style.display = "none"// hiding subquestion text
  Next.setAttribute("onClick", "javascript: nFunction();"); //directing it to which function to go to next
  Answer.value = " " // Telling Answer. value to be = to null
 
}

function yesFunction(){
  Question.innerHTML = "What we are missing?" //stating where the text should be
  Yes.style.display = "none"; // hiding Yes button
  No.style.display = "none"; // hiding No button
  Next.style.display = "block"; // showing Next button
  Answer.style.display = "block";// Showing Answer element
  Subquestion.style.display = "block"// showing subquestion text
  Answer.value = " " // Telling Answer. value to be = to null



}

function noFunction(){
  Question.innerHTML = "What could we improve on?" //stating where the text should be
  Yes.style.display = "none"; // hiding Yes button
  No.style.display = "none";  // hiding No button
  Next.style.display = "block";// showing Next button
  Answer.style.display = "block";// Showing Answer element
  Subquestion.style.display = "block"// showing subquestion text
  Answer.value = " " // Telling Answer. value to be = to null
  Next.setAttribute("onClick", "javascript: lFunction();"); //directing it to which function to go to next

}

//Question 3

function nFunction(){ //telling the function sFunction what to do 
  let user2 = document.querySelector("#answer").value; // storing the answer as a variable
  Question.innerHTML = "We will be surely look into adding " + user2 //stating where the text should be
  Answer.style.display = "none"; // hiding the Answer element
  Next.style.display = "none"; // hiding the Next button
  Subquestion.style.display = "none"// hiding subquestion text
  setTimeout(lFunction, 2000);// Telling it to go to lFunction in 2 seconds
  Answer.value = " " // Telling Answer. value to be = to null
 
}

function lFunction() {
  Question.innerHTML = "Any other suggestions?" //stating where the text should be
  Yes.style.display = "none"; // hiding Yes function
  No.style.display = "none"; // hiding No function
  Subquestion.style.display = "none"// hiding subquestion text
  Answer.style.display = "block"; // showing Answer element
  Next.style.display = "block" // showing Next button
  Answer.value = " " // Telling Answer. value to be = to null
  Next.setAttribute("onClick", "javascript: fFunction();"); // directing it to which function to go to next


}

function fFunction() {
  let myForm = document.getElementById("myForm") // creates variable called myForm
  myForm.style.display = "none"; //hides the survey the survey
  let Survey = document.getElementById("survey")
  Survey.style.display = "none" // hides survey
  Answer.style.display = "none"; // hiding Answer element
  Next.style.display = "none"; // hding Next element
  Subquestion.style.display = "none"// hiding subquestion text
  let Description =  document.getElementById("surveyInfo") 
  let placeholder = "Thank you for filling out our survey"
  Description.innerHTML = placeholder;
 
}


 