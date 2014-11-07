
"use strict";

function onReady() {
	var selectState = document.getElementsByName("state");
	for (var i = 0; i < usStates.length; i++) {
		var state = document.createElement("option");
		state.text = usStates[i].name;
		state.abbrev = usStates[i].code;
		selectState[0].appendChild(state);
	}
    
	function otherOccupation() { 
        var occupation = document.getElementById("occupation");
        var selection = document.getElementsByName("occupationOther");
		var input = document.getElementById("occupation").value;
		if(input == "other") {
			selection[0].style.display = "inline";
		} else {
			selection[0].style.display = "none";
		}
	}
	occupation.addEventListener('change', otherOccupation);
}

document.addEventListener('DOMContentLoaded', onReady);


