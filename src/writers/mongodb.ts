import path from "path";
import fs from "fs";

import { NEXT_CONFIG, UTILS_DB, UTILS_DB_TS } from "../utils/constants";

/**
 * Uses fs to write out a next.config.js file.
 * @param basePath The base path to write out the files to.
 */
const writeNextConfig = async (basePath: string): Promise<void> => {
	fs.writeFileSync(path.join(basePath, "/next.config.js"), NEXT_CONFIG);
};

/**
 * Uses fs to write out a configuration file for using a MongoDB database.
 * @param basePath The base path to write out the files to.
 * @param typeScript Whether this project uses TypeScript or not.
 */
const writeUtilsDB = async (
	basePath: string,
	typeScript: boolean
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, `/utils/db.${typeScript ? "ts" : "js"}`),
		typeScript ? UTILS_DB_TS : UTILS_DB
	);
};

/**
 * Uses fs to write out all the files needed for using MongoDB in a Next.js app.
 * @param basePath The base path to write out the files to.
 * @param typeScript Whether this project uses TypeScript or not.
 */
export const writeMongo = async (
	basePath: string,
	typeScript: boolean
): Promise<void> => {
	await writeUtilsDB(basePath, typeScript);
	await writeNextConfig(basePath);
};
