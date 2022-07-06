"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeTSConfig = exports.writeInterfaces = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../utils/constants");
/**
 * Uses fs to write the interfaces file to the directory specified.
 * @param basePath The base path to write out the files to.
 * @param context Whether this project uses the Context API or not.
 */
const writeInterfaces = async (basePath, context) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/interfaces/index.ts"), context ? constants_1.INTERFACES_CONTEXT : constants_1.INTERFACES);
};
exports.writeInterfaces = writeInterfaces;
/**
 * Uses fs to write a TSConfig file to the directory specified.
 * @param basePath The base path to write out the files to.
 */
const writeTSConfig = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "tsconfig.json"), constants_1.TSCONFIG);
};
exports.writeTSConfig = writeTSConfig;
