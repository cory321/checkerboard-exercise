// Your JS goes here

var body, box, content, numBoxes;

window.onload = function() {
	generateGrid();
};

var generateGrid = function() {

	//Generate the Grid

	body = document.getElementsByTagName("body")[0];
	content = "<div class=\"box\"></div>";
	numBoxes = 81; // 9x9 Grid

	for(var i = 0; i < numBoxes; i++) {
		body.innerHTML = body.innerHTML + content;
	}

	box = document.querySelectorAll(".box");

	//Set Styles

	body.style.width = "900px";
	body.style.margin = "0";

	for (var i = 0; i < numBoxes; i++) {
		box[i].style.width = "100px";
		box[i].style.height = "100px";
		box[i].style.backgroundColor = "black";
		box[i].style.float = "left";
	};

	for (var i = 0; i < numBoxes; i++) {
		if (i % 2 == 0) {
			box[i].style.backgroundColor = "red";
		};
	};
};

