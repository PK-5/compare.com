
//swap the product

//defining variables
var imagelist = ["img1", "img 2", "img3"];
let number = 0;

//making a loop

for (let i = 0; i < imagelist.length; i++) {
  task(i);  
}

function task(i) {
    setTimeout(function() {
        console.log(imagelist[number]);
        number +=1;
    }, 2000 * i);
}


//Common products slideshow


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//Popup survey


const Question = document.querySelector("#question");
const questionList = ["What is your name" , " there are product you want on this website that we are missing"]



function openForm() {
    document.getElementById("myForm").style.display = "block";

}

  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  var number = 0; 

let text =  questionList [number] + "?";
Question.innerHTML = text;

text =""



function sFunction(){
  number += 1 ;
  var user = document.querySelector("#answer").value;
  text += "Hi " + user + " is" + questionList [number] + "?";
  Question.innerHTML = text;



}

  


 
  
