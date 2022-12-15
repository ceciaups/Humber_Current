$(window).on("load", function() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  
  if (page === "home.html") {
    document.getElementById("home-slideshow-left").addEventListener("click", slideLeft);
    document.getElementById("home-slideshow-right").addEventListener("click", slideRight);

    function slideLeft() {
      var slider = document.getElementById("slider");
      if (slider.getBoundingClientRect().left < 406.5)
        slider.style.left = (slider.getBoundingClientRect().left + 487) + "px";
    }
    function slideRight() {
      var slider = document.getElementById("slider");
        if (slider.getBoundingClientRect().left > -1541.5)
          slider.style.left = (slider.getBoundingClientRect().left - 487) + "px";
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


    function pageFade() {
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