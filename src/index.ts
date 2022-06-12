import inquirer from "inquirer";
import { program } from "commander";
import path from "path";
import fs from "fs";

import {
	getIndex,
	getJSPackageJson,
	getManifest,
	getMeta,
	getReadme,
} from "./utils/files";
import {
	API_POST,
	APP_TSX,
	GITIGNORE,
	UTILS_INDEX,
	VERCEL_JSON,
	WRAPPER,
} from "./utils/constants";

const writeCommonFiles: Function = async (
	name: string,
	basePath: string,
	typeScript: boolean
): Promise<void> => {
	fs.mkdirSync(path.join(__dirname, basePath, "/components"), {
		recursive: true,
	});
	fs.mkdirSync(path.join(__dirname, basePath, "/public"), {
		recursive: true,
	});
	fs.mkdirSync(path.join(__dirname, basePath, "/utils"), {
		recursive: true,
	});
	fs.mkdirSync(path.join(__dirname, basePath, "/pages/api/post"), {
		recursive: true,
	});
	fs.writeFileSync(
		path.join(
			__dirname,
			basePath,
			`/components/Meta.${typeScript ? "tsx" : "jsx"}`
		),
		getMeta(name)
	);
	fs.writeFileSync(
		path.join(
			__dirname,
			basePath,
			`/components/Wrapper.${typeScript ? "tsx" : "jsx"}`
		),
		WRAPPER
	);
	fs.writeFileSync(
		path.join(
			__dirname,
			basePath,
			`/pages/api/post/index.${typeScript ? "ts" : "js"}`
		),
		API_POST
	);
	fs.writeFileSync(
		path.join(__dirname, basePath, `/pages/_app.${typeScript ? "tsx" : "jsx"}`),
		APP_TSX
	);
	fs.writeFileSync(
		path.join(
			__dirname,
			basePath,
			`/pages/index.${typeScript ? "tsx" : "jsx"}`
		),
		getIndex(name)
	);
	fs.writeFileSync(
		path.join(__dirname, basePath, "/public/manifest.json"),
		getManifest(name)
	);
	fs.writeFileSync(
		path.join(__dirname, basePath, `/utils/index.${typeScript ? "ts" : "js"}`),
		UTILS_INDEX
	);
	fs.writeFileSync(path.join(__dirname, basePath, "/.gitignore"), GITIGNORE);
	fs.writeFileSync(
		path.join(__dirname, basePath, "/README.MD"),
		getReadme(name)
	);
	fs.writeFileSync(path.join(__dirname, basePath, "/vercel.json"), VERCEL_JSON);
};

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
		await writeCommonFiles(name, basePath, false);
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
