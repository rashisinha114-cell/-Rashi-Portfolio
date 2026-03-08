// TYPING ANIMATION

const words = [
"Full Stack Developer",
"Web Developer",
"Python Backend Developer"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

currentWord = words[i];

if(isDeleting){

document.getElementById("typing").textContent =
currentWord.substring(0,j--);

if(j < 0){

isDeleting = false;
i++;

if(i == words.length){
i = 0;
}

}

}

else{

document.getElementById("typing").textContent =
currentWord.substring(0,j++);

if(j > currentWord.length){

isDeleting = true;

}

}

setTimeout(type,120);

}

type();


// SMOOTH SCROLL

document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});