let NavButtons= document.querySelectorAll(".list-item");
let usedButtons= document.querySelectorAll(".usable-item");
let uniqueButtons= document.querySelectorAll(".unique-item");
let navbox= document.getElementById("navlist");

function setActive(className) {
    let buttons = document.querySelectorAll("." + className);
    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    let storedColor = window.localStorage.getItem("color");
    if (storedColor) {
        let activeElement = document.querySelector(`.${className}[data-color="${storedColor}"]`);
        if (activeElement) {
            activeElement.classList.add("active");
        }
    }
}

setActive("usedButtons");

usedButtons.forEach((button) => {
    button.addEventListener("mouseover", (e) => {

        usedButtons.forEach((c) => {
            c.classList.remove("active");
        });
        NavButtons.forEach((c)=>{
            c.style.color="white";
        });
        button.style.opacity="1";
        button.classList.add("active");
        let color = e.target.dataset.color; 
        navbox.classList.remove("navfadeout")
        navbox.classList.add("navfadein");
        window.localStorage.setItem("color", color);
        navbox.style.backgroundColor= color;
        
    });
});

usedButtons.forEach((button) => {
    button.addEventListener("mouseout", (e) => {

        usedButtons.forEach((c) => {
            c.classList.remove("active");
            c.style.opacity="0.5";

        });
        NavButtons.forEach((c)=>{
            c.style.color="black";
        });
        uniqueButtons.forEach((c)=>{
            c.style.opacity="1";
        });
        navbox.style.backgroundColor= "#e9e9f7";
        navbox.classList.remove("navfadein")
        navbox.classList.add("navfadeout");

    });
});

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    navbox.style.top = "0";
  } else {
    navbox.style.top = "-77px";
  }
  prevScrollpos = currentScrollPos;
}

// logo code

let icon = document.getElementsByClassName("icon")[0];

icon.addEventListener("mouseover", (e) => {
    icon.classList.add("fa-beat");
});
icon.addEventListener("mouseout", (e) => {
    icon.classList.remove("fa-beat");
});


//Buttons code

let colourfulButtons=document.querySelectorAll(".colourfulButtons");

setActive("colourfulButtons");

colourfulButtons.forEach((button) => {
    button.addEventListener("mouseover", (e) => {
        colourfulButtons.forEach((c) => {
            c.classList.remove("active");
            c.style.opacity = "0.4";
        });

        button.style.opacity = "1";
        button.classList.add("active");
        let color = e.target.dataset.color;
        window.localStorage.setItem("color", color);
        button.style.color = color;
        button.style.borderColor = color;

    });
    button.addEventListener("mouseout", (e) => {
        button.style.color="black";
        button.style.borderColor="lightgray";
        button.style.opacity="0.4";
        button.classList.remove("active");
    });


});
