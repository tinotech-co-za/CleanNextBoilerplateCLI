"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeInterfaces = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../utils/constants");
/**
 * Uses fs to write the interfaces file to the directory specified.
 * @param basePath The base path to write out the files to.
 */
const writeInterfaces = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(basePath, "/interfaces/index.ts"), constants_1.INTERFACES);
};
exports.writeInterfaces = writeInterfaces;
