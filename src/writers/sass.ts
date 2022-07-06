import path from "path";
import fs from "fs";

import {
	SASS_APP,
	SASS_BASE,
	SASS_BREAKPOINTS,
	SASS_COLOURS,
	SASS_FONTS,
	SASS_INDEX,
	SASS_MIXINS,
} from "../utils/constants";

/**
 * Uses fs to write out all the directories necessary for using Sass in a Next.js app.
 * @param basePath The base path to write out the files to.
 */
const makeSassDirs = async (basePath: string): Promise<void> => {
	fs.mkdirSync(path.join(basePath, "/sass/abstracts"), {
		recursive: true,
	});
	fs.mkdirSync(path.join(basePath, "/sass/components"), {
		recursive: true,
	});
};

/**
 * Uses fs to write out the sass app file for using components.
 * @param basePath The base path to write out the files to.
 */
const writeSassApp = async (basePath: string): Promise<void> => {
	fs.writeFileSync(path.join(basePath, "/sass/App.scss"), SASS_APP);
};

/**
 * Uses fs to write out the sass base file containing a reset.
 * @param basePath The base path to write out the files to.
 */
const writeSassBase = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/sass/components/_base.scss"),
		SASS_BASE
	);
};

/**
 * Uses fs to write out the sass file for breakpoints.
 * @param basePath The base path to write out the files to.
 */
const writeSassBreakpoints = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/sass/abstracts/_breakpoints.scss"),
		SASS_BREAKPOINTS
	);
};

/**
 * Uses fs to write out the sass file for colours.
 * @param basePath The base path to write out the files to.
 */
const writeSassColours = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/sass/abstracts/_colours.scss"),
		SASS_COLOURS
	);
};

/**
 * Uses fs to write out the sass file for fonts.
 * @param basePath The base path to write out the files to.
 */
const writeSassFonts = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/sass/abstracts/_fonts.scss"),
		SASS_FONTS
	);
};

/**
 * Uses fs to write out the sass file that forwards all abstracts.
 * @param basePath The base path to write out the files to.
 */
const writeSassIndex = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/sass/abstracts/_index.scss"),
		SASS_INDEX
	);
};

/**
 * Uses fs to write out the sass file for mixins.
 * @param basePath The base path to write out the files to.
 */
const writeSassMixins = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(basePath, "/sass/abstracts/_mixins.scss"),
		SASS_MIXINS
	);
};

/**
 * Uses fs to write out all the files necessary for using Sass in a Next.js app.
 * @param basePath The base path to write out the files to.
 */
export const writeSass = async (basePath: string): Promise<void> => {
	await makeSassDirs(basePath);
	await writeSassApp(basePath);
	await writeSassBase(basePath);
	await writeSassBreakpoints(basePath);
	await writeSassColours(basePath);
	await writeSassFonts(basePath);
	await writeSassIndex(basePath);
	await writeSassMixins(basePath);
};
