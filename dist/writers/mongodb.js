"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeUtilsDB = exports.writeNextConfig = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../utils/constants");
const writeNextConfig = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/next.config.js"), constants_1.NEXT_CONFIG);
};
exports.writeNextConfig = writeNextConfig;
const writeUtilsDB = async (basePath, typeScript) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, `/utils/db.${typeScript ? "ts" : "js"}`), constants_1.NEXT_CONFIG);
};
exports.writeUtilsDB = writeUtilsDB;
