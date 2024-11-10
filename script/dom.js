const numberSlot = document.getElementsByClassName("number")[0];
const buttonElement = document.getElementById("button");

document.addEventListener("DOMContentLoaded",function() {
    let count = 0;
    numberSlot.innerHTML = count;
    buttonElement.addEventListener("click",function() {
        count++;
        numberSlot.innerHTML = count;

        if (count % 2 == 0) {
            numberSlot.style.color= "blue"
        }
        else {
            numberSlot.style.color = "black"
        }
           
    }); 
})