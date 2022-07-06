import path from "path";
import fs from "fs";

import { INTERFACES, INTERFACES_CONTEXT, TSCONFIG } from "../utils/constants";

/**
 * Uses fs to write the interfaces file to the directory specified.
 * @param basePath The base path to write out the files to.
 * @param context Whether this project uses the Context API or not.
 */
export const writeInterfaces = async (
	basePath: string,
	context: boolean
): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/interfaces/index.ts"),
		context ? INTERFACES_CONTEXT : INTERFACES
	);
};

/**
 * Uses fs to write a TSConfig file to the directory specified.
 * @param basePath The base path to write out the files to.
 */
export const writeTSConfig = async (basePath: string): Promise<void> => {
	fs.writeFileSync(path.join(basePath, "tsconfig.json"), TSCONFIG);
};
