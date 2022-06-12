import path from "path";
import fs from "fs";
import { NEXT_CONFIG } from "../utils/constants";

const writeNextConfig: Function = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/next.config.js"),
		NEXT_CONFIG
	);
};

const writeUtilsDB: Function = async (
	basePath: string,
	typeScript: boolean
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, `/utils/db.${typeScript ? "ts" : "js"}`),
		NEXT_CONFIG
	);
};

export const writeMongo: Function = async (
	basePath: string,
	typeScript: boolean
): Promise<void> => {
	await writeUtilsDB(basePath, typeScript);
	await writeNextConfig(basePath);
};
