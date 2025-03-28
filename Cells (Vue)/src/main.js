import { ref, watchEffect } from "vue";
import './style.css';

const size = 60;

const colors = ref([
    {r: 255, g: 0, b: 0},
    {r: 0, g: 255, b: 0},
    {r: 0, g: 0, b: 255}
]);

watchEffect(() => {
    const container = document.querySelector("#cellsContainer");
    container.innerHTML = "";

    colors.value.forEach(c => {
        const node = document.createElement('div');
        node.classList.add('cell');
        node.style.backgroundColor =`rgb(${c.r}, ${c.g}, ${c.b})`;
        node.style.borderColor = `rgb(${c.r * 0.8}, ${c.g * 0.8}, ${c.b * 0.8})`
        container.appendChild(node);
    });
});

document.querySelector('#addBtn').addEventListener("click", () => {
    colors.value.push({
      r: Math.random() * 255,
      g: Math.random() * 255,
      b: Math.random() * 255
    });
});

document.querySelector('#resetBtn').addEventListener("click", () => {
  colors.value = [];
});

document.querySelector('#shuffleBtn').addEventListener("click", () => {
  let currentIndex = colors.value.length;
  while(currentIndex != 0){
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [colors.value[currentIndex], colors.value[randomIndex]] = 
    [colors.value[randomIndex], colors.value[currentIndex]];
  }
});


