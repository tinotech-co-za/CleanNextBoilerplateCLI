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

const makeSassDirs = async (basePath: string): Promise<void> => {
	fs.mkdirSync(path.join(__dirname, basePath, "/sass/abstracts"), {
		recursive: true,
	});
	fs.mkdirSync(path.join(__dirname, basePath, "/sass/components"), {
		recursive: true,
	});
};
const writeSassApp = async (basePath: string): Promise<void> => {
	fs.writeFileSync(path.join(__dirname, basePath, "/sass/App.scss"), SASS_APP);
};

const writeSassBase = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/sass/components/_base.scss"),
		SASS_BASE
	);
};

const writeSassBreakpoints = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/sass/abstracts/_breakpoints.scss"),
		SASS_BREAKPOINTS
	);
};

const writeSassColours = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/sass/abstracts/_colours.scss"),
		SASS_COLOURS
	);
};

const writeSassFonts = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/sass/abstracts/_fonts.scss"),
		SASS_FONTS
	);
};

const writeSassIndex = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/sass/abstracts/_index.scss"),
		SASS_INDEX
	);
};

const writeSassMixins = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/sass/abstracts/_mixins.scss"),
		SASS_MIXINS
	);
};

export const writeSass = async (basePath: string): Promise<void> => {
	makeSassDirs(basePath);
	writeSassApp(basePath);
	writeSassBase(basePath);
	writeSassBreakpoints(basePath);
	writeSassColours(basePath);
	writeSassFonts(basePath);
	writeSassIndex(basePath);
	writeSassMixins(basePath);
};
