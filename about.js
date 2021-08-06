console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted successfully.');
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let rubberDuck = document.querySelector("#rubberDuck")

rubberDuck.addEventListener('mouseover', complimentUser)

function complimentUser() {
	let compliments = document.querySelectorAll(".compliments");
	let child = compliments[Math.floor(Math.random() * compliments.length)]

	alert(`${child.textContent}!`)
}