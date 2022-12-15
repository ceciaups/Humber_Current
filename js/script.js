$(window).on("load", function() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  
  if (page === "home.html") {
    var left = document.getElementById("home-slideshow-left");
    var right = document.getElementById("home-slideshow-right");
    var slider = document.getElementById("slider");
    const sliderInit = slider.getBoundingClientRect().left;
    const sliderSize = 331 + 55;

    left.addEventListener("click", slideLeft);
    right.addEventListener("click", slideRight);

    function slideLeft() {
      // console.log(slider.getBoundingClientRect().left);
      if (slider.getBoundingClientRect().left < (sliderInit + 2 * sliderSize)) {
        left.style.pointerEvents = "none";
        right.style.pointerEvents = "none";
        slider.style.left = (slider.getBoundingClientRect().left + sliderSize) + "px";
        for (var i = 1; i < slider.childNodes.length; i += 2) {
          slider.childNodes[i].style.height = "175px";
          slider.childNodes[i].style.width = "331px";
          slider.childNodes[i].style.opacity = "50%";
        }
        changeSlideStyle(-2);
      }
      slider.addEventListener('transitionend', function() {
        left.style.pointerEvents = "initial";
        right.style.pointerEvents = "initial";
      }, { once: true });
    }
    function slideRight() {
      // console.log(slider.getBoundingClientRect().left);
        if (slider.getBoundingClientRect().left > (sliderInit - 2 * sliderSize)) {
          left.style.pointerEvents = "none";
          right.style.pointerEvents = "none";
          slider.style.left = (slider.getBoundingClientRect().left - sliderSize) + "px";
          for (var i = 1; i < slider.childNodes.length; i += 2) {
            slider.childNodes[i].style.height = "175px";
            slider.childNodes[i].style.width = "331px";
            slider.childNodes[i].style.opacity = "50%";
          }
          changeSlideStyle(2);
        }
        slider.addEventListener('transitionend', function() {
          left.style.pointerEvents = "initial";
          right.style.pointerEvents = "initial";
        }, { once: true });
    }
    function changeSlideStyle(dir) {
      var slideID = ((sliderInit - slider.getBoundingClientRect().left) / sliderSize + 3) * 2 - 1 + dir;
      slider.childNodes[slideID].style.height = "229px";
      slider.childNodes[slideID].style.width = "432px";
      slider.childNodes[slideID].style.opacity = "100%";
    }
  }

  if (page === "media-foundation.html") {
    $('#title-media').textfill({
      maxFontPixels: 500
    });
    $('#title-foundation').textfill({
      maxFontPixels: 200
    });

    let portfolioContainer = document.getElementById("portfolio-container");
    var names = ["Asuman Mine Takkaci", "Grace Stenvers", "Justin Sterling", "Raghad Mansour", "Tate Smirle", "Linda Parkinson", "Jana Bakr", "Julia Roberts", "Harry Stanley", "Anurag Daimary", "Joseph Stallin"];

    for (let i=1; i < 12; i++) {
      let portfolio = document.createElement("div");
      let image = document.createElement("div");
      let style = document.createElement("style");
      let student = document.createElement("div");
      let icon = document.createElement("img");
      let name = document.createElement("div");

      image.style.background = 'linear-gradient(#00000000, #00000059, #0000009B), url("../images/portfolio' + i + '.png")';
      image.style.backgroundSize = 'cover';
      image.classList.add("portfolio-image");
      image.classList.add("portfolio-image" + i);
      style.innerHTML = '.portfolio-image' + i + '::before { background: url("../images/portfolio' + i + '.png"); background-size: cover; }';

      student.classList.add("portfolio-student");
      icon.classList.add("portfolio-icon");
      icon.src = "../images/user" + i + ".png";
      name.classList.add("portfolio-name");
      name.innerHTML = names[i];

      image.appendChild(style);
      portfolio.appendChild(image);
      student.appendChild(icon);
      student.appendChild(name);
      portfolio.appendChild(student);
      portfolioContainer.appendChild(portfolio);
    }

    document.getElementById("active-tag-portfolio").addEventListener("click", pageFade);
    document.getElementById("active-tag-program").addEventListener("click", pageFade);
    document.getElementById("media-button").addEventListener("click", pageFade);

    function pageFade() {
      window.scrollTo(0, 0);
      var program = document.getElementById("program");
      var portfolio = document.getElementById("portfolio");

      if (program.classList.contains("fade-in")) {
        pageFadeOut(program);
        pageFadeIn(portfolio);
        program.addEventListener('transitionend', function() {
          program.classList.add('hidden');
        }, { once: true });
      }
      else {
        pageFadeOut(portfolio);
        pageFadeIn(program);
        portfolio.addEventListener('transitionend', function() {
          portfolio.classList.add('hidden');
        }, { once: true });
      }
    }
    
    function pageFadeOut(section) {
      section.classList.remove("fade-in");
      section.classList.add("fade-out");
    }

    function pageFadeIn(section) {
      section.classList.add("fade-in");
      section.classList.remove("fade-out");
      section.classList.remove("hidden");
      }
    }
});