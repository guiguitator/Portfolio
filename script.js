var core = document.getElementById("core");
var aside = document.getElementById("aside");
var search = document.getElementById("search");
var link = document.getElementById("link");
var theme_div = document.getElementById("theme_div");
var theme = document.getElementById("theme");
var card = document.querySelectorAll(".card");
var link = document.querySelectorAll(".link");

var i;
var k;

function changeThemeToDark() {
	core.style.backgroundColor = "#0a0a0a";
	aside.style.backgroundColor = "#161616";
	aside.style.color = "white";
	search.style.backgroundColor = "#2f3030";
	search.style.color = "white";
	theme_div.style.backgroundColor = "#161616";
	theme.setAttribute('onclick',"changeThemeToLight()");
		for (i = 0; i < card.length; i++) {
			card[i].style.backgroundColor = "#1c1c1c";
			card[i].style.color = "white";
		}
		for (k = 0; k < link.length; k++) {
			link[k].style.color = "white";
		}
}

function changeThemeToLight() {
	core.style.backgroundColor = "#f7f7f7";
	aside.style.backgroundColor = "white";
	aside.style.color = "black";
	search.style.backgroundColor = "white";
	search.style.color = "black";
	theme_div.style.backgroundColor = "white";
	theme.setAttribute('onclick',"changeThemeToDark()");
		for (i = 0; i < card.length; i++) {
			card[i].style.backgroundColor = "white";
			card[i].style.color = "black";
		}
		for (k = 0; k < link.length; k++) {
			link[k].style.color = "black";
		}
}

// --- // --- // --- // --- // --- // --- // --- // --- // --- // --- // --- // --- //

const download_MinecraftTextureCreator = document.getElementById("download_MinecraftTextureCreator");

var str = 0;

function displayDownload_MinecraftTextureCreator() {
	if (str == 0) {
		download_MinecraftTextureCreator.style.display = "block";
			str = 1;
	}
	else if (str == 1) {
		download_MinecraftTextureCreator.style.display = "none";
			str = 0;
	}
}