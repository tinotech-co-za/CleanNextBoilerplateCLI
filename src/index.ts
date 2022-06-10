import inquirer from "inquirer";
import { program } from "commander";

const run = async () => {
	const answers = await inquirer.prompt([
		{
			type: "confirm",
			name: "typescript",
			message: "Do you want to use TypeScript in your project?",
			default: true,
		},
		{
			type: "confirm",
			name: "sass",
			message: "Do you want to use Sass in your project?",
			default: true,
		},
		{
			type: "confirm",
			name: "eslint",
			message: "Do you want to use ESLint in your project?",
			default: true,
		},
		{
			type: "confirm",
			name: "mongodb",
			message: "Do you want to use MongoDB in your project?",
			default: true,
		},
	]);

	if (answers.typescript && answers.sass && answers.eslint && answers.mongodb) {
		return console.log("1. typescript, sass, eslint, mongodb");
	}
	if (
		answers.typescript &&
		!answers.sass &&
		answers.eslint &&
		answers.mongodb
	) {
		return console.log("2. typescript, eslint, mongodb");
	}
	if (
		answers.typescript &&
		answers.sass &&
		!answers.eslint &&
		answers.mongodb
	) {
		return console.log("3. typescript, sass, mongodb");
	}
	if (
		answers.typescript &&
		answers.sass &&
		answers.eslint &&
		!answers.mongodb
	) {
		return console.log("4. typescript, sass, eslint");
	}
	if (
		answers.typescript &&
		answers.sass &&
		!answers.eslint &&
		!answers.mongodb
	) {
		return console.log("5. typescript, sass");
	}
	if (
		answers.typescript &&
		!answers.sass &&
		answers.eslint &&
		!answers.mongodb
	) {
		return console.log("6. typescript, eslint");
	}
	if (
		answers.typescript &&
		!answers.sass &&
		!answers.eslint &&
		answers.mongodb
	) {
		return console.log("7. typescript, mongodb");
	}
	if (
		answers.typescript &&
		!answers.sass &&
		!answers.eslint &&
		!answers.mongodb
	) {
		return console.log("8. typescript");
	}
	if (
		!answers.typescript &&
		answers.sass &&
		answers.eslint &&
		answers.mongodb
	) {
		return console.log("9. javascript, sass, eslint, mongodb");
	}
	if (
		!answers.typescript &&
		!answers.sass &&
		answers.eslint &&
		answers.mongodb
	) {
		return console.log("10. javascript, eslint, mongodb");
	}
	if (
		!answers.typescript &&
		answers.sass &&
		!answers.eslint &&
		answers.mongodb
	) {
		return console.log("11. javascript, sass, mongodb");
	}
	if (
		!answers.typescript &&
		answers.sass &&
		answers.eslint &&
		!answers.mongodb
	) {
		return console.log("12. javascript, sass, eslint");
	}
	if (
		!answers.typescript &&
		answers.sass &&
		!answers.eslint &&
		!answers.mongodb
	) {
		return console.log("13. javascript, sass");
	}
	if (
		!answers.typescript &&
		!answers.sass &&
		answers.eslint &&
		!answers.mongodb
	) {
		return console.log("14. javascript, eslint");
	}
	if (
		!answers.typescript &&
		!answers.sass &&
		!answers.eslint &&
		answers.mongodb
	) {
		return console.log("15. javascript, mongodb");
	}
	if (
		!answers.typescript &&
		!answers.sass &&
		!answers.eslint &&
		!answers.mongodb
	) {
		return console.log("16. javascript");
	}
	console.log(answers);
};

program.version("1.0.0").description("Clean Next.js Boilerplate CLI");

program
	.argument("[path]", " the base path to generate the project at", "./")
	.option("-y, --yes", "answer yes to all the prompts")
	.action((path, options) => {
		const obj = { basePath: path, yes: options.yes };
		console.log(obj);

		if (options.yes) {
			console.log("1. typescript, sass, eslint, mongodb");
		} else {
			run();
		}
	});

program.parse();
