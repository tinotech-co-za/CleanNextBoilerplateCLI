"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const commander_1 = require("commander");
const path_1 = __importDefault(require("path"));
const common_1 = require("./writers/common");
const mongodb_1 = require("./writers/mongodb");
const eslint_1 = require("./writers/eslint");
const sass_1 = require("./writers/sass");
const run = async (name, basePath) => {
    const answers = await inquirer_1.default.prompt([
        {
            type: "confirm",
            name: "typescript",
            message: "Do you want to use TypeScript in your project?",
            default: true,
        },
        {
            type: "confirm",
            name: "sass",
            message: "Do you want to use Sass in your project?",
            default: true,
        },
        {
            type: "confirm",
            name: "eslint",
            message: "Do you want to use ESLint in your project?",
            default: true,
        },
        {
            type: "confirm",
            name: "mongodb",
            message: "Do you want to use MongoDB in your project?",
            default: true,
        },
    ]);
    if (answers.typescript && answers.sass && answers.eslint && answers.mongodb) {
        return console.log("1. typescript, sass, eslint, mongodb");
    }
    if (answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        answers.mongodb) {
        return console.log("2. typescript, eslint, mongodb");
    }
    if (answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        answers.mongodb) {
        return console.log("3. typescript, sass, mongodb");
    }
    if (answers.typescript &&
        answers.sass &&
        answers.eslint &&
        !answers.mongodb) {
        return console.log("4. typescript, sass, eslint");
    }
    if (answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        !answers.mongodb) {
        return console.log("5. typescript, sass");
    }
    if (answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        !answers.mongodb) {
        await (0, common_1.writeCommonFiles)(name, basePath, true, false);
        await (0, common_1.writeTSESLintPackageJson)(name, basePath);
        await (0, eslint_1.writeESLint)(basePath);
        return console.log("6. typescript, eslint");
    }
    if (answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        answers.mongodb) {
        await (0, common_1.writeCommonFiles)(name, basePath, true, false);
        await (0, common_1.writeTSMongoPackageJson)(name, basePath);
        await (0, mongodb_1.writeMongo)(basePath, true);
        return console.log("7. typescript, mongodb");
    }
    if (answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        !answers.mongodb) {
        await (0, common_1.writeCommonFiles)(name, basePath, true, false);
        await (0, common_1.writeTSPackageJson)(name, basePath);
        return console.log("8. typescript");
    }
    if (!answers.typescript &&
        answers.sass &&
        answers.eslint &&
        answers.mongodb) {
        await (0, common_1.writeCommonFiles)(name, basePath, false, true);
        await (0, common_1.writeJSSassESLintMongoPackageJson)(name, basePath);
        await (0, mongodb_1.writeMongo)(basePath, false);
        await (0, eslint_1.writeESLint)(basePath);
        await (0, sass_1.writeSass)(basePath);
        return console.log("9. javascript, sass, eslint, mongodb");
    }
    if (!answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        answers.mongodb) {
        await (0, common_1.writeCommonFiles)(name, basePath, false, false);
        await (0, common_1.writeJSESLintMongoPackageJson)(name, basePath);
        await (0, mongodb_1.writeMongo)(basePath, false);
        await (0, eslint_1.writeESLint)(basePath);
        return console.log("10. javascript, eslint, mongodb");
    }
    if (!answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        answers.mongodb) {
        await (0, common_1.writeCommonFiles)(name, basePath, false, true);
        await (0, common_1.writeJSSassMongoPackageJson)(name, basePath);
        await (0, sass_1.writeSass)(basePath);
        await (0, mongodb_1.writeMongo)(basePath, false);
        return console.log("11. javascript, sass, mongodb");
    }
    if (!answers.typescript &&
        answers.sass &&
        answers.eslint &&
        !answers.mongodb) {
        await (0, common_1.writeCommonFiles)(name, basePath, false, true);
        await (0, common_1.writeJSSassESLintPackageJson)(name, basePath);
        await (0, sass_1.writeSass)(basePath);
        await (0, eslint_1.writeESLint)(basePath);
        return console.log("12. javascript, sass, eslint");
    }
    if (!answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        !answers.mongodb) {
        await (0, common_1.writeCommonFiles)(name, basePath, false, true);
        await (0, common_1.writeJSSassPackageJson)(name, basePath);
        await (0, sass_1.writeSass)(basePath);
        return console.log("13. javascript, sass");
    }
    if (!answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        !answers.mongodb) {
        await (0, common_1.writeCommonFiles)(name, basePath, false, false);
        await (0, common_1.writeJSESLintPackageJson)(name, basePath);
        await (0, eslint_1.writeESLint)(basePath);
        return console.log("14. javascript, eslint");
    }
    if (!answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        answers.mongodb) {
        await (0, common_1.writeCommonFiles)(name, basePath, false, false);
        await (0, common_1.writeJSMongoPackageJson)(name, basePath);
        await (0, mongodb_1.writeMongo)(basePath, false);
        return console.log("15. javascript, mongodb");
    }
    if (!answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        !answers.mongodb) {
        await (0, common_1.writeCommonFiles)(name, basePath, false, false);
        await (0, common_1.writeJSPackageJson)(name, basePath);
        return console.log("16. javascript");
    }
    console.log(answers);
};
commander_1.program.version("1.0.0").description("Clean Next.js Boilerplate CLI");
commander_1.program
    .argument("[basepath]", " the base path to generate the project at", "./")
    .option("-y, --yes", "answer yes to all the prompts")
    .action(async (basepath, options) => {
    const obj = { basePath: basepath, yes: options.yes };
    console.log(obj);
    const answers = await inquirer_1.default.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your project's name?",
            default: path_1.default.basename(__dirname),
        },
    ]);
    console.log(answers.name);
    if (options.yes) {
        console.log("1. typescript, sass, eslint, mongodb");
    }
    else {
        run(answers.name, basepath);
    }
});
commander_1.program.parse();
