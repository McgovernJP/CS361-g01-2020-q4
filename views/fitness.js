 function getFit() {
	var fit = document.getElementById("exercise").value;
	if (fit == 'none') {
	document.getElementById('result').innerHTML = "Your level is: Novice";
	var level = "Novice"
	} else if (fit == 'light') {
	document.getElementById('result').innerHTML = "Your level is: Beginner";
	var level = "Beginner";
	} else if (fit == 'lmod') {
	document.getElementById('result').innerHTML = "Your level is: Intermediate";
	var level = "Intermediate";
	} else if (fit == 'mod') {
	document.getElementById('result').innerHTML = "Your level is: Advanced";
	var level = "Advanced";
	} else if (fit == 'intense') {
	document.getElementById('result').innerHTML = "Your level is: Expert";
	var level = "Expert";
	} sessionStorage.setItem('fitlevel', level);
};

function getName() {
	var name = document.getElementById('name').value;
	sessionStorage.setItem('userName', name);
};

document.getElementById('enter').addEventListener('click', getFit);
document.getElementById('enter').addEventListener('click', getName);
