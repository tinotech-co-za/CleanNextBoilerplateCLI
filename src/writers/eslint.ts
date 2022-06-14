import path from "path";
import fs from "fs";

import { ESLINT_RC } from "../utils/constants";

/**
 * Uses fs to write out an eslint configuration to the specified directory.
 * @param basePath The base path to write out the files to.
 */
export const writeESLint = async (basePath: string): Promise<void> => {
	fs.writeFileSync(path.join(basePath, "/.eslintrc.json"), ESLINT_RC);
};
