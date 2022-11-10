import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handleWarrior(event) {
	event.preventDefault();

	document.getElementById("hp-stat").innerHTML = 100;
	document.getElementById("strength-stat").innerHTML = 90;
	document.getElementById("magic-stat").innerHTML = 40;

	document.getElementById("warrior-card").classList.add("invisible");
	document.getElementById("druid-card").classList.add("invisible");
	document.getElementById("mage-card").classList.add("invisible");
	document.getElementById("hunter-card").classList.add("invisible");
	document.getElementById("stats").classList.remove("invisible");
}

function handleDruid(event) {
	event.preventDefault();

	document.getElementById("hp-stat").innerHTML = 100;
	document.getElementById("strength-stat").innerHTML = 80;
	document.getElementById("magic-stat").innerHTML = 80;

	document.getElementById("warrior-card").classList.add("invisible");
	document.getElementById("druid-card").classList.add("invisible");
	document.getElementById("mage-card").classList.add("invisible");
	document.getElementById("hunter-card").classList.add("invisible");
	document.getElementById("stats").classList.remove("invisible");
}

function handleMage(event) {
	event.preventDefault();

	document.getElementById("hp-stat").innerHTML = 100;
	document.getElementById("strength-stat").innerHTML = 40;
	document.getElementById("magic-stat").innerHTML = 90;

	document.getElementById("warrior-card").classList.add("invisible");
	document.getElementById("druid-card").classList.add("invisible");
	document.getElementById("mage-card").classList.add("invisible");
	document.getElementById("hunter-card").classList.add("invisible");
	document.getElementById("stats").classList.remove("invisible");
}

function handleHunter(event) {
	event.preventDefault();

	document.getElementById("hp-stat").innerHTML = 100;
	document.getElementById("strength-stat").innerHTML = 70;
	document.getElementById("magic-stat").innerHTML = 70;

	document.getElementById("warrior-card").classList.add("invisible");
	document.getElementById("druid-card").classList.add("invisible");
	document.getElementById("mage-card").classList.add("invisible");
	document.getElementById("hunter-card").classList.add("invisible");
	document.getElementById("stats").classList.remove("invisible");
}
window.addEventListener("load", function () {
	document.getElementById("warrior").addEventListener("submit", handleWarrior);
	document.getElementById("druid").addEventListener("submit", handleDruid);
	document.getElementById("mage").addEventListener("submit", handleMage);
	document.getElementById("hunter").addEventListener("submit", handleHunter);
});