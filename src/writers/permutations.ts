import chalk from "chalk";

import {
	writeCommonFiles,
	writeJSESLintMongoPackageJson,
	writeJSESLintPackageJson,
	writeJSMongoPackageJson,
	writeJSPackageJson,
	writeJSSassESLintMongoPackageJson,
	writeJSSassESLintPackageJson,
	writeJSSassMongoPackageJson,
	writeJSSassPackageJson,
	writeTSESLintMongoPackageJson,
	writeTSESLintPackageJson,
	writeTSMongoPackageJson,
	writeTSPackageJson,
	writeTSSassESLintMongoPackageJson,
	writeTSSassESLintPackageJson,
	writeTSSassMongoPackageJson,
	writeTSSassPackageJson,
} from "../writers/common";
import { writeMongo } from "../writers/mongodb";
import { writeESLint } from "../writers/eslint";
import { writeSass } from "../writers/sass";
import { Options } from "../interfaces";
import { writeContext } from "./context";

/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScriptSassESLintMongoDB = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeTSSassESLintMongoPackageJson(name, basePath);
	await writeMongo(basePath, options.typeScript);
	await writeSass(basePath);
	await writeESLint(basePath);
	console.log(
		chalk.green(
			"\n- Generated Next.js app with TypeScript, Sass, ESLint and MongoDB"
		)
	);
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass, Context and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScriptSassESLintContext = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeTSSassESLintPackageJson(name, basePath);
	await writeSass(basePath);
	await writeESLint(basePath);
	await writeContext(basePath, options.typeScript);
	console.log(
		chalk.green(
			"\n- Generated Next.js app with TypeScript, Sass, Context and ESLint"
		)
	);
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScriptESLintMongoDB = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeTSESLintMongoPackageJson(name, basePath);
	await writeMongo(basePath, true);
	await writeESLint(basePath);
	console.log(
		chalk.green("\n- Generated Next.js app with TypeScript, ESLint and MongoDB")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScriptSassMongoDB = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeTSSassMongoPackageJson(name, basePath);
	await writeMongo(basePath, true);
	await writeSass(basePath);
	console.log(
		chalk.green("\n- Generated Next.js app with TypeScript, Sass and MongoDB")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScriptSassESLint = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeTSSassESLintPackageJson(name, basePath);
	await writeSass(basePath);
	await writeESLint(basePath);
	console.log(
		chalk.green("\n- Generated Next.js app with TypeScript, Sass and ESLint")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Context and Sass.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScriptSassContext = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeTSSassPackageJson(name, basePath);
	await writeSass(basePath);
	await writeContext(basePath, options.typeScript);
	console.log(
		chalk.green("\n- Generated Next.js app with TypeScript, Context and Sass")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Context and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScriptESLintContext = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeTSESLintPackageJson(name, basePath);
	await writeESLint(basePath);
	await writeContext(basePath, options.typeScript);
	console.log(
		chalk.green("\n- Generated Next.js app with TypeScript, Context and ESLint")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Context and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScriptMongoDBContext = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeTSMongoPackageJson(name, basePath);
	await writeMongo(basePath, true);
	await writeContext(basePath, options.typeScript);
	console.log(
		chalk.green(
			"\n- Generated Next.js app with TypeScript, Context and MongoDB"
		)
	);
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript and Sass.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScriptSass = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeTSSassPackageJson(name, basePath);
	await writeSass(basePath);
	console.log(
		chalk.green("\n- Generated Next.js app with TypeScript and Sass")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScriptESLint = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeTSESLintPackageJson(name, basePath);
	await writeESLint(basePath);
	console.log(
		chalk.green("\n- Generated Next.js app with TypeScript and ESLint")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScriptMongoDB = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeTSMongoPackageJson(name, basePath);
	await writeMongo(basePath, true);
	console.log(
		chalk.green("\n- Generated Next.js app with TypeScript and MongoDB")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript and Context.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScriptContext = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeTSPackageJson(name, basePath);
	await writeContext(basePath, options.typeScript);
	console.log(
		chalk.green("\n- Generated Next.js app with TypeScript and Context")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScript = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeTSPackageJson(name, basePath);
	console.log(chalk.green("\n- Generated Next.js app with TypeScript"));
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript, ESLint, Context and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScriptESLintMongoDBContext = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSESLintMongoPackageJson(name, basePath);
	await writeMongo(basePath, false);
	await writeESLint(basePath);
	await writeContext(basePath, options.typeScript);
	console.log(
		chalk.green(
			"\n- Generated Next.js app with JavaScript, ESLint, Context and MongoDB"
		)
	);
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass, Context and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScriptSassMongoDBContext = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSSassMongoPackageJson(name, basePath);
	await writeSass(basePath);
	await writeMongo(basePath, false);
	await writeContext(basePath, options.typeScript);
	console.log(
		chalk.green(
			"\n- Generated Next.js app with JavaScript, Sass, Context and MongoDB"
		)
	);
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass, Context and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScriptSassESLintContext = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSSassESLintPackageJson(name, basePath);
	await writeSass(basePath);
	await writeESLint(basePath);
	await writeContext(basePath, options.typeScript);
	console.log(
		chalk.green(
			"\n- Generated Next.js app with JavaScript, Sass, Context and ESLint"
		)
	);
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScriptSassESLintMongoDB = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSSassESLintMongoPackageJson(name, basePath);
	await writeMongo(basePath, false);
	await writeESLint(basePath);
	await writeSass(basePath);
	console.log(
		chalk.green(
			"\n- Generated Next.js app with JavaScript, Sass, ESLint and MongoDB"
		)
	);
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScriptESLintMongoDB = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSESLintMongoPackageJson(name, basePath);
	await writeMongo(basePath, false);
	await writeESLint(basePath);
	console.log(
		chalk.green("\n- Generated Next.js app with JavaScript, ESLint and MongoDB")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScriptSassMongoDB = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSSassMongoPackageJson(name, basePath);
	await writeSass(basePath);
	await writeMongo(basePath, false);
	console.log(
		chalk.green("\n- Generated Next.js app with JavaScript, Sass and MongoDB")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScriptSassESLint = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSSassESLintPackageJson(name, basePath);
	await writeSass(basePath);
	await writeESLint(basePath);
	console.log(
		chalk.green("\n- Generated Next.js app with JavaScript, Sass and ESLint")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Context and Sass.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScriptSassContext = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSSassPackageJson(name, basePath);
	await writeSass(basePath);
	await writeContext(basePath, options.typeScript);
	console.log(
		chalk.green("\n- Generated Next.js app with JavaScript, Context and Sass")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Context and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScriptESLintContext = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSESLintPackageJson(name, basePath);
	await writeESLint(basePath);
	await writeContext(basePath, options.typeScript);
	console.log(
		chalk.green("\n- Generated Next.js app with JavaScript, Context and ESLint")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Context and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScriptMongoDBContext = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSMongoPackageJson(name, basePath);
	await writeMongo(basePath, false);
	await writeContext(basePath, options.typeScript);
	console.log(
		chalk.green(
			"\n- Generated Next.js app with JavaScript, Context and MongoDB"
		)
	);
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript and Context.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScriptContext = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSPackageJson(name, basePath);
	await writeContext(basePath, options.typeScript);
	console.log(
		chalk.green("\n- Generated Next.js app with JavaScript and Context")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript and Sass.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScriptSass = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSSassPackageJson(name, basePath);
	await writeSass(basePath);
	console.log(
		chalk.green("\n- Generated Next.js app with JavaScript and Sass")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScriptESLint = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSESLintPackageJson(name, basePath);
	await writeESLint(basePath);
	console.log(
		chalk.green("\n- Generated Next.js app with JavaScript and ESLint")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScriptMongoDB = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSMongoPackageJson(name, basePath);
	await writeMongo(basePath, false);
	console.log(
		chalk.green("\n- Generated Next.js app with JavaScript and MongoDB")
	);
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
	context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScript = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSPackageJson(name, basePath);
	console.log(chalk.green("\n- Generated Next.js app with JavaScript"));
};
