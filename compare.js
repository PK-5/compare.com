
  // Defining Question, questionsList and Answer
  const Question = document.querySelector("#question");
  const questionList = ["What is your name ? " , "  hi, is there are product we are missing? ", "  , we will be sure to look into adding that "]
  const Answer = document.querySelector("#answer")
  const Yes = document.querySelector("#yes")
  const No = document.querySelector("#no")
  const Next = document.querySelector("#next")
  
  //swap

const Change= document.querySelector("#change"); //defining the variable Swap
let time = 0; // defining time   
let imagelist = ["alt1.jpg","alt2.jpg"]
for (let i=0; i<imagelist.length; i++) {// move number up by one 
 task(i); 
 }
 function task(i) {
   setTimeout(function() {
     Change.src = (imagelist[time]);// telling where to show the text
     time +=1; // making time go up by one
   }, 2000 * i);// when to change CHANGE BACK TO 24 HOURS AFTER TESTS
   }
 
  //Common products slideshow
  
var slideIndex = 1; //defining the varaible slide index
showSlides(slideIndex);
  
function plusSlides(n) { // writing out the function plusSlides
  showSlides(slideIndex += n);
}

function currentSlide(n) { // writing out the function currentSlide
  showSlides(slideIndex = n);
}

function showSlides(n) { //writing out the function showSlides
  var i; // creating a variable called i
  var slides = document.getElementsByClassName("mySlides"); // creating a variable called slides
  var dots = document.getElementsByClassName("dot"); // creating a variable called dots
  if (n > slides.length) {slideIndex = 1} // if n is greater than the number of slides go back to 1    
  if (n < 1) {slideIndex = slides.length} // if slide index is less than 1 the slideIndex is equal to the slide length
  for (i = 0; i < slides.length; i++) { // increase the slide.length by 1
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block"; // shows the slide  
  dots[slideIndex-1].className += " active"; // keeps the dots in unison with the slides
}


//Popup survey

 
 
  
    
  function openForm() { // opens the form or shows it
      document.getElementById("myForm").style.display = "block";
      Yes.style.display = "none";
      No.style.display = "none";
      Question.innerHTML = "What is your name ? " //stating where the text should be
      

      
  
  }
    function closeForm() { // closes the form or hides its
      document.getElementById("myForm").style.display = "none";
      document.getElementById("survey").style.display = "none";
    }
  

  
  //Question 2
  
 //Question 2
  
 function sFunction(){ //telling the function sFunction what to do 
  var user = document.querySelector("#answer").value; //creating a variable called user
  Question.innerHTML = "Hi " + user + ", is there are product we are missing?" //stating where the text should be
  Yes.style.display = "block";
  No.style.display = "block";
  Answer.style.display = "none";
  Next.style.display = "none";
  Next.setAttribute("onClick", "javascript: nFunction();");
  Answer.value = " "
 
}

function yesFunction(){
  Question.innerHTML = "What we are missing?" //stating where the text should be
  Yes.style.display = "none";
  No.style.display = "none";
  Next.style.display = "block";
  Answer.style.display = "block";




}

function noFunction(){
  Question.innerHTML = "What could we improve on?" //stating where the text should be
  Yes.style.display = "none";
  No.style.display = "none";
  Next.style.display = "block";
  Answer.style.display = "block";
  setTimeout(fFunction, 2000);

}

//Question 3

function nFunction(){ //telling the function sFunction what to do 
  let user2 = document.querySelector("#answer").value;
  Question.innerHTML = "We will be surely look into adding " + user2 //stating where the text should be
  Answer.style.display = "none";
  Next.style.display = "none"; 
  setTimeout(lFunction, 2000);
  Answer.value = " "
 
}

function lFunction() {
  Question.innerHTML = "Any other suggestions?" //stating where the text should be
  Yes.style.display = "none";
  No.style.display = "none";
  Answer.style.display = "block";
  Next.style.display = "block"
  Next.setAttribute("onClick", "javascript: fFunction();");


}

function fFunction() {
  Question.innerHTML = "Thank you for your feedback"
  Answer.style.display = "none";
  Next.style.display = "none"; 
}


 