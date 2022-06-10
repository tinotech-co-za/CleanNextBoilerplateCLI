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
            name: "TypeScript",
            message: "Do you want to use TypeScript in your project?",
            default: true,
        },
        {
            type: "confirm",
            name: "Sass",
            message: "Do you want to use Sass in your project?",
            default: true,
        },
        {
            type: "confirm",
            name: "ESLint",
            message: "Do you want to use ESLint in your project?",
            default: true,
        },
        {
            type: "confirm",
            name: "MongoDB",
            message: "Do you want to use MongoDB in your project?",
            default: true,
        },
    ]);
    console.log(answers);
};
run();
