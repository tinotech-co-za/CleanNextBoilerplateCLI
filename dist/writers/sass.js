"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeSass = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../utils/constants");
const makeSassDirs = async (basePath) => {
    fs_1.default.mkdirSync(path_1.default.join(__dirname, basePath, "/sass/abstracts"), {
        recursive: true,
    });
    fs_1.default.mkdirSync(path_1.default.join(__dirname, basePath, "/sass/components"), {
        recursive: true,
    });
};
const writeSassApp = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/sass/App.scss"), constants_1.SASS_APP);
};
const writeSassBase = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/sass/components/_base.scss"), constants_1.SASS_BASE);
};
const writeSassBreakpoints = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/sass/abstracts/_breakpoints.scss"), constants_1.SASS_BREAKPOINTS);
};
const writeSassColours = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/sass/abstracts/_colours.scss"), constants_1.SASS_COLOURS);
};
const writeSassFonts = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/sass/abstracts/_fonts.scss"), constants_1.SASS_FONTS);
};
const writeSassIndex = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/sass/abstracts/_index.scss"), constants_1.SASS_INDEX);
};
const writeSassMixins = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/sass/abstracts/_mixins.scss"), constants_1.SASS_MIXINS);
};
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
