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
	getTSESLintPackageJson,
	getTSMongoPackageJson,
	getTSPackageJson,
	getTSSassESLintPackageJson,
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

export const writeJSPackageJson: Function = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSPackageJson(name)
	);
};

export const writeJSMongoPackageJson: Function = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSMongoPackageJson(name)
	);
};

export const writeJSESLintPackageJson: Function = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSESLintPackageJson(name)
	);
};

export const writeJSSassPackageJson: Function = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSSassPackageJson(name)
	);
};

export const writeJSSassESLintPackageJson: Function = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSSassESLintPackageJson(name)
	);
};

export const writeJSSassMongoPackageJson: Function = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSSassMongoPackageJson(name)
	);
};

export const writeJSESLintMongoPackageJson: Function = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSESLintMongoPackageJson(name)
	);
};

export const writeJSSassESLintMongoPackageJson: Function = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSSassESLintMongoPackageJson(name)
	);
};

export const writeTSPackageJson: Function = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getTSPackageJson(name)
	);
};

export const writeTSMongoPackageJson: Function = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getTSMongoPackageJson(name)
	);
};

export const writeTSESLintPackageJson: Function = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getTSESLintPackageJson(name)
	);
};

export const writeTSSassPackageJson: Function = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getTSSassPackageJson(name)
	);
};

export const writeTSSassESLintPackageJson: Function = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getTSSassESLintPackageJson(name)
	);
};

export const writeCommonFiles: Function = async (
	name: string,
	basePath: string,
	typeScript: boolean,
	sass: boolean
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
		getMeta(name, typeScript)
	);
	fs.writeFileSync(
		path.join(
			__dirname,
			basePath,
			`/components/Wrapper.${typeScript ? "tsx" : "jsx"}`
		),
		typeScript ? WRAPPER_TS : WRAPPER
	);
	fs.writeFileSync(
		path.join(
			__dirname,
			basePath,
			`/pages/api/post/index.${typeScript ? "ts" : "js"}`
		),
		typeScript ? API_POST_TS : API_POST
	);
	fs.writeFileSync(
		path.join(__dirname, basePath, `/pages/_app.${typeScript ? "tsx" : "jsx"}`),
		sass ? (typeScript ? APP_SASS_TS : APP_SASS) : typeScript ? APP_TS : APP
	);
	fs.writeFileSync(
		path.join(
			__dirname,
			basePath,
			`/pages/index.${typeScript ? "tsx" : "jsx"}`
		),
		getIndex(name, typeScript)
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
