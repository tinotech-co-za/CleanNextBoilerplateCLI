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

const makeSassDirs: Function = async (basePath: string): Promise<void> => {
	fs.mkdirSync(path.join(__dirname, basePath, "/sass/abstracts"), {
		recursive: true,
	});
	fs.mkdirSync(path.join(__dirname, basePath, "/sass/components"), {
		recursive: true,
	});
};
const writeSassApp: Function = async (basePath: string): Promise<void> => {
	fs.writeFileSync(path.join(__dirname, basePath, "/sass/App.scss"), SASS_APP);
};

const writeSassBase: Function = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/sass/components/_base.scss"),
		SASS_BASE
	);
};

const writeSassBreakpoints: Function = async (
	basePath: string
): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/sass/abstracts/_breakpoints.scss"),
		SASS_BREAKPOINTS
	);
};

const writeSassColours: Function = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/sass/abstracts/_colours.scss"),
		SASS_COLOURS
	);
};

const writeSassFonts: Function = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/sass/abstracts/_fonts.scss"),
		SASS_FONTS
	);
};

const writeSassIndex: Function = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/sass/abstracts/_index.scss"),
		SASS_INDEX
	);
};

const writeSassMixins: Function = async (basePath: string): Promise<void> => {
	fs.writeFileSync(
		path.join(__dirname, basePath, "/sass/abstracts/_mixins.scss"),
		SASS_MIXINS
	);
};

export const writeSass: Function = async (basePath: string): Promise<void> => {
	makeSassDirs(basePath);
	writeSassApp(basePath);
	writeSassBase(basePath);
	writeSassBreakpoints(basePath);
	writeSassColours(basePath);
	writeSassFonts(basePath);
	writeSassIndex(basePath);
	writeSassMixins(basePath);
};
