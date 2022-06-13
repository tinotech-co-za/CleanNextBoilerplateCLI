"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeMongo = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../utils/constants");
/**
 * Uses fs to write out a next.config.js file.
 * @param basePath The base path to write out the files to.
 */
const writeNextConfig = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/next.config.js"), constants_1.NEXT_CONFIG);
};
/**
 * Uses fs to write out a configuration file for using a MongoDB database.
 * @param basePath The base path to write out the files to.
 * @param typeScript Whether this project uses TypeScript or not.
 */
const writeUtilsDB = async (basePath, typeScript) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, `/utils/db.${typeScript ? "ts" : "js"}`), typeScript ? constants_1.UTILS_DB_TS : constants_1.UTILS_DB);
};
/**
 * Uses fs to write out all the files needed for using MongoDB in a Next.js app.
 * @param basePath The base path to write out the files to.
 * @param typeScript Whether this project uses TypeScript or not.
 */
const writeMongo = async (basePath, typeScript) => {
    await writeUtilsDB(basePath, typeScript);
    await writeNextConfig(basePath);
};
exports.writeMongo = writeMongo;
