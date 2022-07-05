"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeContext = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../utils/constants");
/**
 * Uses fs to write out all the directories necessary for using Context in a Next.js app.
 * @param basePath The base path to write out the files to.
 */
const makeContextDirs = async (basePath) => {
    fs_1.default.mkdirSync(path_1.default.join(basePath, "/context"), {
        recursive: true,
    });
};
/**
 * Uses fs to write out the reducer file for using the Context API.
 * @param basePath The base path to write out the files to.
 * @param typeScript Whether this project uses TypeScript or not.
 */
const writeReducer = async (basePath, typeScript) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, `/context/AppReducer.${typeScript ? "ts" : "js"}`), typeScript ? constants_1.APP_REDUCER_TS : constants_1.APP_REDUCER);
};
/**
 * Uses fs to write out the provider file for using the Context API.
 * @param basePath The base path to write out the files to.
 * @param typeScript Whether this project uses TypeScript or not.
 */
const writeProvider = async (basePath, typeScript) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, `/context/AppContext.${typeScript ? "tsx" : "jsx"}`), typeScript ? constants_1.APP_CONTEXT_TS : constants_1.APP_CONTEXT);
};
/**
 * Uses fs to write out all the files necessary for using Context in a Next.js app.
 * @param basePath The base path to write out the files to.
 * @param typeScript Whether this project uses TypeScript or not.
 */
const writeContext = async (basePath, typeScript) => {
    await makeContextDirs(basePath);
    await writeReducer(basePath, typeScript);
    await writeProvider(basePath, typeScript);
};
exports.writeContext = writeContext;
