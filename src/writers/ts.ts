import path from "path";
import fs from "fs";

import { INTERFACES } from "../utils/constants";

/**
 * Uses fs to write the interfaces file to the directory specified.
 * @param basePath The base path to write out the files to.
 */
export const writeInterfaces = async (basePath: string): Promise<void> => {
	fs.writeFileSync(path.join(basePath, "/interfaces/index.ts"), INTERFACES);
};
