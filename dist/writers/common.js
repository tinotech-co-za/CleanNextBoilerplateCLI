"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCommonFiles = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const files_1 = require("../utils/files");
const constants_1 = require("../utils/constants");
const writeCommonFiles = async (name, basePath, typeScript) => {
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
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, `/components/Meta.${typeScript ? "tsx" : "jsx"}`), (0, files_1.getMeta)(name));
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, `/components/Wrapper.${typeScript ? "tsx" : "jsx"}`), constants_1.WRAPPER);
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, `/pages/api/post/index.${typeScript ? "ts" : "js"}`), constants_1.API_POST);
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, `/pages/_app.${typeScript ? "tsx" : "jsx"}`), constants_1.APP_TSX);
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, `/pages/index.${typeScript ? "tsx" : "jsx"}`), (0, files_1.getIndex)(name));
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/public/manifest.json"), (0, files_1.getManifest)(name));
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, `/utils/index.${typeScript ? "ts" : "js"}`), constants_1.UTILS_INDEX);
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/.gitignore"), constants_1.GITIGNORE);
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/README.MD"), (0, files_1.getReadme)(name));
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/vercel.json"), constants_1.VERCEL_JSON);
};
exports.writeCommonFiles = writeCommonFiles;
