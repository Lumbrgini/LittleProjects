const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', function(){ 
    let hexColor = "#";
    for (i = 0; i < 6; i++){
        hexColor += getRandomChar();
        console.log(hexColor);
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomChar(){
    let randomChar = hexColors[Math.floor(Math.random() * hexColors.length)];
    return randomChar;
}
