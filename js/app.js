// Slide show js begins
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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

// Form vaildation
function getUserInformation() {
    var nameIn, emailIn, commentIn, text;
  
    // Get the value of all the imput fields
    nameIn = document.getElementById("name").value;
   
    emailIn = document.getElementById("email").value;
    
    commentIn = document.getElementById("comment").value;
  
   text = "";

    // Validate Users Name
    if (nameIn.length == 0) {
        text = "Invaild Name  ";
    } 

    //  Validate User Email
    var re = /\S+@\S+\.\S+/;   
    if (!re.test(emailIn)) {
      text = text + "incorrect email  ";
  } 

  // Validate Comment
  if (commentIn.length == 0) {
    text = text + "Unsharable Comment";
} 
 if (text.length == 0) {

 
text = "I'm totally Happy with everything you done Thank You";
}
    document.getElementById("validation-message").innerHTML = text;
  }