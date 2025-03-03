const fB = document.querySelector(".frontBtn");
const bB = document.querySelector(".backBtn");

const circle1 = document.querySelector(".dot1");
const circle2 = document.querySelector(".dot2");
const circle3 = document.querySelector(".dot3");
const circle4 = document.querySelector(".dot4");

let progress = [circle1, circle2, circle3, circle4];
let counter = -1;

fB.addEventListener("click", function nextStep(){
    counter ++;
    if(counter >= progress.length){
        counter = progress.length-1;
    }
    progress[counter].style.contentVisibility = "visible";
    progress[counter].style.backgroundColor = "green";
    console.log(counter);
});

bB.addEventListener("click", function prevStep(){
    counter --;
    if(counter < -1){
        counter = -1;
    }
    progress[counter + 1].style = "background-color: gray";
    console.log(counter);
});





