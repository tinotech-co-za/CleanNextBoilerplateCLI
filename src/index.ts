#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import { program } from "commander";
import path from "path";
import { exec } from "child_process";
import fs from "fs";

const packageJson = require("./package.json");

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

/**
 * Run Inquirer to get options for what to include in the generated project.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
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

	// Determine which permutation to use.
	if (answers.typescript && answers.sass && answers.eslint && answers.mongodb) {
		return await writeTypeScriptSassESLintMongoDB(name, basePath, {
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
		return await writeTypeScriptESLintMongoDB(name, basePath, {
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
		return await writeTypeScriptSassMongoDB(name, basePath, {
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
		return await writeTypeScriptSassESLint(name, basePath, {
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
		return await writeTypeScriptSass(name, basePath, {
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
		return await writeTypeScriptESLint(name, basePath, {
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
		return await writeTypeScriptMongoDB(name, basePath, {
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
		return await writeTypeScript(name, basePath, {
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
		return await writeJavaScriptSassESLintMongoDB(name, basePath, {
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
		return await writeJavaScriptESLintMongoDB(name, basePath, {
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
		return await writeJavaScriptSassMongoDB(name, basePath, {
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
		return await writeJavaScriptSassESLint(name, basePath, {
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
		return await writeJavaScriptSass(name, basePath, {
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
		return await writeJavaScriptESLint(name, basePath, {
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
		return await writeJavaScriptMongoDB(name, basePath, {
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
		return await writeJavaScript(name, basePath, {
			typeScript: false,
			sass: false,
		});
	}
};

// Setup commander program.
program
	.version(packageJson.version)
	.description("Clean Next.js Boilerplate CLI");

program
	.argument("[basepath]", " the base path to generate the project at", "./")
	.option("-y, --yes", "answer yes to all the prompts")
	.action(async (basepath, options) => {
		if (!fs.existsSync(basepath)) fs.mkdirSync(basepath);
		process.chdir(basepath);

		const answers = await inquirer.prompt([
			{
				type: "input",
				name: "name",
				message: "What is your project's name?",
				default: path.basename(process.cwd()),
			},
		]);

		// If yes, skip Inquirer questions and generate boilerplate with all the options. Else run Inquirer questions.
		if (options.yes) {
			return await writeTypeScriptSassESLintMongoDB(answers.name, `./`, {
				typeScript: true,
				sass: true,
			});
		} else {
			await run(answers.name, `./`);
		}
		console.log("- Generating git project.");
		exec("git init", (error, stdout, stderr) => {
			if (error) {
				console.error(`error: ${error.message}`);
				return;
			}
			if (stderr) {
				console.error(`stderr: ${stderr}`);
				return;
			}
			console.log(chalk.green(`- ${stdout}`));
		});
	});

// Parse program setup.
program.parse();
