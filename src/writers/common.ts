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

export const writeJSPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSPackageJson(name)
	);
};

export const writeJSMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSMongoPackageJson(name)
	);
};

export const writeJSESLintPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSESLintPackageJson(name)
	);
};

export const writeJSSassPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSSassPackageJson(name)
	);
};

export const writeJSSassESLintPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSSassESLintPackageJson(name)
	);
};

export const writeJSSassMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSSassMongoPackageJson(name)
	);
};

export const writeJSESLintMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSESLintMongoPackageJson(name)
	);
};

export const writeJSSassESLintMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getJSSassESLintMongoPackageJson(name)
	);
};

export const writeTSPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getTSPackageJson(name)
	);
};

export const writeTSMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getTSMongoPackageJson(name)
	);
};

export const writeTSESLintPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getTSESLintPackageJson(name)
	);
};

export const writeTSSassPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getTSSassPackageJson(name)
	);
};

export const writeTSSassESLintPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getTSSassESLintPackageJson(name)
	);
};

export const writeTSSassMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getTSSassMongoPackageJson(name)
	);
};

export const writeTSESLintMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getTSESLintMongoPackageJson(name)
	);
};

export const writeTSSassESLintMongoPackageJson = async (
	name: string,
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/package.json"),
		getTSSassESLintMongoPackageJson(name)
	);
};

export const writeCommonFiles = async (
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
