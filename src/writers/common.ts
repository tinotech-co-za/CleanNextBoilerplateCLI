import path from "path";
import fs from "fs";

import {
	getIndex,
	getJSESLintPackageJson,
	getJSMongoPackageJson,
	getJSPackageJson,
	getJSSassPackageJson,
	getManifest,
	getMeta,
	getReadme,
} from "../utils/files";
import {
	API_POST,
	APP,
	APP_SASS,
	GITIGNORE,
	UTILS_INDEX,
	VERCEL_JSON,
	WRAPPER,
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
		sass ? APP_SASS : APP
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
