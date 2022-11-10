import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Player from "../src/js/players.js";
import Monster from "../src/js/monster";

// let newPlayer = new Player(100, 0, 0);
let newMonster = new Monster(200);

function handleWarrior(event) {
	event.preventDefault();

	document.getElementById("hp-stat").innerHTML = 100;
	document.getElementById("strength-stat").innerHTML = 90;
	document.getElementById("magic-stat").innerHTML = 40;
	document.getElementById("monster-hp").innerHTML = newMonster.hp;

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
	document.getElementById("monster-hp").innerHTML = newMonster.hp;

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
	document.getElementById("monster-hp").innerHTML = newMonster.hp;

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
	document.getElementById("monster-hp").innerHTML = newMonster.hp;

	document.getElementById("warrior-card").classList.add("invisible");
	document.getElementById("druid-card").classList.add("invisible");
	document.getElementById("mage-card").classList.add("invisible");
	document.getElementById("hunter-card").classList.add("invisible");
	document.getElementById("stats").classList.remove("invisible");
}
function handleAttack(event) {
	event.preventDefault();
	newMonster.attack();
	document.getElementById("monster-hp").innerHTML = newMonster.hp;
}

window.addEventListener("load", function () {
	document.getElementById("warrior").addEventListener("submit", handleWarrior);
	document.getElementById("druid").addEventListener("submit", handleDruid);
	document.getElementById("mage").addEventListener("submit", handleMage);
	document.getElementById("hunter").addEventListener("submit", handleHunter);
	document.getElementById("btn-attack").addEventListener("submit", handleAttack);
	

});

