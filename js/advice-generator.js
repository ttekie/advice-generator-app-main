"use strict";
const span = document.querySelector(".advice-id");  
const q = document.querySelector(".advice-text");
const btn = document.querySelector(".dice-btn");

// the end point is assigned to a variable
const url = 'https://api.adviceslip.com/advice';

// event listener function
async function displayAdvice() {
   const response = await fetch(url); // send the http request 
   const data = await response.json(); // get the response and change it to a usable js object 
   console.log(data);
   span.innerHTML = data.slip.id;
   q.innerHTML = data.slip.advice;
}
// btn will be the element that fires the event and we added the 
// listener function that listens to the event fired by the target element
btn.addEventListener('click', displayAdvice);

function onPageLoad() { 
   displayAdvice();
}
onPageLoad();