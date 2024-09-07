//toggler
const navToggler = document.getElementById('navToggler');
const togglerMenu = document.getElementById('togglerMenu');
const togglerReturn = document.getElementById('closeNav');

navToggler.addEventListener('click', function(){
  navToggler.style.display = "none";
  togglerReturn.style.display = "block";
  togglerMenu.style.display = "block";
});

togglerReturn.addEventListener('click', function(){
  togglerReturn.style.display = "none";
  togglerMenu.style.display = "none";
  navToggler.style.display = "block";
});


//portfolio  
function openLayer(evt, currentLayer) {

  var i, displayDiv, portLinks;

  displayDiv = document.getElementsByClassName("displayContent");
  for (i = 0; i < displayDiv.length; i++) {
    displayDiv[i].style.display = "none";
  }

  portLinks = document.getElementsByClassName("port-links");
  for (i = 0; i < portLinks.length; i++) {
    portLinks[i].className = portLinks[i].className.replace(" active-nav", "");
  }

  document.getElementById(currentLayer).style.display = "block";
  evt.currentTarget.className += " active-nav";
}
 

//Carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-deck");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
} 

//scroll to top
const button = document.querySelector('.top');

const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 500) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};

displayButton();
scrollToTop();
