import inquirer from "inquirer";
import { program } from "commander";
import path from "path";
import {
	writeJavaScript,
	writeJavaScriptESLint,
	writeJavaScriptESLintMongoDB,
	writeJavaScriptMongoDB,
	writeJavaScriptSass,
	writeJavaScriptSassESLint,
	writeJavaScriptSassESLintMongoDB,
	writeJavaScriptSassMongoDB,
	writeTypeScript,
	writeTypeScriptESLint,
	writeTypeScriptESLintMongoDB,
	writeTypeScriptMongoDB,
	writeTypeScriptSass,
	writeTypeScriptSassESLint,
	writeTypeScriptSassESLintMongoDB,
	writeTypeScriptSassMongoDB,
} from "./writers/permutations";

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
		await writeTypeScriptSassESLintMongoDB(name, basePath, {
			typeScript: true,
			sass: true,
		});
	}
	if (
		answers.typescript &&
		!answers.sass &&
		answers.eslint &&
		answers.mongodb
	) {
		await writeTypeScriptESLintMongoDB(name, basePath, {
			typeScript: true,
			sass: false,
		});
	}
	if (
		answers.typescript &&
		answers.sass &&
		!answers.eslint &&
		answers.mongodb
	) {
		await writeTypeScriptSassMongoDB(name, basePath, {
			typeScript: true,
			sass: true,
		});
	}
	if (
		answers.typescript &&
		answers.sass &&
		answers.eslint &&
		!answers.mongodb
	) {
		await writeTypeScriptSassESLint(name, basePath, {
			typeScript: true,
			sass: true,
		});
	}
	if (
		answers.typescript &&
		answers.sass &&
		!answers.eslint &&
		!answers.mongodb
	) {
		await writeTypeScriptSass(name, basePath, {
			typeScript: true,
			sass: true,
		});
	}
	if (
		answers.typescript &&
		!answers.sass &&
		answers.eslint &&
		!answers.mongodb
	) {
		await writeTypeScriptESLint(name, basePath, {
			typeScript: true,
			sass: false,
		});
	}
	if (
		answers.typescript &&
		!answers.sass &&
		!answers.eslint &&
		answers.mongodb
	) {
		await writeTypeScriptMongoDB(name, basePath, {
			typeScript: true,
			sass: false,
		});
	}
	if (
		answers.typescript &&
		!answers.sass &&
		!answers.eslint &&
		!answers.mongodb
	) {
		await writeTypeScript(name, basePath, {
			typeScript: true,
			sass: false,
		});
	}
	if (
		!answers.typescript &&
		answers.sass &&
		answers.eslint &&
		answers.mongodb
	) {
		await writeJavaScriptSassESLintMongoDB(name, basePath, {
			typeScript: false,
			sass: true,
		});
	}
	if (
		!answers.typescript &&
		!answers.sass &&
		answers.eslint &&
		answers.mongodb
	) {
		await writeJavaScriptESLintMongoDB(name, basePath, {
			typeScript: false,
			sass: false,
		});
	}
	if (
		!answers.typescript &&
		answers.sass &&
		!answers.eslint &&
		answers.mongodb
	) {
		await writeJavaScriptSassMongoDB(name, basePath, {
			typeScript: false,
			sass: true,
		});
	}
	if (
		!answers.typescript &&
		answers.sass &&
		answers.eslint &&
		!answers.mongodb
	) {
		await writeJavaScriptSassESLint(name, basePath, {
			typeScript: false,
			sass: true,
		});
	}
	if (
		!answers.typescript &&
		answers.sass &&
		!answers.eslint &&
		!answers.mongodb
	) {
		await writeJavaScriptSass(name, basePath, {
			typeScript: false,
			sass: true,
		});
	}
	if (
		!answers.typescript &&
		!answers.sass &&
		answers.eslint &&
		!answers.mongodb
	) {
		await writeJavaScriptESLint(name, basePath, {
			typeScript: false,
			sass: false,
		});
	}
	if (
		!answers.typescript &&
		!answers.sass &&
		!answers.eslint &&
		answers.mongodb
	) {
		await writeJavaScriptMongoDB(name, basePath, {
			typeScript: false,
			sass: false,
		});
	}
	if (
		!answers.typescript &&
		!answers.sass &&
		!answers.eslint &&
		!answers.mongodb
	) {
		await writeJavaScript(name, basePath, {
			typeScript: false,
			sass: false,
		});
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
			return await writeTypeScriptSassESLintMongoDB(answers.name, basepath, {
				typeScript: true,
				sass: true,
			});
		} else {
			run(answers.name, basepath);
		}
	});

program.parse();
