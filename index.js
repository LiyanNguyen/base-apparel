let emailInput = document.querySelector('#emailInput');
let submitBtn = document.querySelector('#submitBtn');
let errorIcon = document.querySelector('.error-icon');
let errorMsg = document.querySelector('.error-msg');
let isValidEmail = true

submitBtn.onclick = () => {
	let emailAddress = emailInput.value;

	if (emailAddress.includes('.com') && emailAddress.includes('@')) {
		isValidEmail = true;
	}
	else {
		isValidEmail = false;
	}

	if (!isValidEmail) {
		emailInput.classList.remove("valid-input");
		emailInput.classList.add("invalid-input");
		errorIcon.style.display = "block";
		errorMsg.style.display = "block";
	}
	else {
		emailInput.classList.add("valid-input");
		emailInput.classList.remove("invalid-input");
		errorIcon.style.display = "none";
		errorMsg.style.display = "none";
	}
}