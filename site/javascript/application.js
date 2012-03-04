var slider = new Swipe(document.getElementById('slider'), { 
	callback: function(event, index, elem) {
		alert("hash currently is: " + window.location.hash)
		alert("hash should be: " + elem.getAttribute('data-src'));
		window.location.hash = elem.getAttribute('data-src');
	}
});

function notFound(){
 	document.getElementById("error").innerHTML = "404 Not Found";
}

Path.map("#/projects/:pos/:project_id").to(function(){
	slider.slide(this.params["pos"]);
});

Path.map("#/howdy").to(function(){
	if(slider.getPos()!=0) {slider.slide(0);}
});

Path.root("#/howdy");

Path.rescue(notFound);


Path.listen();

var next = document.getElementById("next");
next.onclick = function() {
	slider.next();
};

var prev = document.getElementById("prev");
prev.onclick = function() {
	slider.prev();
};