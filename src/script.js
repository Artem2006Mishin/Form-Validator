"use strict";

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.classList.add("error");

	const small = formControl.querySelector("small");
	small.textContent = message;
}

// Show success outline
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.classList.add("success");
}

// Check email is valid
function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Event listeners
form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (username.value === "") {
		showError(username, "Username is required");
	} else {
		showSuccess(username);
	}

	if (email.value === "") {
		showError(email, "Email is required");
	} else if (!isValidEmail(email.value)) {
		showError(email, "Email is not valid");
	} else {
		showSuccess(email);
	}

	if (password.value === "") {
		showError(password, "Password is required");
	} else {
		showSuccess(password);
	}

	if (confirmPassword.value === "") {
		showError(confirmPassword, "Confirm Password is required");
	} else {
		showSuccess(confirmPassword);
	}
});
