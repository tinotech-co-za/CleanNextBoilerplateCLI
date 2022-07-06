import path from "path";
import fs from "fs";
import {
	APP_CONTEXT,
	APP_CONTEXT_TS,
	APP_REDUCER,
	APP_REDUCER_TS,
} from "../utils/constants";

/**
 * Uses fs to write out all the directories necessary for using Context in a Next.js app.
 * @param basePath The base path to write out the files to.
 */
const makeContextDirs = async (basePath: string): Promise<void> => {
	fs.mkdirSync(path.join(basePath, "/context"), {
		recursive: true,
	});
};

/**
 * Uses fs to write out the reducer file for using the Context API.
 * @param basePath The base path to write out the files to.
 * @param typeScript Whether this project uses TypeScript or not.
 */
const writeReducer = async (
	basePath: string,
	typeScript: boolean
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, `/context/AppReducer.${typeScript ? "ts" : "js"}`),
		typeScript ? APP_REDUCER_TS : APP_REDUCER
	);
};

/**
 * Uses fs to write out the provider file for using the Context API.
 * @param basePath The base path to write out the files to.
 * @param typeScript Whether this project uses TypeScript or not.
 */
const writeProvider = async (
	basePath: string,
	typeScript: boolean
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, `/context/AppContext.${typeScript ? "tsx" : "jsx"}`),
		typeScript ? APP_CONTEXT_TS : APP_CONTEXT
	);
};

/**
 * Uses fs to write out all the files necessary for using Context in a Next.js app.
 * @param basePath The base path to write out the files to.
 * @param typeScript Whether this project uses TypeScript or not.
 */
export const writeContext = async (
	basePath: string,
	typeScript: boolean
): Promise<void> => {
	await makeContextDirs(basePath);
	await writeReducer(basePath, typeScript);
	await writeProvider(basePath, typeScript);
};
