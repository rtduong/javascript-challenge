/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/

"use strict";

function onReady() {
	
	for (var i = 0; i < usStates.length; i++) {
        var selectState = document.getElementsByName("state");
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
			selection[0].style.display = "inherit";
		} else {
            selection[0].style.display = "none";
        }
	}
    
    function quitForm() {
        var leavePage = window.confirm("Are you sure? You will be redirected to www.google.com.");
        if (leavePage) {
            window.location.replace("https://www.google.com");
        }
    }
    
    occupation.addEventListener('change', otherOccupation);
    
    var noThanks = document.getElementById("cancelButton");
    noThanks.addEventListener('click', quitForm);
    
    var signUp = document.getElementById('signup');
	signUp.addEventListener('submit', submitForm);
    
    function submitForm(eventAlert) {
        var valid = true;
        try {
            valid = validate;
        } catch (exception) {
            console.log(exception);
            valid = false;
        }
        if (!valid && eventAlert.preventDefault) {
            eventAlert.preventDefault();
        }
        eventAlert.returnValue = valid;
        return valid;
    }
    
    function validate(valid) {
        var requiredFields = ['firstName', 'lastName', 'address1', 'city', 'state', 'zip', 'birthdate'];
        if (document.getElementsByName('occupation').value == 'other') {
            requiredFields.push('occupationOther');   
        }
        for (var i = 0; i < requiredFields.length; i++) {
            var input = document.getElementsByName(requiredFields[i])[0];
            valid = validateWhiteSpace(input);
            if (requiredFields[i] == 'zip') {
                valid = validateZip(input);
            } else if (requiredFields[i] == 'birthdate') {
                valid = validateBirthdate(input);   
            }
        }
        return valid;
    }
    
    function validateWhiteSpace(input) {
        if (input.value.trim.length < 0) {
            input.className = 'form-control invalid-field';
            valid = false;
        }
        return valid;
    }
    
    function validateZip(input) {
        var zipRegExp = new RegExp('^\\d{5}$');
        if (!zipRegExp.text(input.value)) {
            input.className = 'form-control invalid-field';
            valid = false;
        }
        return valid;
    }
    
    function validateBirthdate(input) {
        // Age formula from Stackoverflow user, Andre Snede Hansen
        // http://stackoverflow.com/questions/4060004/calculate-age-in-javascript
        var ageDifference = Date.now() - input.getTime();
        var ageDate = new Date(AgeDiff);
        var age = Math.abs(ageDate.getUTCFullYear() - 1970);
        if (age <= 13) {
            'form-control invalid-field';
            document.getElementById("birthdayMessage").innerHTML = "User must be at least 13 years old."; // Does not work
            valid = false;
        } 
        return valid;
    }
}
document.addEventListener('DOMContentLoaded', onReady);


