const fs = require("fs");

const input = fs.readFileSync("./dayTwoInput.txt", "utf8").trimEnd();

function solve(input, question) {
	const cubeLimits = {
		red: 12,
		green: 13,
		blue: 14,
	};

	let questionOneSum = 0;
	let questionTwoSum = 0;
	for (let line of input.split("\n")) {
		let minimumColors = {
			red: 0,
			green: 0,
			blue: 0,
		};
		let id = +line.match(/Game\s+(\d+):/)[1];
		const parts = line.split(": ")[1].split(/[,;]/);
		let overAllowance = false;
		let addId = true;

		for (let i = 0; i < parts.length && !overAllowance; i++) {
			const part = parts[i];
			const colors = part.split(", ");
			for (let j = 0; j < colors.length; j++) {
				const color = colors[j];
				const [count, colorName] = color.trim().split(" ");
				const parsedCount = parseInt(count);
				if (question === 1) {
					if (parsedCount > cubeLimits[colorName]) {
						overAllowance = true;
						addId = false;
						break;
					}
				} else {
					if (parsedCount > minimumColors[colorName]) {
						minimumColors[colorName] = parsedCount;
					}
				}
			}
		}
		const poweredColors =
			minimumColors.blue * minimumColors.red * minimumColors.green;
		questionTwoSum += poweredColors;

		addId ? (questionOneSum += id) : null;
	}
	question === 1
		? console.log("question 1: ", questionOneSum)
		: console.log("question 2: ", questionTwoSum);
}

solve(input, 1);
solve(input, 2);
