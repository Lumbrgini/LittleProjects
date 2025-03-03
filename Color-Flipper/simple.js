const colors = ["green", "blue", "pink", "brown", "black","red", "purple", "yellow"];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    let randomColor = Math.floor(Math.random() * colors.length);
    return randomColor;
}