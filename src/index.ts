import inquirer from "inquirer";

const run = async () => {
	const answers = await inquirer.prompt([
		{
			type: "confirm",
			name: "TypeScript",
			message: "Do you want to use TypeScript in your project?",
			default: true,
		},
		{
			type: "confirm",
			name: "Sass",
			message: "Do you want to use Sass in your project?",
			default: true,
		},
		{
			type: "confirm",
			name: "ESLint",
			message: "Do you want to use ESLint in your project?",
			default: true,
		},
		{
			type: "confirm",
			name: "MongoDB",
			message: "Do you want to use MongoDB in your project?",
			default: true,
		},
	]);
	console.log(answers);
};

run();
