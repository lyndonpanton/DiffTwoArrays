"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function compare(one, two) {
		if (!one || !two) {
			display("???", "???", "Enter values into both input fields");
		} else {
			let first = one.split(" ").join("").split("");
			let second = two.split(" ").join("").split("");
			let array = [];

			// Method I
			for (let i = 0; i < first.length; i++) {
				if (second.indexOf(first[i]) === -1) {
					array.push(first[i]);
				}
			}

			for (let i = 0; i < second.length; i++) {
				if (first.indexOf(second[i]) === -1) {
					array.push(second[i]);
				}
			}

			// Method II
			// first.forEach(function(value) {
			// 	if (second.indexOf(value) === -1) {
			// 		array.push(value);
			// 	}
			// });

			// second.forEach(function(value) {
			// 	if (first.indexOf(value) === -1) {
			// 		array.push(value);
			// 	}
			// });

			display(first.join(", "), second.join(", "), array.join(", "));
		}
	}

	function display(a1, a2, r) {
		document.getElementById("first-value").textContent = a1;
		document.getElementById("second-value").textContent = a2;
		document.getElementById("diff-value").textContent = r;
	}

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");

			task.classList.remove("hidden");
			task.classList.add("visible");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");

			task.classList.remove("visible");
			task.classList.add("hidden");
		}
	}

	let chevron = document.getElementById("chevron");
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});

	chevron.addEventListener("keydown", function(event) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			toggle(this);
		}
	});

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		compare(this.children[0].value, this.children[1].value);
	});
};