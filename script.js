const db = {
	Mon : "Monday's child is fair of face",
	Tue : "Tuesday's child is full of grace",
	Wed : "Wednesday's child is full of woe",
	Thu : "Thursday's child has far to go.",
	Fri : "Friday's child is loving and giving",
	Sat : "Saturday's child works hard for a living",
	Sun : "But the child born on the Sabbath Day, Is fair and wise and good in every way."
};

let day = "";
let quote = "";

switch (new Date().getDay()) {
	case 1:
		day = "Monday";
		quote = db["Mon"]; 
		break;
	case 2:
		day = "Tuesday";
		quote = db["Tue"]; 
		break;
	case 3:
		day = "Wednesday";
		quote = db["Wed"]; 
		break;	
	case 4:
		day = "Thursday";
		qoute = db["Thu"]; 
		break;
	case 5:
		day = "Friday";
		quote = db["Fri"];  
		break;
	case 6:
		day = "Saturday";
		quote = db["Sat"]; 
		break;
	case 7:
		day = "Sunday";
		quote = db["Sun"]; 
		break;
}

let header = document.querySelector('.title');
let paragraph = document.querySelector('.quote');
header.innerText = day;
paragraph.innerText = quote;