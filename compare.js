
 //swap
 const Swap = document.querySelector("#swap") //defining the variable Swap
 var imagelist = [image1,"img2"]; // making a imageList 
 
 var image1 = document.getElementById("image1")

 let time = 0; // defining time
  for (let i=0; i<imagelist.length; i++) {// move number up by one 
 task(i); 
 }
 function task(i) {
   setTimeout(function() {
     let text = "" // defining text
     text+=(imagelist[time]); // telling what text should equal
     Swap.innerHTML = text; // telling where to show the text
     time +=1; // making time go up by one
   }, 2000 * i);// when to change
   }
 
   //extra
   
   

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
const questionList = ["What is your name" , " there are product you want on this website that we are missing", "thank you for your feedback", ""]
const Answer = document.querySelector("answer")

  
function openForm() { // opens the form or shows it
    document.getElementById("myForm").style.display = "block";

}
  function closeForm() { // closes the form or hides it
    document.getElementById("myForm").style.display = "none";
  }

  var number = 0;   // creating a variable called number that is = to 0
  let text =  questionList [number] + "?";  // defining text 
  Question.innerHTML = text; // Telling where the text is displayed
  text ="" // Clearing the Question before moving onto the next one  

function sFunction(){ //telling the function sFunction what to do 
  number += 1 ; // telling number to increase by 1
  var user = document.querySelector("#answer").value; //creating a variable called user
  text += "Hi " + user + " is" + questionList [number] + "?"; // stating what text should be
  Question.innerHTML = text; //stating where the text should be
 text =""// emptying the question field 
 // block submit button

 //function submitFunction(){
 // number += 1
 // var user = document.querySelector("#answer").value;
 // text += "Hi " + user + " is" + questionList [number] + "?"; // stating what text should be
 // Question.innerHTML = text; 


 }

 if (number > 3){number = 4} ;{
}



  


 
  
