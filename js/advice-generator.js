"strict";
const span = document.querySelector(".advice-id");  
const q = document.querySelector(".advice-text");
const btn = document.querySelector(".dice-btn");

// the end point is assigned to a variable
const url = 'https://api.adviceslip.com/advice';

async function displayAdvice() {
   const response = await fetch(url);
   const data = await response.json();
   span.innerHTML = data.slip.id;
   q.innerHTML = data.slip.advice;   
}

btn.addEventListener('click', displayAdvice);

function onPageLoad() {
   displayAdvice();
}
onPageLoad();