const puzzle = require("./puzzleInput.js");

function Calculator(puzzle) {
	let sum = 0;
	for (let index = 0; index < 20; index++) {
		const element = puzzle[index];
		console.log("\n", index, ": ", element);

		const newString = element
			.toLowerCase()
			.replace(/one|two|three|four|five|six|seven|eight|nine/g, (match) => {
				switch (match) {
					case "one":
						return "1";
					case "two":
						return "2";
					case "three":
						return "3";
					case "four":
						return "4";
					case "five":
						return "5";
					case "six":
						return "6";
					case "seven":
						return "7";
					case "eight":
						return "8";
					case "nine":
						return "9";
				}
			});
		console.log(index, ": ", newString);

		const firstDigit = newString.match(/\d/)[0];
		const lastDigit = newString.match(/\d(?=\D*$)/)[0];
		console.log(index, ": ", firstDigit, lastDigit);
		const val = parseInt(firstDigit + lastDigit);
		console.log(val, "\n");
		sum += val;
		console.log(sum);
	}
	console.log(sum);
}

Calculator(puzzle);

// const wordToNum = {
// 	one: 1,
// 	two: 2,
// 	three: 3,
// 	four: 4,
// 	five: 5,
// 	six: 6,
// 	seven: 7,
// 	eight: 8,
// 	nine: 9,
// };
// const words = Object.keys(wordToNum);

// function solve(input, part) {
// 	let sum = 0;
// 	for (let line of input) {
// 		if (part === 2) {
// 			for (const word of words) {
// 				line = line.replaceAll(
// 					word,
// 					`${word[0]}${wordToNum[word]}${word.at(-1)}`,
// 				);
// 			}
// 		}
// 		const nums = line.match(/\d/g);
// 		const val = +`${nums[0]}${nums.at(-1)}`;
// 		sum += val;
// 	}
// 	console.log(sum);
// }
// solve(puzzle, 1);
// solve(puzzle, 2);

// 55834;
// 53221;
