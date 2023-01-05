let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomButton = document.getElementById("random");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomize() {
	let a = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let c = Math.floor(Math.random() * 256);
	let bgColor1 = "rgb(" + a + "," + b + "," + c + ")";
	let x = Math.floor(Math.random() * 256);
	let y = Math.floor(Math.random() * 256);
	let z = Math.floor(Math.random() * 256);
	let bgColor2 = "rgb(" + x + "," + y + "," + z + ")";
	body.style.background = "linear-gradient(to right, " + bgColor1 + ", " + bgColor2 + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient); 
color2.addEventListener("input", setGradient); 
randomButton.addEventListener("click", randomize);