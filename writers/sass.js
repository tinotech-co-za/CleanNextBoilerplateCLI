"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeSass = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../utils/constants");
/**
 * Uses fs to write out all the directories necessary for using Sass in a Next.js app.
 * @param basePath The base path to write out the files to.
 */
const makeSassDirs = async (basePath) => {
    fs_1.default.mkdirSync(path_1.default.join(basePath, "/sass/abstracts"), {
        recursive: true,
    });
    fs_1.default.mkdirSync(path_1.default.join(basePath, "/sass/components"), {
        recursive: true,
    });
};
/**
 * Uses fs to write out the sass app file for using components.
 * @param basePath The base path to write out the files to.
 */
const writeSassApp = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/sass/App.scss"), constants_1.SASS_APP);
};
/**
 * Uses fs to write out the sass base file containing a reset.
 * @param basePath The base path to write out the files to.
 */
const writeSassBase = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/sass/components/_base.scss"), constants_1.SASS_BASE);
};
/**
 * Uses fs to write out the sass file for breakpoints.
 * @param basePath The base path to write out the files to.
 */
const writeSassBreakpoints = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/sass/abstracts/_breakpoints.scss"), constants_1.SASS_BREAKPOINTS);
};
/**
 * Uses fs to write out the sass file for colours.
 * @param basePath The base path to write out the files to.
 */
const writeSassColours = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/sass/abstracts/_colours.scss"), constants_1.SASS_COLOURS);
};
/**
 * Uses fs to write out the sass file for fonts.
 * @param basePath The base path to write out the files to.
 */
const writeSassFonts = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/sass/abstracts/_fonts.scss"), constants_1.SASS_FONTS);
};
/**
 * Uses fs to write out the sass file that forwards all abstracts.
 * @param basePath The base path to write out the files to.
 */
const writeSassIndex = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/sass/abstracts/_index.scss"), constants_1.SASS_INDEX);
};
/**
 * Uses fs to write out the sass file for mixins.
 * @param basePath The base path to write out the files to.
 */
const writeSassMixins = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/sass/abstracts/_mixins.scss"), constants_1.SASS_MIXINS);
};
/**
 * Uses fs to write out all the files necessary for using Sass in a Next.js app.
 * @param basePath The base path to write out the files to.
 */
const writeSass = async (basePath) => {
    makeSassDirs(basePath);
    writeSassApp(basePath);
    writeSassBase(basePath);
    writeSassBreakpoints(basePath);
    writeSassColours(basePath);
    writeSassFonts(basePath);
    writeSassIndex(basePath);
    writeSassMixins(basePath);
};
exports.writeSass = writeSass;
