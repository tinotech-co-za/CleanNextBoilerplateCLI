"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const run = async () => {
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
        return console.log("16. javascript");
    }
    console.log(answers);
};
run();
