"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCommonFiles = exports.writeTSSassPackageJson = exports.writeTSESLintPackageJson = exports.writeTSMongoPackageJson = exports.writeTSPackageJson = exports.writeJSSassESLintMongoPackageJson = exports.writeJSESLintMongoPackageJson = exports.writeJSSassMongoPackageJson = exports.writeJSSassESLintPackageJson = exports.writeJSSassPackageJson = exports.writeJSESLintPackageJson = exports.writeJSMongoPackageJson = exports.writeJSPackageJson = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const files_1 = require("../utils/files");
const constants_1 = require("../utils/constants");
const writeJSPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/package.json"), (0, files_1.getJSPackageJson)(name));
};
exports.writeJSPackageJson = writeJSPackageJson;
const writeJSMongoPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/package.json"), (0, files_1.getJSMongoPackageJson)(name));
};
exports.writeJSMongoPackageJson = writeJSMongoPackageJson;
const writeJSESLintPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/package.json"), (0, files_1.getJSESLintPackageJson)(name));
};
exports.writeJSESLintPackageJson = writeJSESLintPackageJson;
const writeJSSassPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/package.json"), (0, files_1.getJSSassPackageJson)(name));
};
exports.writeJSSassPackageJson = writeJSSassPackageJson;
const writeJSSassESLintPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/package.json"), (0, files_1.getJSSassESLintPackageJson)(name));
};
exports.writeJSSassESLintPackageJson = writeJSSassESLintPackageJson;
const writeJSSassMongoPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/package.json"), (0, files_1.getJSSassMongoPackageJson)(name));
};
exports.writeJSSassMongoPackageJson = writeJSSassMongoPackageJson;
const writeJSESLintMongoPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/package.json"), (0, files_1.getJSESLintMongoPackageJson)(name));
};
exports.writeJSESLintMongoPackageJson = writeJSESLintMongoPackageJson;
const writeJSSassESLintMongoPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/package.json"), (0, files_1.getJSSassESLintMongoPackageJson)(name));
};
exports.writeJSSassESLintMongoPackageJson = writeJSSassESLintMongoPackageJson;
const writeTSPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/package.json"), (0, files_1.getTSPackageJson)(name));
};
exports.writeTSPackageJson = writeTSPackageJson;
const writeTSMongoPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/package.json"), (0, files_1.getTSMongoPackageJson)(name));
};
exports.writeTSMongoPackageJson = writeTSMongoPackageJson;
const writeTSESLintPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/package.json"), (0, files_1.getTSESLintPackageJson)(name));
};
exports.writeTSESLintPackageJson = writeTSESLintPackageJson;
const writeTSSassPackageJson = async (name, basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/package.json"), (0, files_1.getTSSassPackageJson)(name));
};
exports.writeTSSassPackageJson = writeTSSassPackageJson;
const writeCommonFiles = async (name, basePath, typeScript, sass) => {
    fs_1.default.mkdirSync(path_1.default.join(__dirname, basePath, "/components"), {
        recursive: true,
    });
    fs_1.default.mkdirSync(path_1.default.join(__dirname, basePath, "/public"), {
        recursive: true,
    });
    fs_1.default.mkdirSync(path_1.default.join(__dirname, basePath, "/utils"), {
        recursive: true,
    });
    fs_1.default.mkdirSync(path_1.default.join(__dirname, basePath, "/pages/api/post"), {
        recursive: true,
    });
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, `/components/Meta.${typeScript ? "tsx" : "jsx"}`), (0, files_1.getMeta)(name, typeScript));
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, `/components/Wrapper.${typeScript ? "tsx" : "jsx"}`), typeScript ? constants_1.WRAPPER_TS : constants_1.WRAPPER);
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, `/pages/api/post/index.${typeScript ? "ts" : "js"}`), typeScript ? constants_1.API_POST_TS : constants_1.API_POST);
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, `/pages/_app.${typeScript ? "tsx" : "jsx"}`), sass ? (typeScript ? constants_1.APP_SASS_TS : constants_1.APP_SASS) : typeScript ? constants_1.APP_TS : constants_1.APP);
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, `/pages/index.${typeScript ? "tsx" : "jsx"}`), (0, files_1.getIndex)(name, typeScript));
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/public/manifest.json"), (0, files_1.getManifest)(name));
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, `/utils/index.${typeScript ? "ts" : "js"}`), constants_1.UTILS_INDEX);
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/.gitignore"), constants_1.GITIGNORE);
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/README.MD"), (0, files_1.getReadme)(name));
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/vercel.json"), constants_1.VERCEL_JSON);
};
exports.writeCommonFiles = writeCommonFiles;
