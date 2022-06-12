"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const commander_1 = require("commander");
const path_1 = __importDefault(require("path"));
const permutations_1 = require("./writers/permutations");
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
        await (0, permutations_1.writeTypeScriptSassESLintMongoDB)(name, basePath, {
            typeScript: true,
            sass: true,
        });
    }
    if (answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        answers.mongodb) {
        await (0, permutations_1.writeTypeScriptESLintMongoDB)(name, basePath, {
            typeScript: true,
            sass: false,
        });
    }
    if (answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        answers.mongodb) {
        await (0, permutations_1.writeTypeScriptSassMongoDB)(name, basePath, {
            typeScript: true,
            sass: true,
        });
    }
    if (answers.typescript &&
        answers.sass &&
        answers.eslint &&
        !answers.mongodb) {
        await (0, permutations_1.writeTypeScriptSassESLint)(name, basePath, {
            typeScript: true,
            sass: true,
        });
    }
    if (answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        !answers.mongodb) {
        await (0, permutations_1.writeTypeScriptSass)(name, basePath, {
            typeScript: true,
            sass: true,
        });
    }
    if (answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        !answers.mongodb) {
        await (0, permutations_1.writeTypeScriptESLint)(name, basePath, {
            typeScript: true,
            sass: false,
        });
    }
    if (answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        answers.mongodb) {
        await (0, permutations_1.writeTypeScriptMongoDB)(name, basePath, {
            typeScript: true,
            sass: false,
        });
    }
    if (answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        !answers.mongodb) {
        await (0, permutations_1.writeTypeScript)(name, basePath, {
            typeScript: true,
            sass: false,
        });
    }
    if (!answers.typescript &&
        answers.sass &&
        answers.eslint &&
        answers.mongodb) {
        await (0, permutations_1.writeJavaScriptSassESLintMongoDB)(name, basePath, {
            typeScript: false,
            sass: true,
        });
    }
    if (!answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        answers.mongodb) {
        await (0, permutations_1.writeJavaScriptESLintMongoDB)(name, basePath, {
            typeScript: false,
            sass: false,
        });
    }
    if (!answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        answers.mongodb) {
        await (0, permutations_1.writeJavaScriptSassMongoDB)(name, basePath, {
            typeScript: false,
            sass: true,
        });
    }
    if (!answers.typescript &&
        answers.sass &&
        answers.eslint &&
        !answers.mongodb) {
        await (0, permutations_1.writeJavaScriptSassESLint)(name, basePath, {
            typeScript: false,
            sass: true,
        });
    }
    if (!answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        !answers.mongodb) {
        await (0, permutations_1.writeJavaScriptSass)(name, basePath, {
            typeScript: false,
            sass: true,
        });
    }
    if (!answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        !answers.mongodb) {
        await (0, permutations_1.writeJavaScriptESLint)(name, basePath, {
            typeScript: false,
            sass: false,
        });
    }
    if (!answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        answers.mongodb) {
        await (0, permutations_1.writeJavaScriptMongoDB)(name, basePath, {
            typeScript: false,
            sass: false,
        });
    }
    if (!answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        !answers.mongodb) {
        await (0, permutations_1.writeJavaScript)(name, basePath, {
            typeScript: false,
            sass: false,
        });
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
        return await (0, permutations_1.writeTypeScriptSassESLintMongoDB)(answers.name, basepath, {
            typeScript: true,
            sass: true,
        });
    }
    else {
        run(answers.name, basepath);
    }
});
commander_1.program.parse();
