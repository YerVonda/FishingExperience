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
  
    // Get the value of the input field with id="numb"
    nameIn = document.getElementById("name").value;
    // emailIn = document.getElementById("email").value;
    emailIn = document.getElementById("email").value;
    // commentIn = document.getElementById("comment").value;
    commentIn = document.getElementById("comment").value;
  
    // Validate Users Name
    if (nameIn.length == 0) {
        text = "Invaild Name";
    } else {
        text = "Thank You!";
    }

    //  Valide User Email
    if (emailIn.length == 0) {
      text = "incorrect email";
  } else {
      text = "Someone Will Contact You Soon!";
  }

  // Validate Comment
  if (commentIn.length == 0) {
    text = "Unsharable Comment";
} else {
    text = "Thank You For your Opinion!";
}

    document.getElementById("demo").innerHTML = text;
  }