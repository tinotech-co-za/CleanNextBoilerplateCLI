import path from "path";
import fs from "fs";

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
 * Uses fs to write out all the files necessary for using Context in a Next.js app.
 * @param basePath The base path to write out the files to.
 */
export const writeContext = async (basePath: string): Promise<void> => {
	makeContextDirs(basePath);
};
