#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
const commander_1 = require("commander");
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const packageJson = require("./package.json");
const permutations_1 = require("./writers/permutations");
/**
 * Run Inquirer to get options for what to include in the generated project.
 * @param name The name of the project.
 * @param basePath The base path to write out the files to.
 */
const run = async (name, basePath) => {
    const answers = await inquirer_1.default.prompt([
        {
            type: "confirm",
            name: "typescript",
            message: `Do you want to use ${chalk_1.default.blue.bold("TypeScript")} in your project?`,
            default: true,
        },
        {
            type: "confirm",
            name: "sass",
            message: `Do you want to use ${chalk_1.default.magenta.bold("Sass")} in your project?`,
            default: true,
        },
        {
            type: "confirm",
            name: "eslint",
            message: `Do you want to use ${chalk_1.default
                .hex("#6a0dad")
                .bold("ESLint")} in your project?`,
            default: true,
        },
        {
            type: "confirm",
            name: "mongodb",
            message: `Do you want to use ${chalk_1.default.green.bold("MongoDB")} in your project?`,
            default: true,
        },
        {
            type: "confirm",
            name: "context",
            message: `Do you want to use ${chalk_1.default.grey.bold("Context")} in your project?`,
            default: true,
        },
    ]);
    // Determine which permutation to use.
    if (answers.typescript &&
        answers.sass &&
        answers.eslint &&
        answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeTypeScriptSassESLintMongoDB)(name, basePath, {
            typeScript: true,
            sass: true,
            context: true,
        });
    }
    if (answers.typescript &&
        answers.sass &&
        answers.eslint &&
        answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeTypeScriptSassESLintMongoDB)(name, basePath, {
            typeScript: true,
            sass: true,
            context: false,
        });
    }
    if (answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeTypeScriptESLintMongoDB)(name, basePath, {
            typeScript: true,
            sass: false,
            context: false,
        });
    }
    if (answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeTypeScriptESLintMongoDBContext)(name, basePath, {
            typeScript: true,
            sass: false,
            context: true,
        });
    }
    if (answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeTypeScriptSassMongoDB)(name, basePath, {
            typeScript: true,
            sass: true,
            context: false,
        });
    }
    if (answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeTypeScriptSassMongoDBContext)(name, basePath, {
            typeScript: true,
            sass: true,
            context: true,
        });
    }
    if (answers.typescript &&
        answers.sass &&
        answers.eslint &&
        !answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeTypeScriptSassESLint)(name, basePath, {
            typeScript: true,
            sass: true,
            context: false,
        });
    }
    if (answers.typescript &&
        answers.sass &&
        answers.eslint &&
        !answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeTypeScriptSassESLintContext)(name, basePath, {
            typeScript: true,
            sass: true,
            context: true,
        });
    }
    if (answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        !answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeTypeScriptSass)(name, basePath, {
            typeScript: true,
            sass: true,
            context: false,
        });
    }
    if (answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        !answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeTypeScriptSassContext)(name, basePath, {
            typeScript: true,
            sass: true,
            context: true,
        });
    }
    if (answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        !answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeTypeScriptESLint)(name, basePath, {
            typeScript: true,
            sass: false,
            context: false,
        });
    }
    if (answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        !answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeTypeScriptESLintContext)(name, basePath, {
            typeScript: true,
            sass: false,
            context: true,
        });
    }
    if (answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeTypeScriptMongoDB)(name, basePath, {
            typeScript: true,
            sass: false,
            context: false,
        });
    }
    if (answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeTypeScriptMongoDBContext)(name, basePath, {
            typeScript: true,
            sass: false,
            context: true,
        });
    }
    if (answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        !answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeTypeScript)(name, basePath, {
            typeScript: true,
            sass: false,
            context: false,
        });
    }
    if (answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        !answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeTypeScriptContext)(name, basePath, {
            typeScript: true,
            sass: false,
            context: true,
        });
    }
    if (!answers.typescript &&
        answers.sass &&
        answers.eslint &&
        answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeJavaScriptSassESLintMongoDB)(name, basePath, {
            typeScript: false,
            sass: true,
            context: false,
        });
    }
    if (!answers.typescript &&
        answers.sass &&
        answers.eslint &&
        answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeJavaScriptSassESLintMongoDBContext)(name, basePath, {
            typeScript: false,
            sass: true,
            context: true,
        });
    }
    if (!answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeJavaScriptESLintMongoDB)(name, basePath, {
            typeScript: false,
            sass: false,
            context: false,
        });
    }
    if (!answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeJavaScriptESLintMongoDBContext)(name, basePath, {
            typeScript: false,
            sass: false,
            context: true,
        });
    }
    if (!answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeJavaScriptSassMongoDB)(name, basePath, {
            typeScript: false,
            sass: true,
            context: false,
        });
    }
    if (!answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeJavaScriptSassMongoDBContext)(name, basePath, {
            typeScript: false,
            sass: true,
            context: true,
        });
    }
    if (!answers.typescript &&
        answers.sass &&
        answers.eslint &&
        !answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeJavaScriptSassESLint)(name, basePath, {
            typeScript: false,
            sass: true,
            context: false,
        });
    }
    if (!answers.typescript &&
        answers.sass &&
        answers.eslint &&
        !answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeJavaScriptSassESLintContext)(name, basePath, {
            typeScript: false,
            sass: true,
            context: true,
        });
    }
    if (!answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        !answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeJavaScriptSass)(name, basePath, {
            typeScript: false,
            sass: true,
            context: false,
        });
    }
    if (!answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        !answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeJavaScriptSassContext)(name, basePath, {
            typeScript: false,
            sass: true,
            context: true,
        });
    }
    if (!answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        !answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeJavaScriptESLint)(name, basePath, {
            typeScript: false,
            sass: false,
            context: false,
        });
    }
    if (!answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        !answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeJavaScriptESLintContext)(name, basePath, {
            typeScript: false,
            sass: false,
            context: true,
        });
    }
    if (!answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeJavaScriptMongoDB)(name, basePath, {
            typeScript: false,
            sass: false,
            context: false,
        });
    }
    if (!answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeJavaScriptMongoDBContext)(name, basePath, {
            typeScript: false,
            sass: false,
            context: true,
        });
    }
    if (!answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        !answers.mongodb &&
        !answers.context) {
        return await (0, permutations_1.writeJavaScript)(name, basePath, {
            typeScript: false,
            sass: false,
            context: false,
        });
    }
    if (!answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        !answers.mongodb &&
        answers.context) {
        return await (0, permutations_1.writeJavaScriptContext)(name, basePath, {
            typeScript: false,
            sass: false,
            context: true,
        });
    }
};
// Setup commander program.
commander_1.program
    .version(packageJson.version)
    .description("Clean Next.js Boilerplate CLI");
commander_1.program
    .argument("[basepath]", " the base path to generate the project at", "./")
    .option("-y, --yes", "answer yes to all the prompts")
    .action(async (basepath, options) => {
    if (!fs_1.default.existsSync(basepath))
        fs_1.default.mkdirSync(basepath);
    process.chdir(basepath);
    const answers = await inquirer_1.default.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your project's name?",
            default: path_1.default.basename(process.cwd()),
        },
    ]);
    // If yes, skip Inquirer questions and generate boilerplate with all the options. Else run Inquirer questions.
    if (options.yes) {
        await (0, permutations_1.writeTypeScriptSassESLintMongoDBContext)(answers.name, `./`, {
            typeScript: true,
            sass: true,
            context: true,
        });
    }
    else {
        await run(answers.name, `./`);
    }
    console.log(chalk_1.default.blue("- Generating Git project."));
    (0, child_process_1.exec)("git init", (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(chalk_1.default.green(`- ${stdout}`));
    });
});
// Parse program setup.
commander_1.program.parse();
