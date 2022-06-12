import inquirer from "inquirer";
import { program } from "commander";
import path from "path";

import {
	writeCommonFiles,
	writeJSESLintPackageJson,
	writeJSMongoPackageJson,
	writeJSPackageJson,
	writeJSSassPackageJson,
} from "./writers/common";
import { writeNextConfig, writeUtilsDB } from "./writers/mongodb";
import { writeESLintRC } from "./writers/eslint";
import { writeSass } from "./writers/sass";

const run = async (name: string, basePath: string) => {
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
		await writeCommonFiles(name, basePath, false);
		await writeJSSassPackageJson(name, basePath);
		await writeSass(basePath);
		return console.log("13. javascript, sass");
	}
	if (
		!answers.typescript &&
		!answers.sass &&
		answers.eslint &&
		!answers.mongodb
	) {
		await writeCommonFiles(name, basePath, false);
		await writeJSESLintPackageJson(name, basePath);
		await writeESLintRC(basePath);
		return console.log("14. javascript, eslint");
	}
	if (
		!answers.typescript &&
		!answers.sass &&
		!answers.eslint &&
		answers.mongodb
	) {
		await writeCommonFiles(name, basePath, false);
		await writeJSMongoPackageJson(name, basePath);
		await writeNextConfig(basePath);
		await writeUtilsDB(basePath, false);
		return console.log("15. javascript, mongodb");
	}
	if (
		!answers.typescript &&
		!answers.sass &&
		!answers.eslint &&
		!answers.mongodb
	) {
		await writeCommonFiles(name, basePath, false);
		await writeJSPackageJson(name, basePath);
		return console.log("16. javascript");
	}
	console.log(answers);
};

program.version("1.0.0").description("Clean Next.js Boilerplate CLI");

program
	.argument("[basepath]", " the base path to generate the project at", "./")
	.option("-y, --yes", "answer yes to all the prompts")
	.action(async (basepath, options) => {
		const obj = { basePath: basepath, yes: options.yes };
		console.log(obj);

		const answers = await inquirer.prompt([
			{
				type: "input",
				name: "name",
				message: "What is your project's name?",
				default: path.basename(__dirname),
			},
		]);

		console.log(answers.name);

		if (options.yes) {
			console.log("1. typescript, sass, eslint, mongodb");
		} else {
			run(answers.name, basepath);
		}
	});

program.parse();
