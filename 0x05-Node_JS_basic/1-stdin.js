#!/usr/bin/env node
console.log("Welcome to Holberton School, what is your name?");
process.stdin.on("data", (data) => {
	const input = data.toString().trim();
	process.stdout.write(`Your name is: ${input}\n`);

	console.log("This important software is now closing");
	process.exit();
}); 	
