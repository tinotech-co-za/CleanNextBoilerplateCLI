declare module "@tinotech/clean-next-boilerplate/index" {
	export {};
}
declare module "@tinotech/clean-next-boilerplate/interfaces/index" {
	/**
	 * The options for a permutation. Including whether or not the project uses TypeScript, Context API as well as whether or not to include Sass.
	 */
	export type Options = {
		typeScript: boolean;
		sass: boolean;
		context: boolean;
	};
}
declare module "@tinotech/clean-next-boilerplate/utils/constants" {
	/**
	 * Vercel config file that silences Vercel/GitHub notifications for building/pull requests.
	 * vercel.json
	 */
	export const VERCEL_JSON =
		'{\n    "github": {\n        "silent": true\n    }\n}\n';
	/**
	 * Standard .gitignore file.
	 * .gitignore
	 */
	export const GITIGNORE =
		"# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n# dependencies\n/node_modules\n/.pnp\n.pnp.js\n\n# testing\n/coverage\n\n# next.js\n/.next/\n/out/\n\n# production\n/build\n\n# misc\n.DS_Store\n*.pem\n\n# debug\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n# local env files\n.env.local\n.env.development.local\n.env.test.local\n.env.production.local\n\n# vercel\n.vercel\n";
	/**
	 * A utils file that contains a ternary for the base url of the project as well as a function to limit and elipsise strings.
	 * utils/index.js
	 */
	export const UTILS_INDEX =
		'export const BASE_URL =\n\tprocess.env.NODE_ENV === "production" ? "" : "http://localhost:3000";\n\n\t/**\n * Appends a limit to the end of text and substrings to the specified limit.\n * @param text The text to add an ellips to.\n * @param limit The point at which the text is cut off.\n * @returns A string cut off at the limit and with an ellips appended to the end.\n */\nexport const elipsise = (text, limit) =>\n\ttext.substring(0, limit - 7)+"...";\n';
	/**
	 * A utils file that contains a ternary for the base url of the project as well as a function to limit and elipsise strings.
	 * utils/index.ts
	 */
	export const UTILS_INDEX_TS =
		'export const BASE_URL =\n\tprocess.env.NODE_ENV === "production" ? "" : "http://localhost:3000";\n\n\t/**\n * Appends a limit to the end of text and substrings to the specified limit.\n * @param text The text to add an ellips to.\n * @param limit The point at which the text is cut off.\n * @returns A string cut off at the limit and with an ellips appended to the end.\n */\nexport const elipsise = (text: string, limit: number): string =>\n\ttext.substring(0, limit - 7)+"...";\n';
	/**
	 * A dummy API endpoint.
	 * pages/api/post/index.js
	 */
	export const API_POST =
		'const handler = (req, res) => {\n\tres.status(200).json({ message: "Hello there" });\n};\n\nexport default handler;\n';
	/**
	 * A dummy TypeScript API endpoint.
	 * pages/api/post/index.ts
	 */
	export const API_POST_TS =
		'import { NextApiRequest, NextApiResponse } from "next";\n\nconst handler = (req: NextApiRequest, res: NextApiResponse) => {\n\tres.status(200).json({ message: "Hello there" });\n};\n\nexport default handler;\n';
	/**
	 * Next.js app file.
	 * pages/_app.jsx
	 */
	export const APP =
		'import { useEffect } from "react";\n\nimport Wrapper from "../components/Wrapper";\n\nconst MyApp = ({ Component, pageProps }) => {\n\tuseEffect(() => {\n\t\tconst disableReactDevTools = () => {\n\t\t\tconst noop = () => undefined;\n\t\t\tconst DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n\t\t\tif (typeof DEV_TOOLS === "object") {\n\t\t\t\tfor (const [key, value] of Object.entries(DEV_TOOLS)) {\n\t\t\t\t\tDEV_TOOLS[key] = typeof value === "function" ? noop : null;\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tif (process.env.NODE_ENV === "production") disableReactDevTools();\n\t}, []);\n\n\treturn (\n\t\t<Wrapper>\n\t\t\t<Component {...pageProps} />\n\t\t</Wrapper>\n\t);\n};\n\nexport default MyApp;\n';
	/**
	 * Next.js TypeScript app file.
	 * pages/_app.tsx
	 */
	export const APP_TS =
		'import { AppProps } from "next/app";\nimport { useEffect } from "react";\n\nimport Wrapper from "../components/Wrapper";\n\nconst MyApp= ({ Component, pageProps }: AppProps) => {\n\tuseEffect(() => {\n\t\tconst disableReactDevTools = (): void => {\n\t\t\tconst noop = (): void => undefined;\n\t\t\tconst DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n\t\t\tif (typeof DEV_TOOLS === "object") {\n\t\t\t\tfor (const [key, value] of Object.entries(DEV_TOOLS)) {\n\t\t\t\t\tDEV_TOOLS[key] = typeof value === "function" ? noop : null;\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tif (process.env.NODE_ENV === "production") disableReactDevTools();\n\t}, []);\n\n\treturn (\n\t\t<Wrapper>\n\t\t\t<Component {...pageProps} />\n\t\t</Wrapper>\n\t);\n};\n\nexport default MyApp;\n';
	/**
	 * Next.js app file with Sass import.
	 * pages/_app.jsx
	 */
	export const APP_SASS =
		'import { useEffect } from "react";\n\nimport Wrapper from "../components/Wrapper";\nimport "../sass/App.scss";\n\nconst MyApp = ({ Component, pageProps }) => {\n\tuseEffect(() => {\n\t\tconst disableReactDevTools = () => {\n\t\t\tconst noop = () => undefined;\n\t\t\tconst DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n\t\t\tif (typeof DEV_TOOLS === "object") {\n\t\t\t\tfor (const [key, value] of Object.entries(DEV_TOOLS)) {\n\t\t\t\t\tDEV_TOOLS[key] = typeof value === "function" ? noop : null;\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tif (process.env.NODE_ENV === "production") disableReactDevTools();\n\t}, []);\n\n\treturn (\n\t\t<Wrapper>\n\t\t\t<Component {...pageProps} />\n\t\t</Wrapper>\n\t);\n};\n\nexport default MyApp;\n';
	/**
	 * Next.js app TypeScript file with Sass import.
	 * pages/_app.tsx
	 */
	export const APP_SASS_TS =
		'import { AppProps } from "next/app";\nimport { useEffect } from "react";\n\nimport Wrapper from "../components/Wrapper";\nimport "../sass/App.scss";\n\nconst MyApp= ({ Component, pageProps }: AppProps) => {\n\tuseEffect(() => {\n\t\tconst disableReactDevTools = (): void => {\n\t\t\tconst noop = (): void => undefined;\n\t\t\tconst DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n\t\t\tif (typeof DEV_TOOLS === "object") {\n\t\t\t\tfor (const [key, value] of Object.entries(DEV_TOOLS)) {\n\t\t\t\t\tDEV_TOOLS[key] = typeof value === "function" ? noop : null;\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tif (process.env.NODE_ENV === "production") disableReactDevTools();\n\t}, []);\n\treturn (\n\t\t<Wrapper>\n\t\t\t<Component {...pageProps} />\n\t\t</Wrapper>\n\t);\n};\n\nexport default MyApp;\n';
	/**
	 * Container file for wrapping components around app.
	 * components/Wrapper.jsx
	 */
	export const WRAPPER =
		'import Meta from "./Meta";\n\nconst Wrapper = ({ children }) => {\n\treturn (\n\t\t<>\n\t\t\t<Meta />\n\t\t\t{children}\n\t\t</>\n\t);\n};\n\nexport default Wrapper;\n';
	/**
	 * TypeScript Container file for wrapping components around app.
	 * components/Wrapper.tsx
	 */
	export const WRAPPER_TS =
		'import { WrapperProps } from "../interfaces";\n\nimport Meta from "./Meta";\n\nconst Wrapper: React.FC<WrapperProps> = ({ children }): JSX.Element => {\n\treturn (\n\t\t<>\n\t\t\t<Meta />\n\t\t\t{children}\n\t\t</>\n\t);\n};\n\nexport default Wrapper;\n';
	/**
	 * Next.js config file.
	 * next.config.js
	 */
	export const NEXT_CONFIG =
		"module.exports = {\n\twebpack5: true,\n\tenv: {\n\t\t// Ensure you've added this in an .env file.\n\t\tMONGO_URI: process.env.MONGO_URI,\n\t},\n};\n";
	/**
	 * ESLint config file.
	 * .eslintrc.json
	 */
	export const ESLINT_RC = '{\n    "extends": "next/core-web-vitals"\n  }\n  ';
	/**
	 * Sass breakpoints file containing a map for common screen breakpoints.
	 * sass/abstracts/_breakpoints.scss
	 */
	export const SASS_BREAKPOINTS =
		"$breakpoints: (\n    phone-xs: 400px,\n    phone: 500px,\n    tablet: 1024px,\n    desktop: 1300px,\n    desktop-xl: 1500px,\n);";
	/**
	 * Sass colours file with a variable for the white colour.
	 * sass/abstracts/_colours.scss
	 */
	export const SASS_COLOURS = "$white: white;\n";
	/**
	 * Sass fonts file containing common font sizes as well as an import for Google fonts Poppins font.
	 * sass/abstracts/_fonts.scss
	 */
	export const SASS_FONTS =
		'@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");\n\n$font-xxxl: 8rem;\n$font-xxl: 5rem;\n$font-xl: 4rem;\n$font-lg: 3rem;\n$font-md: 2rem;\n$font-sm: 1.5rem;\n$font-rg: 1rem;\n$font-xs: 0.7rem;\n';
	/**
	 * Sass mixins file containing a few mixins.
	 * sass/abstracts/_mixins.scss
	 */
	export const SASS_MIXINS =
		'@use "./breakpoints" as *;\n\n@mixin flexAllRow {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n@mixin flexAllCol {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n}\n\n@mixin mq($key) {\n\t$size: map-get($breakpoints, $key);\n  \n\t@media only screen and (max-width: $size) {\n\t  @content;\n\t}\n}\n';
	/**
	 * Sass index file that forwards all abstracts.
	 * sass/abstracts/_index.scss
	 */
	export const SASS_INDEX =
		'@forward "../abstracts/colours";\n@forward "../abstracts/fonts";\n@forward "../abstracts/mixins";\n';
	/**
	 * Sass base file containing a reset.
	 * sass/components/_base.scss
	 */
	export const SASS_BASE =
		'@use "../abstracts/" as *;\n\n*,\n*::before,\n*::after {\n\tfont-family: "Poppins", sans-serif;\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\toverflow-x: hidden;\n}\n';
	/**
	 * Sass app file for using components.
	 * sass/App.scss
	 */
	export const SASS_APP = '@use "./components/base";\n';
	/**
	 * Configuration for using a MongoDB database.
	 * utils/db.js
	 */
	export const UTILS_DB =
		'import mongoose from "mongoose";\n\nconst MONGO_URI = process.env.MONGO_URI;\n\nif (!MONGO_URI) {\n\tthrow new Error("An error occured please refresh or contact the developer.");\n}\n\nlet cached = { conn: null, promise: null };\n\nif (!cached) {\n\tcached = { conn: null, promise: null };\n}\n\n/**\n * Connect to the database.\n * @returns A mongoose object.\n */\nconst dbConnect = async () => {\n\tif (cached.conn) {\n\t\treturn cached.conn;\n\t}\n\n\tif (!cached.promise) {\n\t\tconst opts = {\n\t\t\tuseNewUrlParser: true,\n\t\t\tuseUnifiedTopology: true,\n\t\t\tbufferCommands: false,\n\t\t};\n\n\t\tcached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {\n\t\t\treturn mongoose;\n\t\t});\n\t}\n\tcached.conn = await cached.promise;\n\treturn cached.conn;\n};\n\nexport default dbConnect;\n';
	/**
	 * TypeScript Configuration for using a MongoDB database.
	 * utils/db.ts
	 */
	export const UTILS_DB_TS =
		'import mongoose from "mongoose";\n\nconst MONGO_URI = process.env.MONGO_URI;\n\nif (!MONGO_URI) {\n\tthrow new Error("An error occured please refresh or contact the developer.");\n}\n\nlet cached: {\n\tconn: null | typeof mongoose;\n\tpromise: null | Promise<typeof mongoose>;\n} = { conn: null, promise: null };\n\nif (!cached) {\n\tcached = { conn: null, promise: null };\n}\n\n/**\n * Connect to the database.\n * @returns A mongoose object.\n */\nconst dbConnect= async (): Promise<typeof mongoose> => {\n\tif (cached.conn) {\n\t\treturn cached.conn;\n\t}\n\n\tif (!cached.promise) {\n\t\tconst opts = {\n\t\t\tuseNewUrlParser: true,\n\t\t\tuseUnifiedTopology: true,\n\t\t\tbufferCommands: false,\n\t\t};\n\n\t\tcached.promise = mongoose\n\t\t\t.connect(MONGO_URI as string, opts)\n\t\t\t.then((mongoose) => {\n\t\t\t\treturn mongoose;\n\t\t\t});\n\t}\n\tcached.conn = await cached.promise;\n\treturn cached.conn;\n};\n\nexport default dbConnect;\n';
	/**
	 * Interfaces to be used in a TypeScript app.
	 * interfaces/index.ts
	 */
	export const INTERFACES =
		"export interface WrapperProps {\n\tchildren: JSX.Element | JSX.Element[];\n}\n\nexport interface MetaProps {\n\ttitle?: string;\n\tdescription?: string;\n\tkeywords?: string;\n\turl?: string;\n\timage?: string;\n}";
	/**
	 * TypeScript config.
	 * tsconfig.json
	 */
	export const TSCONFIG =
		'{\n\t"compilerOptions": {\n\t  "target": "es5",\n\t  "lib": [\n\t\t"dom",\n\t\t"dom.iterable",\n\t\t"esnext"\n\t  ],\n\t  "allowJs": true,\n\t  "skipLibCheck": true,\n\t  "strict": true,\n\t  "forceConsistentCasingInFileNames": true,\n\t  "noEmit": true,\n\t  "esModuleInterop": true,\n\t  "module": "esnext",\n\t  "moduleResolution": "node",\n\t  "resolveJsonModule": true,\n\t  "isolatedModules": true,\n\t  "jsx": "preserve",\n\t  "incremental": true\n\t},\n\t"include": [\n\t  "next-env.d.ts",\n\t  "**/*.ts",\n\t  "**/*.tsx"\n\t],\n\t"exclude": [\n\t  "node_modules"\n\t]\n  }\n  ';
	/**
	 * Reducer for including JavaScript Context API.
	 * context/AppReducer.js
	 */
	export const APP_REDUCER =
		"const Reducer = (state, action) => {\n\tswitch (action.type) {\n\t}\n};";
	/**
	 * Context provider for including JavaScript Context API.
	 * context/AppContext.jsx
	 */
	export const APP_CONTEXT =
		'import { createContext, useReducer } from "react";\n\nimport AppReducer from "./AppReducer";\n\nconst initialState = {};\n\nexport const AppContext = createContext(initialState);\n\nexport const AppProvider = ({ children }) => {\n\tconst [state, dispatch] = useReducer(AppReducer, initialState);\n\n\treturn <AppContext.Provider value={{}}>{children}</AppContext.Provider>;\n};';
	/**
	 * Reducer for including TypeScript Context API.
	 * context/AppReducer.ts
	 */
	export const APP_REDUCER_TS =
		'import { State, Actions } from "../interfaces";\n\nconst Reducer = (state: State, action: Actions): State => {\n\tswitch (action.type) {\n\t\tcase "":\n\t\t\treturn {\n\t\t\t\t...state,\n\t\t\t};\n\t}\n};\n\nexport default Reducer;';
	/**
	 * Context provider for including TypeScript Context API.
	 * context/AppContext.tsx
	 */
	export const APP_CONTEXT_TS =
		'import { createContext, useReducer } from "react";\n\nimport { AppProviderProps, ContextProps } from "../interfaces";\nimport AppReducer from "./AppReducer";\n\nconst initialState: ContextProps = {};\n\nexport const AppContext = createContext(initialState);\n\nexport const AppProvider = ({ children }: AppProviderProps): JSX.Element => {\n\tconst [state, dispatch] = useReducer(AppReducer, initialState);\n\n\treturn <AppContext.Provider value={{}}>{children}</AppContext.Provider>;\n};';
	/**
	 * Interfaces to be used in a TypeScript app with Context support.
	 * interfaces/index.ts
	 */
	export const INTERFACES_CONTEXT =
		'export interface WrapperProps {\n\tchildren: JSX.Element | JSX.Element[];\n}\n\nexport interface MetaProps {\n\ttitle?: string;\n\tdescription?: string;\n\tkeywords?: string;\n\turl?: string;\n\timage?: string;\n}\n\nexport interface ContextProps {}\n\nexport interface AppProviderProps {\n\tchildren: JSX.Element[] | JSX.Element;\n}\n\nexport type State = {};\n\nexport type Actions = {\n\ttype: "";\n};';
	/**
	 * Container file for wrapping components around app with support for Context.
	 * components/Wrapper.jsx
	 */
	export const WRAPPER_CONTEXT =
		'import { AppProvider } from "../context/AppContext";\nimport Meta from "./Meta";\n\nconst Wrapper = ({ children }) => {\n\treturn (\n\t\t<AppProvider>\n\t\t\t<>\n\t\t\t\t<Meta />\n\t\t\t\t{children}\n\t\t\t</>\n\t\t</AppProvider>\n\t);\n};\n\nexport default Wrapper;';
	/**
	 * TypeScript Container file for wrapping components around app with support for Context.
	 * components/Wrapper.tsx
	 */
	export const WRAPPER_TS_CONTEXT =
		'import { AppProvider } from "../context/AppContext";\nimport { WrapperProps } from "../interfaces";\n\nimport Meta from "./Meta";\n\nconst Wrapper: React.FC<WrapperProps> = ({ children }): JSX.Element => {\n\treturn (\n\t\t<AppProvider>\n\t\t\t<>\n\t\t\t\t<Meta />\n\t\t\t\t{children}\n\t\t\t</>\n\t\t</AppProvider>\n\t);\n};\n\nexport default Wrapper;';
}
declare module "@tinotech/clean-next-boilerplate/utils/files" {
	/**
	 * Generates a Meta file containing meta tags for a web app.
	 * @param name The name of the project.
	 * @param typeScript Whether this project uses TypeScript or not
	 * @returns	A string containing a Meta file for setting meta tags for the project.
	 */
	export const getMeta: (name: string, typeScript: boolean) => string;
	/**
	 * Generates the entry point for a Next.js app.
	 * @param name The name of the project
	 * @param typeScript Whether or not this project uses TypeScript
	 * @returns A string containing the index file for the project.
	 */
	export const getIndex: (name: string, typeScript: boolean) => string;
	/**
	 * Generates a manifest for a Next.js app.
	 * @param name The name of the project.
	 * @returns A string containing the manifest.json for the project.
	 */
	export const getManifest: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses JavaScript.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getJSPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses JavaScript and MongoDB.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getJSMongoPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses JavaScript and ESLint.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getJSESLintPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses JavaScript and Sass.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getJSSassPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses JavaScript, Sass and ESLint.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getJSSassESLintPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses JavaScript, Sass and MongoDB.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getJSSassMongoPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses JavaScript, ESLint and Mongo.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getJSESLintMongoPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses JavaScript, Sass and ESLint.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getJSSassESLintMongoPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses TypeScript.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getTSPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses TypeScript and MongoDB.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getTSMongoPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses TypeScript and ESLint.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getTSESLintPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses TypeScript and Sass.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getTSSassPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses TypeScript, Sass and ESLint.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getTSSassESLintPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses TypeScript, Sass and MongoDB.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getTSSassMongoPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses TypeScript, ESLint and MongoDB.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getTSESLintMongoPackageJson: (name: string) => string;
	/**
	 * Generates a package.json for a Next.js app that uses TypeScript, Sass, ESLint and MongoDB.
	 * @param name The name of the project.
	 * @returns A string containing the package file.
	 */
	export const getTSSassESLintMongoPackageJson: (name: string) => string;
	/**
	 * Generates a README file with the project's name.
	 * @param name The name of the project.
	 * @returns A string containing a Readme with the project's name.
	 */
	export const getReadme: (name: string) => string;
}
declare module "@tinotech/clean-next-boilerplate/writers/combinations" {
	import { Options } from "@tinotech/clean-next-boilerplate/interfaces/index";
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
	export const writeTypeScriptSassESLintMongoDBContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScriptSassESLintMongoDB: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScriptESLintMongoDBContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScriptSassMongoDBContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScriptSassESLintContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScriptESLintMongoDB: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScriptSassMongoDB: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScriptSassESLint: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScriptSassContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScriptESLintContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScriptMongoDBContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScriptSass: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScriptESLint: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScriptMongoDB: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScriptContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeTypeScript: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScriptESLintMongoDBContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScriptSassMongoDBContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScriptSassESLintContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
	/**
   * Generates boilerplate for a Next.js project that uses JavaScript, Sass, ESLint, Context and MongoDB.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   * @param options The options. Takes the form. {
      typeScript: boolean;
      sass: boolean;
      context: boolean;
  } where typeScript is if this is a TypeScript object, context is whether the Context API is included and where sass is whether this project should include sass.
   * @returns void.
   */
	export const writeJavaScriptSassESLintMongoDBContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScriptSassESLintMongoDB: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScriptESLintMongoDB: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScriptSassMongoDB: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScriptSassESLint: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScriptSassContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScriptESLintContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScriptMongoDBContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScriptContext: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScriptSass: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScriptESLint: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScriptMongoDB: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
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
	export const writeJavaScript: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
}
declare module "@tinotech/clean-next-boilerplate/writers/common" {
	import { Options } from "@tinotech/clean-next-boilerplate/interfaces/index";
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeJSPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeJSMongoPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeJSESLintPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeJSSassPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeJSSassESLintPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeJSSassMongoPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeJSESLintMongoPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeJSSassESLintMongoPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeTSPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeTSMongoPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeTSESLintPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeTSSassPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeTSSassESLintPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeTSSassMongoPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeTSESLintMongoPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
	 * Uses fs to write the package.json file to the directory specified.
	 * @param name The name of the project.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeTSSassESLintMongoPackageJson: (
		name: string,
		basePath: string
	) => Promise<void>;
	/**
   * Uses fs to write the files that are common to all Next.js apps.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   * @param options The options. Takes the form. {
      typeScript: boolean;
      sass: boolean;
  } where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
   */
	export const writeCommonFiles: (
		name: string,
		basePath: string,
		options: Options
	) => Promise<void>;
}
declare module "@tinotech/clean-next-boilerplate/writers/context" {
	/**
	 * Uses fs to write out all the files necessary for using Context in a Next.js app.
	 * @param basePath The base path to write out the files to.
	 * @param typeScript Whether this project uses TypeScript or not.
	 */
	export const writeContext: (
		basePath: string,
		typeScript: boolean
	) => Promise<void>;
}
declare module "@tinotech/clean-next-boilerplate/writers/eslint" {
	/**
	 * Uses fs to write out an eslint configuration to the specified directory.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeESLint: (basePath: string) => Promise<void>;
}
declare module "@tinotech/clean-next-boilerplate/writers/mongodb" {
	/**
	 * Uses fs to write out all the files needed for using MongoDB in a Next.js app.
	 * @param basePath The base path to write out the files to.
	 * @param typeScript Whether this project uses TypeScript or not.
	 */
	export const writeMongo: (
		basePath: string,
		typeScript: boolean
	) => Promise<void>;
}
declare module "@tinotech/clean-next-boilerplate/writers/sass" {
	/**
	 * Uses fs to write out all the files necessary for using Sass in a Next.js app.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeSass: (basePath: string) => Promise<void>;
}
declare module "@tinotech/clean-next-boilerplate/writers/ts" {
	/**
	 * Uses fs to write the interfaces file to the directory specified.
	 * @param basePath The base path to write out the files to.
	 * @param context Whether this project uses the Context API or not.
	 */
	export const writeInterfaces: (
		basePath: string,
		context: boolean
	) => Promise<void>;
	/**
	 * Uses fs to write a TSConfig file to the directory specified.
	 * @param basePath The base path to write out the files to.
	 */
	export const writeTSConfig: (basePath: string) => Promise<void>;
}
declare module "@tinotech/clean-next-boilerplate" {
	import main = require("@tinotech/clean-next-boilerplate/index");
	export = main;
}
