// Nav
let menus = document.querySelectorAll("nav ul li");
window.onscroll = function(){scrollEffect()};
function scrollEffect(){
    // Nav Scroll Effect
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.querySelector("nav").style.padding = "0";
        document.querySelector("nav").style.backgroundColor = "black";
    }else{
        document.querySelector("nav").style.padding = "25px 0";
        document.querySelector("nav").style.backgroundColor = "transparent";
    }


    // Nav Active Class
    let about = document.getElementById("About"),
        features = document.getElementById("Features"),
        portfolio = document.getElementById("Portfolio"),
        contact = document.getElementById("Contact"),
        aboutLi = menus[1],
        featuresLi = menus[2],
        portfolioLi = menus[3],
        contactLi = menus[4];
    if(window.scrollY < about.offsetTop - 100){
        menus.forEach(e => e.classList.remove("active"));
        menus[0].classList.add("active");
    }
    if(window.scrollY >= about.offsetTop - 100){
        menus.forEach(e => e.classList.remove("active"));
        aboutLi.classList.add("active");
    }
    if(window.scrollY >= features.offsetTop - 300){
        menus.forEach(e => e.classList.remove("active"));
        featuresLi.classList.add("active");
    }
    if(window.scrollY >= portfolio.offsetTop - 300){
        menus.forEach(e => e.classList.remove("active"));
        portfolioLi.classList.add("active");
    }
    if(window.scrollY >= contact.offsetTop - 200){
        menus.forEach(e => e.classList.remove("active"));
        contactLi.classList.add("active");
    }
}

// Slider
// Select Elements
let landing = document.querySelector(".landing"),
  leftArrow = document.querySelector(".left-arrow"),
  rightArrow = document.querySelector(".right-arrow"),
  bullets = document.querySelectorAll(".bullets li");

// Slider Logic Variables
let imagesCount = 4,
  currentImage = 0;

// Changing Function
function changing(){
    if(currentImage < imagesCount){
        currentImage++;
    }else{
        currentImage = 1;
    }
    bullets.forEach(e => e.classList.remove("active"));
    bullets[currentImage - 1].classList.add("active");
    landing.style.backgroundImage = `url(images/slide-${currentImage}.jpg)`;
}

// Auto Changing
let autoChanging = setInterval(changing ,10000);

// Buttons Changing
leftArrow.addEventListener("click", function(){
    if(currentImage > 1){
        currentImage--;
        bullets.forEach(e => e.classList.remove("active"));
        bullets[currentImage - 1].classList.add("active");
        landing.style.backgroundImage = `url(images/slide-${currentImage}.jpg)`;
        clearInterval(autoChanging);
        autoChanging = setInterval(changing ,10000);
    }
});
rightArrow.addEventListener("click", function(){
    if(!(currentImage >= 4)){
        currentImage++;
        bullets.forEach(e => e.classList.remove("active"));
        bullets[currentImage - 1].classList.add("active");
        landing.style.backgroundImage = `url(images/slide-${currentImage}.jpg)`;
        clearInterval(autoChanging);
        autoChanging = setInterval(changing ,10000);
    }
});

// Bullets Changing
bullets.forEach((element, num) => {
    element.addEventListener('click', function(){
        landing.style.backgroundImage = `url(images/slide-${num + 1}.jpg)`;
        currentImage = num + 1;
        clearInterval(autoChanging);
        autoChanging = setInterval(changing ,10000);
        bullets.forEach(e => e.classList.remove("active"));
        bullets[num].classList.add("active");
    })
})

// Pop-menu
let bars = document.querySelector(".bars")
  popMenu = document.querySelector(".pop-menu")
  exit = document.querySelector(".pop-menu .exit")
  navbar = document.querySelector("nav");
bars.addEventListener("click", function(){
    popMenu.classList.add("active-menu");
    document.querySelector("nav").style.display = "none";
});
exit.addEventListener("click", function(){
    popMenu.classList.remove("active-menu");
    document.querySelector("nav").style.display = "block";
});

// Accordion
let accordion = document.querySelectorAll(".features .container .accordion-container .accordion");

accordion.forEach(accordionItem => {
    accordionItem.addEventListener("click", function(){
        let accordionPanel = this.nextElementSibling;
        accordionItem.classList.toggle("active");
        if(accordionPanel.style.maxHeight){
            accordionPanel.style.maxHeight = null;
        }else {
            accordion.forEach(accordionItem => {
                accordionItem.nextElementSibling.style.maxHeight = null;
            });
            accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
        }
    });
});

// Shuffle
let shuffleBtnJS = document.querySelectorAll(".portfolio .container button")[0],
    shuffleBtnTemp = document.querySelectorAll(".portfolio .container button")[1],
    shuffles = document.querySelectorAll(".shuffle");

shuffleBtnJS.addEventListener("click", () => {
    shuffleBtnJS.classList.add("active");
    shuffleBtnTemp.classList.remove("active");
    shuffles[0].classList.add("active-shuffle");
    shuffles[1].classList.remove("active-shuffle");
});
shuffleBtnTemp.addEventListener("click", () => {
    shuffleBtnJS.classList.remove("active");
    shuffleBtnTemp.classList.add("active");
    shuffles[0].classList.remove("active-shuffle");
    shuffles[1].classList.add("active-shuffle");
});
// Pop-Up Shuffle
let shuffleImages = document.querySelectorAll(".shuffle img");
shuffleImages.forEach(image => {
    image.addEventListener("click", () => {
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = image.getAttribute("src");
    });
});

document.querySelector(".popup-image span").addEventListener("click", () => {
    document.querySelector(".popup-image").style.display = "none";
});
