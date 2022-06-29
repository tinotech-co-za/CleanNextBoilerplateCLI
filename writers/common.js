"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCommonFiles = exports.writeTSSassESLintMongoPackageJson = exports.writeTSESLintMongoPackageJson = exports.writeTSSassMongoPackageJson = exports.writeTSSassESLintPackageJson = exports.writeTSSassPackageJson = exports.writeTSESLintPackageJson = exports.writeTSMongoPackageJson = exports.writeTSPackageJson = exports.writeJSSassESLintMongoPackageJson = exports.writeJSESLintMongoPackageJson = exports.writeJSSassMongoPackageJson = exports.writeJSSassESLintPackageJson = exports.writeJSSassPackageJson = exports.writeJSESLintPackageJson = exports.writeJSMongoPackageJson = exports.writeJSPackageJson = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const files_1 = require("../utils/files");
const constants_1 = require("../utils/constants");
const ts_1 = require("./ts");
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeJSPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getJSPackageJson)(name));
};
exports.writeJSPackageJson = writeJSPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeJSMongoPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getJSMongoPackageJson)(name));
};
exports.writeJSMongoPackageJson = writeJSMongoPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeJSESLintPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getJSESLintPackageJson)(name));
};
exports.writeJSESLintPackageJson = writeJSESLintPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeJSSassPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getJSSassPackageJson)(name));
};
exports.writeJSSassPackageJson = writeJSSassPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeJSSassESLintPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getJSSassESLintPackageJson)(name));
};
exports.writeJSSassESLintPackageJson = writeJSSassESLintPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeJSSassMongoPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getJSSassMongoPackageJson)(name));
};
exports.writeJSSassMongoPackageJson = writeJSSassMongoPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeJSESLintMongoPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getJSESLintMongoPackageJson)(name));
};
exports.writeJSESLintMongoPackageJson = writeJSESLintMongoPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeJSSassESLintMongoPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getJSSassESLintMongoPackageJson)(name));
};
exports.writeJSSassESLintMongoPackageJson = writeJSSassESLintMongoPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeTSPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getTSPackageJson)(name));
};
exports.writeTSPackageJson = writeTSPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeTSMongoPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getTSMongoPackageJson)(name));
};
exports.writeTSMongoPackageJson = writeTSMongoPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeTSESLintPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getTSESLintPackageJson)(name));
};
exports.writeTSESLintPackageJson = writeTSESLintPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeTSSassPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getTSSassPackageJson)(name));
};
exports.writeTSSassPackageJson = writeTSSassPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeTSSassESLintPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getTSSassESLintPackageJson)(name));
};
exports.writeTSSassESLintPackageJson = writeTSSassESLintPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeTSSassMongoPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getTSSassMongoPackageJson)(name));
};
exports.writeTSSassMongoPackageJson = writeTSSassMongoPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeTSESLintMongoPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getTSESLintMongoPackageJson)(name));
};
exports.writeTSESLintMongoPackageJson = writeTSESLintMongoPackageJson;
/**
 * Uses fs to write the package.json file to the directory specified.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const writeTSSassESLintMongoPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/package.json"), (0, files_1.getTSSassESLintMongoPackageJson)(name));
};
exports.writeTSSassESLintMongoPackageJson = writeTSSassESLintMongoPackageJson;
/**
 * Uses fs to create all the directories common to all Next.js apps.
 * @param basePath The base path to write out the directories to.
 * @param typeScript Whether or not TypeScript is being used.
 */
const mkCommonDirs = async (basePath, typeScript) => {
    if (typeScript)
        fs_1.default.mkdirSync(path_1.default.join(basePath, "/interfaces"), {
            recursive: true,
        });
    fs_1.default.mkdirSync(path_1.default.join(basePath, "/components"), {
        recursive: true,
    });
    fs_1.default.mkdirSync(path_1.default.join(basePath, "/public"), {
        recursive: true,
    });
    fs_1.default.mkdirSync(path_1.default.join(basePath, "/utils"), {
        recursive: true,
    });
    fs_1.default.mkdirSync(path_1.default.join(basePath, "/pages/api/post"), {
        recursive: true,
    });
};
/**
 * Uses fs to write the files that are common to all Next.js apps.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 */
const writeCommonFiles = async (name, basePath, options) => {
    mkCommonDirs(basePath, options.typeScript);
    if (options.typeScript)
        (0, ts_1.writeInterfaces)(basePath);
    fs_1.default.writeFileSync(path_1.default.join(basePath, `/components/Meta.${options.typeScript ? "tsx" : "jsx"}`), (0, files_1.getMeta)(name, options.typeScript));
    fs_1.default.writeFileSync(path_1.default.join(basePath, `/components/Wrapper.${options.typeScript ? "tsx" : "jsx"}`), options.typeScript ? constants_1.WRAPPER_TS : constants_1.WRAPPER);
    fs_1.default.writeFileSync(path_1.default.join(basePath, `/pages/api/post/index.${options.typeScript ? "ts" : "js"}`), options.typeScript ? constants_1.API_POST_TS : constants_1.API_POST);
    fs_1.default.writeFileSync(path_1.default.join(basePath, `/pages/_app.${options.typeScript ? "tsx" : "jsx"}`), options.sass
        ? options.typeScript
            ? constants_1.APP_SASS_TS
            : constants_1.APP_SASS
        : options.typeScript
            ? constants_1.APP_TS
            : constants_1.APP);
    fs_1.default.writeFileSync(path_1.default.join(basePath, `/pages/index.${options.typeScript ? "tsx" : "jsx"}`), (0, files_1.getIndex)(name, options.typeScript));
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/public/manifest.json"), (0, files_1.getManifest)(name));
    fs_1.default.writeFileSync(path_1.default.join(basePath, `/utils/index.${options.typeScript ? "ts" : "js"}`), constants_1.UTILS_INDEX);
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/.gitignore"), constants_1.GITIGNORE);
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/README.MD"), (0, files_1.getReadme)(name));
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/vercel.json"), constants_1.VERCEL_JSON);
};
exports.writeCommonFiles = writeCommonFiles;
