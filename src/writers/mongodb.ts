import path from "path";
import fs from "fs";
import { NEXT_CONFIG } from "../utils/constants";

export const writeNextConfig: Function = async (
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/next.config.js"),
		NEXT_CONFIG
	);
};

export const writeUtilsDB: Function = async (
	basePath: string,
	typeScript: boolean
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, `/utils/db.${typeScript ? "ts" : "js"}`),
		NEXT_CONFIG
	);
};
