const myText = document.getElementById("myText");
const subButton = document.getElementById("subButton");
const result = document.getElementById("result");

let i = myText;
subButton.onclick = function(){
    let i = myText.value;
    if (i % 3 === 0 && i % 5 === 0) {
  
        result.textContent = "FizzBuzz";
  
    } else if (i % 3 === 0) {
  
        result.textContent= "Fizz";
  
    } else if (i % 5 === 0) {
  
        result.textContent= "Buzz";
  
    } else {
  
        result.textContent = i;
  
    }
}
event.preventDefault();