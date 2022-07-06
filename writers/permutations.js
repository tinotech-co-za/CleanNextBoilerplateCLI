"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeJavaScript = exports.writeJavaScriptMongoDB = exports.writeJavaScriptESLint = exports.writeJavaScriptSass = exports.writeJavaScriptContext = exports.writeJavaScriptMongoDBContext = exports.writeJavaScriptESLintContext = exports.writeJavaScriptSassContext = exports.writeJavaScriptSassESLint = exports.writeJavaScriptSassMongoDB = exports.writeJavaScriptESLintMongoDB = exports.writeJavaScriptSassESLintMongoDB = exports.writeJavaScriptSassESLintContext = exports.writeJavaScriptSassMongoDBContext = exports.writeJavaScriptESLintMongoDBContext = exports.writeTypeScript = exports.writeTypeScriptContext = exports.writeTypeScriptMongoDB = exports.writeTypeScriptESLint = exports.writeTypeScriptSass = exports.writeTypeScriptMongoDBContext = exports.writeTypeScriptESLintContext = exports.writeTypeScriptSassContext = exports.writeTypeScriptSassESLint = exports.writeTypeScriptSassMongoDB = exports.writeTypeScriptESLintMongoDB = exports.writeTypeScriptSassESLintContext = exports.writeTypeScriptSassMongoDBContext = exports.writeTypeScriptESLintMongoDBContext = exports.writeTypeScriptSassESLintMongoDB = exports.writeTypeScriptSassESLintMongoDBContext = void 0;
const chalk_1 = __importDefault(require("chalk"));
const common_1 = require("../writers/common");
const mongodb_1 = require("../writers/mongodb");
const eslint_1 = require("../writers/eslint");
const sass_1 = require("../writers/sass");
const context_1 = require("./context");
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass, ESLint, Context and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptSassESLintMongoDBContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSSassESLintMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, options.typeScript);
    await (0, sass_1.writeSass)(basePath);
    await (0, eslint_1.writeESLint)(basePath);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript, Sass, ESLint, Context and MongoDB"));
};
exports.writeTypeScriptSassESLintMongoDBContext = writeTypeScriptSassESLintMongoDBContext;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptSassESLintMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSSassESLintMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, options.typeScript);
    await (0, sass_1.writeSass)(basePath);
    await (0, eslint_1.writeESLint)(basePath);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript, Sass, ESLint and MongoDB"));
};
exports.writeTypeScriptSassESLintMongoDB = writeTypeScriptSassESLintMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, ESLint, Context and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptESLintMongoDBContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSESLintMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, true);
    await (0, eslint_1.writeESLint)(basePath);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript, ESLint, Context and MongoDB"));
};
exports.writeTypeScriptESLintMongoDBContext = writeTypeScriptESLintMongoDBContext;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass, Context and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptSassMongoDBContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSSassMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, true);
    await (0, sass_1.writeSass)(basePath);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript, Sass, Context and MongoDB"));
};
exports.writeTypeScriptSassMongoDBContext = writeTypeScriptSassMongoDBContext;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass, Context and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptSassESLintContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSSassESLintPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    await (0, eslint_1.writeESLint)(basePath);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript, Sass, Context and ESLint"));
};
exports.writeTypeScriptSassESLintContext = writeTypeScriptSassESLintContext;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptESLintMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSESLintMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, true);
    await (0, eslint_1.writeESLint)(basePath);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript, ESLint and MongoDB"));
};
exports.writeTypeScriptESLintMongoDB = writeTypeScriptESLintMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptSassMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSSassMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, true);
    await (0, sass_1.writeSass)(basePath);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript, Sass and MongoDB"));
};
exports.writeTypeScriptSassMongoDB = writeTypeScriptSassMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Sass and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptSassESLint = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSSassESLintPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    await (0, eslint_1.writeESLint)(basePath);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript, Sass and ESLint"));
};
exports.writeTypeScriptSassESLint = writeTypeScriptSassESLint;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Context and Sass.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptSassContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSSassPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript, Context and Sass"));
};
exports.writeTypeScriptSassContext = writeTypeScriptSassContext;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Context and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptESLintContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSESLintPackageJson)(name, basePath);
    await (0, eslint_1.writeESLint)(basePath);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript, Context and ESLint"));
};
exports.writeTypeScriptESLintContext = writeTypeScriptESLintContext;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript, Context and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptMongoDBContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, true);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript, Context and MongoDB"));
};
exports.writeTypeScriptMongoDBContext = writeTypeScriptMongoDBContext;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript and Sass.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptSass = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSSassPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript and Sass"));
};
exports.writeTypeScriptSass = writeTypeScriptSass;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptESLint = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSESLintPackageJson)(name, basePath);
    await (0, eslint_1.writeESLint)(basePath);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript and ESLint"));
};
exports.writeTypeScriptESLint = writeTypeScriptESLint;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, true);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript and MongoDB"));
};
exports.writeTypeScriptMongoDB = writeTypeScriptMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript and Context.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScriptContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSPackageJson)(name, basePath);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript and Context"));
};
exports.writeTypeScriptContext = writeTypeScriptContext;
/**
 * Generates boilerplate for a Next.js project that uses TypeScript.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeTypeScript = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeTSPackageJson)(name, basePath);
    console.log(chalk_1.default.green("\n- Generated Next.js app with TypeScript"));
};
exports.writeTypeScript = writeTypeScript;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript, ESLint, Context and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptESLintMongoDBContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSESLintMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, false);
    await (0, eslint_1.writeESLint)(basePath);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript, ESLint, Context and MongoDB"));
};
exports.writeJavaScriptESLintMongoDBContext = writeJavaScriptESLintMongoDBContext;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass, Context and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptSassMongoDBContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSSassMongoPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    await (0, mongodb_1.writeMongo)(basePath, false);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript, Sass, Context and MongoDB"));
};
exports.writeJavaScriptSassMongoDBContext = writeJavaScriptSassMongoDBContext;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass, Context and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptSassESLintContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSSassESLintPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    await (0, eslint_1.writeESLint)(basePath);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript, Sass, Context and ESLint"));
};
exports.writeJavaScriptSassESLintContext = writeJavaScriptSassESLintContext;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptSassESLintMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSSassESLintMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, false);
    await (0, eslint_1.writeESLint)(basePath);
    await (0, sass_1.writeSass)(basePath);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript, Sass, ESLint and MongoDB"));
};
exports.writeJavaScriptSassESLintMongoDB = writeJavaScriptSassESLintMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript, ESLint and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptESLintMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSESLintMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, false);
    await (0, eslint_1.writeESLint)(basePath);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript, ESLint and MongoDB"));
};
exports.writeJavaScriptESLintMongoDB = writeJavaScriptESLintMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptSassMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSSassMongoPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    await (0, mongodb_1.writeMongo)(basePath, false);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript, Sass and MongoDB"));
};
exports.writeJavaScriptSassMongoDB = writeJavaScriptSassMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Sass and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptSassESLint = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSSassESLintPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    await (0, eslint_1.writeESLint)(basePath);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript, Sass and ESLint"));
};
exports.writeJavaScriptSassESLint = writeJavaScriptSassESLint;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Context and Sass.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptSassContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSSassPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript, Context and Sass"));
};
exports.writeJavaScriptSassContext = writeJavaScriptSassContext;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Context and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptESLintContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSESLintPackageJson)(name, basePath);
    await (0, eslint_1.writeESLint)(basePath);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript, Context and ESLint"));
};
exports.writeJavaScriptESLintContext = writeJavaScriptESLintContext;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript, Context and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptMongoDBContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, false);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript, Context and MongoDB"));
};
exports.writeJavaScriptMongoDBContext = writeJavaScriptMongoDBContext;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript and Context.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptContext = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSPackageJson)(name, basePath);
    await (0, context_1.writeContext)(basePath, options.typeScript);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript and Context"));
};
exports.writeJavaScriptContext = writeJavaScriptContext;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript and Sass.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptSass = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSSassPackageJson)(name, basePath);
    await (0, sass_1.writeSass)(basePath);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript and Sass"));
};
exports.writeJavaScriptSass = writeJavaScriptSass;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript and ESLint.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptESLint = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSESLintPackageJson)(name, basePath);
    await (0, eslint_1.writeESLint)(basePath);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript and ESLint"));
};
exports.writeJavaScriptESLint = writeJavaScriptESLint;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript and MongoDB.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScriptMongoDB = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSMongoPackageJson)(name, basePath);
    await (0, mongodb_1.writeMongo)(basePath, false);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript and MongoDB"));
};
exports.writeJavaScriptMongoDB = writeJavaScriptMongoDB;
/**
 * Generates boilerplate for a Next.js project that uses JavaScript.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 * @param options The options. Takes the form. {
    typeScript: boolean;
    sass: boolean;
    context: boolean;
} where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
 * @returns void.
 */
const writeJavaScript = async (name, basePath, options) => {
    await (0, common_1.writeCommonFiles)(name, basePath, options);
    await (0, common_1.writeJSPackageJson)(name, basePath);
    console.log(chalk_1.default.green("\n- Generated Next.js app with JavaScript"));
};
exports.writeJavaScript = writeJavaScript;
