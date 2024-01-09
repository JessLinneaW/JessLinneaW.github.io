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
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
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


  function resumeScroll(){
      let x=document.getElementById("resume");
      x.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start',
      });
  }

  function portfolioScroll(){
      let x=document.getElementById("portfolio");
      x.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start',
      });
  }

  function contactScroll(){
      let x=document.getElementById("contact");
      x.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start',
      });
  }

  function css(){
    window.location="CSS.html"
  }
  
  function js(){
    window.location="JS.html"
  }

  function resume() {
    window.location = "index.html?scroll=resume";
  }
  
  function portfolio() {
    window.location = "index.html?scroll=portfolio";
  }
  
  function contact() {
    window.location = "index.html?scroll=contact";
  }
  

  window.onload = function() {
    var scroll = getParameterByName("scroll");
    if (scroll === "resume") {
      setTimeout(function() {
        resumeScroll();
      }, 200); 
    } else if (scroll === "portfolio") {
      setTimeout(function() {
        portfolioScroll();
      }, 200); 
    } else if (scroll === "contact") {
      setTimeout(function() {
        contactScroll();
      }, 200); 
    }
  };
  

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }