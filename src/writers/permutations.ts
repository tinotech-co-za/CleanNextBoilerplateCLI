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

/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
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
	return console.log("1. typescript, sass, eslint, mongodb");
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
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
	return console.log("2. typescript, eslint, mongodb");
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
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
	return console.log("3. typescript, sass, mongodb");
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
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
	return console.log("4. typescript, sass, eslint");
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript and Sass.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
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
	return console.log("5. typescript, sass");
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
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
	return console.log("6. typescript, eslint");
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
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
	return console.log("7. typescript, mongodb");
};

/**
 * Generates boilerplate for a Next.js project that uses TypeScript.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScript = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeTSPackageJson(name, basePath);
	return console.log("8. typescript");
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
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
	return console.log("9. javascript, sass, eslint, mongodb");
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
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
	return console.log("10. javascript, eslint, mongodb");
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
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
	return console.log("11. javascript, sass, mongodb");
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
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
	return console.log("12. javascript, sass, eslint");
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript and Sass.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
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
	return console.log("13. javascript, sass");
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
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
	return console.log("14. javascript, eslint");
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
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
	return console.log("15. javascript, mongodb");
};

/**
 * Generates boilerplate for a Next.js project that uses JavaScript.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeJavaScript = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, options);
	await writeJSPackageJson(name, basePath);
	return console.log("16. javascript");
};
