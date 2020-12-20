var core = document.getElementById("core");
var aside = document.getElementById("aside");
var card = document.getElementById("card");
var search = document.getElementById("search");
var link = document.getElementById("link");
var theme_div = document.getElementById("theme_div");
var theme = document.getElementById("theme");

function changeThemeToDark() {
	core.style.backgroundColor = "#0a0a0a";
	aside.style.backgroundColor = "#161616";
	aside.style.color = "white";
	card.style.backgroundColor = "#1c1c1c";
	card.style.color = "white";
	search.style.backgroundColor = "#2f3030";
	search.style.color = "white";
	link.style.color = "white";
	theme_div.style.backgroundColor = "#161616";
	theme.setAttribute('onclick',"changeThemeToLight()");
}

function changeThemeToLight() {
	core.style.backgroundColor = "#f7f7f7";
	aside.style.backgroundColor = "white";
	aside.style.color = "black";
	card.style.backgroundColor = "white";
	card.style.color = "color";
	search.style.backgroundColor = "white";
	search.style.color = "black";
	link.style.color = "black";
	theme_div.style.backgroundColor = "white";
	theme.setAttribute('onclick',"changeThemeToDark()");
}