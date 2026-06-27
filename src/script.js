"use strict";

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.classList.remove("success");
	formControl.classList.add("error");

	const small = formControl.querySelector("small");
	small.textContent = message;
}

// Show success outline
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.classList.remove("error");
	formControl.classList.add("success");
}

// Check email is valid
function checkEmail(input) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (re.test(input.value)) {
		showSuccess(input);
	} else {
		showError(input, "Email is not valid");
	}
}

// Check required fields
function checkRequired(inputArr) {
	inputArr.forEach((input) => {
		if (!input.value.trim()) {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

// Check field length
function checkLength(input, min, max) {
	if (input.value.trim().length < min) {
		showError(
			input,
			`${getFieldName(input)} must be at least ${min} characters`,
		);
	} else if (input.value.trim().length > max) {
		showError(
			input,
			`${getFieldName(input)} must be less then ${max} characters`,
		);
	} else {
		showSuccess(input);
	}
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, "Passwords do not match");
	}
}

// Get fieldname
function getFieldName(input) {
	const inputWithoutHyphen = removeHyphen(input.id);

	return inputWithoutHyphen[0].toUpperCase() + inputWithoutHyphen.slice(1);
}

// Remove hyphen
function removeHyphen(str) {
	return str.split("-").join(" ");
}

// Event listeners
form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkRequired([username, email, password, confirmPassword]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkPasswordsMatch(password, confirmPassword);
});
