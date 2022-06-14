import path from "path";
import fs from "fs";

import {
	getIndex,
	getJSESLintMongoPackageJson,
	getJSESLintPackageJson,
	getJSMongoPackageJson,
	getJSPackageJson,
	getJSSassESLintMongoPackageJson,
	getJSSassESLintPackageJson,
	getJSSassMongoPackageJson,
	getJSSassPackageJson,
	getManifest,
	getMeta,
	getReadme,
	getTSESLintMongoPackageJson,
	getTSESLintPackageJson,
	getTSMongoPackageJson,
	getTSPackageJson,
	getTSSassESLintMongoPackageJson,
	getTSSassESLintPackageJson,
	getTSSassMongoPackageJson,
	getTSSassPackageJson,
} from "../utils/files";
import {
	API_POST,
	API_POST_TS,
	APP,
	APP_SASS,
	APP_SASS_TS,
	APP_TS,
	GITIGNORE,
	UTILS_INDEX,
	VERCEL_JSON,
	WRAPPER,
	WRAPPER_TS,
} from "../utils/constants";
import { Options } from "../interfaces";

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeJSPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getJSPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeJSMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getJSMongoPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeJSESLintPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getJSESLintPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeJSSassPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getJSSassPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeJSSassESLintPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getJSSassESLintPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeJSSassMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getJSSassMongoPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeJSESLintMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getJSESLintMongoPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeJSSassESLintMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getJSSassESLintMongoPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeTSPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getTSPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeTSMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getTSMongoPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeTSESLintPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getTSESLintPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeTSSassPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getTSSassPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeTSSassESLintPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getTSSassESLintPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeTSSassMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getTSSassMongoPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeTSESLintMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getTSESLintMongoPackageJson(name)
	);
};

/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
export const writeTSSassESLintMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/package.json"),
		getTSSassESLintMongoPackageJson(name)
	);
};

/**
 * Uses fs to create all the directories common to all Next.js apps.
 * @param basePath The base path to write out the directories to.
 */
const mkCommonDirs = async (basePath: string): Promise<void> => {
	fs.mkdirSync(path.join(basePath, "/components"), {
		recursive: true,
	});
	fs.mkdirSync(path.join(basePath, "/public"), {
		recursive: true,
	});
	fs.mkdirSync(path.join(basePath, "/utils"), {
		recursive: true,
	});
	fs.mkdirSync(path.join(basePath, "/pages/api/post"), {
		recursive: true,
	});
};

/**
 * Uses fs to write the files that are common to all Next.js apps.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 */
export const writeCommonFiles = async (
	name: string,
	basePath: string,
	options: Options
): Promise<void> => {
	mkCommonDirs(basePath);
	fs.writeFileSync(
		path.join(
			basePath,
			`/components/Meta.${options.typeScript ? "tsx" : "jsx"}`
		),
		getMeta(name, options.typeScript)
	);
	fs.writeFileSync(
		path.join(
			basePath,
			`/components/Wrapper.${options.typeScript ? "tsx" : "jsx"}`
		),
		options.typeScript ? WRAPPER_TS : WRAPPER
	);
	fs.writeFileSync(
		path.join(
			basePath,
			`/pages/api/post/index.${options.typeScript ? "ts" : "js"}`
		),
		options.typeScript ? API_POST_TS : API_POST
	);
	fs.writeFileSync(
		path.join(basePath, `/pages/_app.${options.typeScript ? "tsx" : "jsx"}`),
		options.sass
			? options.typeScript
				? APP_SASS_TS
				: APP_SASS
			: options.typeScript
			? APP_TS
			: APP
	);
	fs.writeFileSync(
		path.join(basePath, `/pages/index.${options.typeScript ? "tsx" : "jsx"}`),
		getIndex(name, options.typeScript)
	);
	fs.writeFileSync(
		path.join(basePath, "/public/manifest.json"),
		getManifest(name)
	);
	fs.writeFileSync(
		path.join(basePath, `/utils/index.${options.typeScript ? "ts" : "js"}`),
		UTILS_INDEX
	);
	fs.writeFileSync(path.join(basePath, "/.gitignore"), GITIGNORE);
	fs.writeFileSync(path.join(basePath, "/README.MD"), getReadme(name));
	fs.writeFileSync(path.join(basePath, "/vercel.json"), VERCEL_JSON);
};
