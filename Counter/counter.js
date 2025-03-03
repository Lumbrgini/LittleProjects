// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const action = e.currentTarget.classList;
         if(action.contains('dcr')){
            count --;
        } else if(action.contains('icr')){
            count ++;
        } else if(action.contains('reset')){
            count = 0;
        } else if(action.contains('mult')){
            count *= count;
        } else if(action.contains('div')){
            count = Math.sqrt(count);
        }


        if(count > 0){
            value.style.color = "green";
        } else if(count < 0){
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }

      
        value.textContent = count;
    })
})