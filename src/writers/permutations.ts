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

type Options = {
	typeScript: boolean;
	sass: boolean;
};

/**
 * 
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param param2 The options. Takes the form. {
	typeScript: boolean;
	sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
export const writeTypeScriptSassESLintMongoDB = async (
	name: string,
	basePath: string,
	{}: Options
): Promise<void> => {
	await writeCommonFiles(name, basePath, true, true);
	await writeTSSassESLintMongoPackageJson(name, basePath);
	await writeMongo(basePath, true);
	await writeSass(basePath);
	await writeESLint(basePath);
	return console.log("1. typescript, sass, eslint, mongodb");
};
