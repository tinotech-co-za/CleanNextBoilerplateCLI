"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeJavaScript = exports.writeJavaScriptMongoDB = exports.writeJavaScriptESLint = exports.writeJavaScriptSass = exports.writeJavaScriptSassESLint = exports.writeJavaScriptSassMongoDB = exports.writeJavaScriptESLintMongoDB = exports.writeJavaScriptSassESLintMongoDB = exports.writeTypeScript = exports.writeTypeScriptMongoDB = exports.writeTypeScriptESLint = exports.writeTypeScriptSass = exports.writeTypeScriptSassESLint = exports.writeTypeScriptSassMongoDB = exports.writeTypeScriptESLintMongoDB = exports.writeTypeScriptSassESLintMongoDB = void 0;
const common_1 = require("../writers/common");
const mongodb_1 = require("../writers/mongodb");
const eslint_1 = require("../writers/eslint");
const sass_1 = require("../writers/sass");
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptSassESLintMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSSassESLintMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, options.typeScript);
    await (0, sass_1.writeSass)(basePath);
    await (0, eslint_1.writeESLint)(basePath);
    console.log("\n- Generated Next.js app with TypeScript, Sass, ESLint and MongoDB");
};
exports.writeTypeScriptSassESLintMongoDB = writeTypeScriptSassESLintMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptESLintMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSESLintMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, true);
    await (0, eslint_1.writeESLint)(basePath);
    console.log("\n- Generated Next.js app with TypeScript, ESLint and MongoDB");
};
exports.writeTypeScriptESLintMongoDB = writeTypeScriptESLintMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptSassMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSSassMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, true);
    await (0, sass_1.writeSass)(basePath);
    console.log("\n- Generated Next.js app with TypeScript, Sass and MongoDB");
};
exports.writeTypeScriptSassMongoDB = writeTypeScriptSassMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptSassESLint = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSSassESLintPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    await (0, eslint_1.writeESLint)(basePath);
    console.log("\n- Generated Next.js app with TypeScript, Sass and ESLint");
};
exports.writeTypeScriptSassESLint = writeTypeScriptSassESLint;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript and Sass.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptSass = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSSassPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    console.log("\n- Generated Next.js app with TypeScript and Sass");
};
exports.writeTypeScriptSass = writeTypeScriptSass;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptESLint = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSESLintPackageJson)(name, basePath);
    await (0, eslint_1.writeESLint)(basePath);
    console.log("\n- Generated Next.js app with TypeScript and ESLint");
};
exports.writeTypeScriptESLint = writeTypeScriptESLint;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, true);
    console.log("\n- Generated Next.js app with TypeScript and MongoDB");
};
exports.writeTypeScriptMongoDB = writeTypeScriptMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScript = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSPackageJson)(name, basePath);
    console.log("\n- Generated Next.js app with TypeScript");
};
exports.writeTypeScript = writeTypeScript;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptSassESLintMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSSassESLintMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, false);
    await (0, eslint_1.writeESLint)(basePath);
    await (0, sass_1.writeSass)(basePath);
    console.log("\n- Generated Next.js app with JavaScript, Sass, ESLint and MongoDB");
};
exports.writeJavaScriptSassESLintMongoDB = writeJavaScriptSassESLintMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptESLintMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSESLintMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, false);
    await (0, eslint_1.writeESLint)(basePath);
    console.log("\n- Generated Next.js app with JavaScript, ESLint and MongoDB");
};
exports.writeJavaScriptESLintMongoDB = writeJavaScriptESLintMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptSassMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSSassMongoPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    await (0, mongodb_1.writeMongo)(basePath, false);
    console.log("\n- Generated Next.js app with JavaScript, Sass and MongoDB");
};
exports.writeJavaScriptSassMongoDB = writeJavaScriptSassMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptSassESLint = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSSassESLintPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    await (0, eslint_1.writeESLint)(basePath);
    console.log("\n- Generated Next.js app with JavaScript, Sass and ESLint");
};
exports.writeJavaScriptSassESLint = writeJavaScriptSassESLint;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript and Sass.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptSass = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSSassPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    console.log("\n- Generated Next.js app with JavaScript and Sass");
};
exports.writeJavaScriptSass = writeJavaScriptSass;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptESLint = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSESLintPackageJson)(name, basePath);
    await (0, eslint_1.writeESLint)(basePath);
    console.log("\n- Generated Next.js app with JavaScript and ESLint");
};
exports.writeJavaScriptESLint = writeJavaScriptESLint;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, false);
    console.log("\n- Generated Next.js app with JavaScript and MongoDB");
};
exports.writeJavaScriptMongoDB = writeJavaScriptMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
} where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScript = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSPackageJson)(name, basePath);
    console.log("\n- Generated Next.js app with JavaScript");
};
exports.writeJavaScript = writeJavaScript;
