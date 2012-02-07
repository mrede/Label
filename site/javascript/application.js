var slider = new Swipe(document.getElementById('slider'));

//pathjs
function notFound(){
 	document.getElementById("#content").innerHTML = "404 Not Found";
}

Path.map("#/projects/:pos/:project_id").to(function(){
	///
	if(slider.getPos()!=this.params["pos"]) {
		slider.slide(this.params["pos"]);
	}
});

Path.map("#/howdy").to(function(){
	///
	if(slider.getPos()!=0) {slider.slide(0);}
});

Path.root("#/howdy");

Path.rescue(notFound);

addEvent(window,'load',function(){
	
	Path.listen();

	next = getElementsByClassName("next", "a", document.getElementById("slider"));
	prev = getElementsByClassName("prev", "a", document.getElementById("slider"));

	for (var i=0, il=next.length; i<il; i++) {
		next[i].onclick = function() {
			slider.next();
		}
	}

	for (var i=0, il=prev.length; i<il; i++) {
		prev[i].onclick = function() {
			slider.prev();
		}
	}
	
});