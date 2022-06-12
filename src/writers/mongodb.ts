import path from "path";
import fs from "fs";
import { NEXT_CONFIG, UTILS_DB, UTILS_DB_TS } from "../utils/constants";

const writeNextConfig = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/next.config.js"),
		NEXT_CONFIG
	);
};

const writeUtilsDB = async (
	basePath: string,
	typeScript: boolean
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, `/utils/db.${typeScript ? "ts" : "js"}`),
		typeScript ? UTILS_DB_TS : UTILS_DB
	);
};

export const writeMongo = async (
	basePath: string,
	typeScript: boolean
): Promise<void> => {
	await writeUtilsDB(basePath, typeScript);
	await writeNextConfig(basePath);
};
