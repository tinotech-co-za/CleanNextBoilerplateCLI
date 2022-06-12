"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const commander_1 = require("commander");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const files_1 = require("./utils/files");
const constants_1 = require("./utils/constants");
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
        return console.log("6. typescript, eslint");
    }
    if (answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        answers.mongodb) {
        return console.log("7. typescript, mongodb");
    }
    if (answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        !answers.mongodb) {
        return console.log("8. typescript");
    }
    if (!answers.typescript &&
        answers.sass &&
        answers.eslint &&
        answers.mongodb) {
        return console.log("9. javascript, sass, eslint, mongodb");
    }
    if (!answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        answers.mongodb) {
        return console.log("10. javascript, eslint, mongodb");
    }
    if (!answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        answers.mongodb) {
        return console.log("11. javascript, sass, mongodb");
    }
    if (!answers.typescript &&
        answers.sass &&
        answers.eslint &&
        !answers.mongodb) {
        return console.log("12. javascript, sass, eslint");
    }
    if (!answers.typescript &&
        answers.sass &&
        !answers.eslint &&
        !answers.mongodb) {
        return console.log("13. javascript, sass");
    }
    if (!answers.typescript &&
        !answers.sass &&
        answers.eslint &&
        !answers.mongodb) {
        return console.log("14. javascript, eslint");
    }
    if (!answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        answers.mongodb) {
        return console.log("15. javascript, mongodb");
    }
    if (!answers.typescript &&
        !answers.sass &&
        !answers.eslint &&
        !answers.mongodb) {
        await writeCommonFiles(name, basePath, false);
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
