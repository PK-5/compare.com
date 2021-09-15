
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
   }, 86400000 * i);// when to change
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
  for (i = 0; i < dots.length; i++) { // increases the do.length and highlights the right dot
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; // shows the slide  
  dots[slideIndex-1].className += " active"; // keeps the dots in unison with the slides
}


//Popup survey

  // Defining Question, questionsList and Answer
const Question = document.querySelector("#question");
 
const questionList = ["What is your name ? " , "  hi, is there are product we are missing? ", "  , we will be sure to look into adding that "]
const Answer = document.querySelector("#answer")
const Yes = document.querySelector("#yes")
const No = document.querySelector("#no")
const Next = document.querySelector("#next")

  
function openForm() { // opens the form or shows it
    document.getElementById("myForm").style.display = "block";
    Yes.style.display = "none";
    No.style.display = "none";
    document.getElementById('answerr').style.display="none"
    

}
  function closeForm() { // closes the form or hides its
    document.getElementById("myForm").style.display = "none";
    document.getElementById("survey").style.display = "none";
  }

  var number = 0;   // creating a variable called number that is = to 0
  var Button = document.getElementById("next")
  let text =  questionList [number] ;  // defining text 
  Question.innerHTML = text; // Telling where the text is displayed
  text ="" // Clearing the Question before moving onto the next one  



function sFunction(){ //telling the function sFunction what to do 

  number += 1 ; // telling number to increase by 1
  var user = document.querySelector("#answer").value; //creating a variable called user
  text += user  +  questionList [number] ; // stating what text should be
  Question.innerHTML = text; //stating where the text should be
 text =""// emptying the question field 
 let end = "Thank you for your feedback"
 var Vanish = document.querySelector("#answer");
 Vanish.value = '' ;

if (number = 1) {
  Answer.style.display = "none";
  Next.style.display = "none";
  Yes.style.display="block";
  No.style.display="block";

} else { 
  Answer.style.display = "block";
  Next.style.display = "block";
  Yes.style.display="none";
  No.style.display="none";

}

 if (number > 2){ 
   Question.innerHTML = end; 
   Button.style.display = "none";
} else { Question.innerhtml = text ;
  }


}


function yesFunction(){
  const More = document.querySelector("#more");
  const Answerr = document.getElementById('answerr');
  Question.style.display = "none";
  Answerr.style.display = "block";
  let ttext = "What are we missing?";
  More.innerHTML = ttext;
  Yes.style.display = "none";
  No.style.display = "none";
  Next.style.display = "block";

  

}

function noFunction(){
  const More = document.querySelector("#more");
  const Answerr = document.getElementById('answerr');
  Question.style.display = "none";
  Answerr.style.display = "block";
  let ttext = "What else could we improve on?";
  More.innerHTML = ttext;
  Yes.style.display = "none";
  No.style.display = "none";
  Next.style.display = "block";

}
