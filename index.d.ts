declare module '@tinotech/clean-next-boilerplate/index' {
  export {};
  //# sourceMappingURL=index.d.ts.map
}
declare module '@tinotech/clean-next-boilerplate/index.d.ts' {
  {"version":3,"file":"index.d.ts","sourceRoot":"","sources":["../src/index.ts"],"names":[],"mappings":""}
}
declare module '@tinotech/clean-next-boilerplate/interfaces/index' {
  /**
   * The options for a permutation. Including whether or not the project uses TypeScript as well as whether or not to include Sass.
   */
  export type Options = {
      typeScript: boolean;
      sass: boolean;
  };
  //# sourceMappingURL=index.d.ts.map
}
declare module '@tinotech/clean-next-boilerplate/interfaces/index.d.ts' {
  {"version":3,"file":"index.d.ts","sourceRoot":"","sources":["../../src/interfaces/index.ts"],"names":[],"mappings":"AAAA;;GAEG;AACH,oBAAY,OAAO,GAAG;IACrB,UAAU,EAAE,OAAO,CAAC;IACpB,IAAI,EAAE,OAAO,CAAC;CACd,CAAC"}
}
declare module '@tinotech/clean-next-boilerplate/utils/constants' {
  /**
   * Vercel config file that silences Vercel/GitHub notifications for building/pull requests.
   * vercel.json
   */
  export const VERCEL_JSON = "{\n    \"github\": {\n        \"silent\": true\n    }\n}\n";
  /**
   * Standard .gitignore file.
   * .gitignore
   */
  export const GITIGNORE = "# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n# dependencies\n/node_modules\n/.pnp\n.pnp.js\n\n# testing\n/coverage\n\n# next.js\n/.next/\n/out/\n\n# production\n/build\n\n# misc\n.DS_Store\n*.pem\n\n# debug\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n# local env files\n.env.local\n.env.development.local\n.env.test.local\n.env.production.local\n\n# vercel\n.vercel\n";
  /**
   * A utils file that contains a ternary for the base url of the project.
   * utils/index.ts/js
   */
  export const UTILS_INDEX = "export const BASE_URL =\n\tprocess.env.NODE_ENV === \"production\" ? \"\" : \"http://localhost:3000\";\n";
  /**
   * A dummy API endpoint.
   * pages/api/post/index.js
   */
  export const API_POST = "const handler = (req, res) => {\n\tres.status(200).json({ message: \"Hello there\" });\n};\n\nexport default handler;\n";
  /**
   * A dummy TypeScript API endpoint.
   * pages/api/post/index.ts
   */
  export const API_POST_TS = "import { NextApiRequest, NextApiResponse } from \"next\";\n\nconst handler = (req: NextApiRequest, res: NextApiResponse) => {\n\tres.status(200).json({ message: \"Hello there\" });\n};\n\nexport default handler;\n";
  /**
   * Next.js app file.
   * pages/_app.jsx
   */
  export const APP = "import { useEffect } from \"react\";\n\nimport Wrapper from \"../components/Wrapper\";\n\nconst MyApp = ({ Component, pageProps }) => {\n\tuseEffect(() => {\n\t\tconst disableReactDevTools = () => {\n\t\t\tconst noop = () => undefined;\n\t\t\tconst DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n\t\t\tif (typeof DEV_TOOLS === \"object\") {\n\t\t\t\tfor (const [key, value] of Object.entries(DEV_TOOLS)) {\n\t\t\t\t\tDEV_TOOLS[key] = typeof value === \"function\" ? noop : null;\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tif (process.env.NODE_ENV === \"production\") disableReactDevTools();\n\t}, []);\n\n\treturn (\n\t\t<Wrapper>\n\t\t\t<Component {...pageProps} />\n\t\t</Wrapper>\n\t);\n};\n\nexport default MyApp;\n";
  /**
   * Next.js TypeScript app file.
   * pages/_app.tsx
   */
  export const APP_TS = "import { AppProps } from \"next/app\";\nimport { useEffect } from \"react\";\n\nimport Wrapper from \"../components/Wrapper\";\n\nconst MyApp= ({ Component, pageProps }: AppProps) => {\n\tuseEffect(() => {\n\t\tconst disableReactDevTools = (): void => {\n\t\t\tconst noop = (): void => undefined;\n\t\t\tconst DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n\t\t\tif (typeof DEV_TOOLS === \"object\") {\n\t\t\t\tfor (const [key, value] of Object.entries(DEV_TOOLS)) {\n\t\t\t\t\tDEV_TOOLS[key] = typeof value === \"function\" ? noop : null;\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tif (process.env.NODE_ENV === \"production\") disableReactDevTools();\n\t}, []);\n\n\treturn (\n\t\t<Wrapper>\n\t\t\t<Component {...pageProps} />\n\t\t</Wrapper>\n\t);\n};\n\nexport default MyApp;\n";
  /**
   * Next.js app file with Sass import.
   * pages/_app.jsx
   */
  export const APP_SASS = "import { useEffect } from \"react\";\n\nimport Wrapper from \"../components/Wrapper\";\nimport \"../sass/App.scss\";\n\nconst MyApp = ({ Component, pageProps }) => {\n\tuseEffect(() => {\n\t\tconst disableReactDevTools = () => {\n\t\t\tconst noop = () => undefined;\n\t\t\tconst DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n\t\t\tif (typeof DEV_TOOLS === \"object\") {\n\t\t\t\tfor (const [key, value] of Object.entries(DEV_TOOLS)) {\n\t\t\t\t\tDEV_TOOLS[key] = typeof value === \"function\" ? noop : null;\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tif (process.env.NODE_ENV === \"production\") disableReactDevTools();\n\t}, []);\n\n\treturn (\n\t\t<Wrapper>\n\t\t\t<Component {...pageProps} />\n\t\t</Wrapper>\n\t);\n};\n\nexport default MyApp;\n";
  /**
   * Next.js app TypeScript file with Sass import.
   * pages/_app.tsx
   */
  export const APP_SASS_TS = "import { AppProps } from \"next/app\";\nimport { useEffect } from \"react\";\n\nimport Wrapper from \"../components/Wrapper\";\nimport \"../sass/App.scss\";\n\nconst MyApp= ({ Component, pageProps }: AppProps) => {\n\tuseEffect(() => {\n\t\tconst disableReactDevTools = (): void => {\n\t\t\tconst noop = (): void => undefined;\n\t\t\tconst DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n\t\t\tif (typeof DEV_TOOLS === \"object\") {\n\t\t\t\tfor (const [key, value] of Object.entries(DEV_TOOLS)) {\n\t\t\t\t\tDEV_TOOLS[key] = typeof value === \"function\" ? noop : null;\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tif (process.env.NODE_ENV === \"production\") disableReactDevTools();\n\t}, []);\n\treturn (\n\t\t<Wrapper>\n\t\t\t<Component {...pageProps} />\n\t\t</Wrapper>\n\t);\n};\n\nexport default MyApp;\n";
  /**
   * Container file for wrapping components around app.
   * components/Wrapper.jsx
   */
  export const WRAPPER = "import Meta from \"./Meta\";\n\nconst Wrapper = ({ children }) => {\n\treturn (\n\t\t<>\n\t\t\t<Meta />\n\t\t\t{children}\n\t\t</>\n\t);\n};\n\nexport default Wrapper;\n";
  /**
   * TypeScript Container file for wrapping components around app.
   * components/Wrapper.tsx
   */
  export const WRAPPER_TS = "import { WrapperProps } from \"../interfaces\";\n\nimport Meta from \"./Meta\";\n\nconst Wrapper: React.FC<WrapperProps> = ({ children }): JSX.Element => {\n\treturn (\n\t\t<>\n\t\t\t<Meta />\n\t\t\t{children}\n\t\t</>\n\t);\n};\n\nexport default Wrapper;\n";
  /**
   * Next.js config file.
   * next.config.js
   */
  export const NEXT_CONFIG = "module.exports = {\n\twebpack5: true,\n\tenv: {\n\t\t// Ensure you've added this in an .env file.\n\t\tMONGO_URI: process.env.MONGO_URI,\n\t},\n};\n";
  /**
   * ESLint config file.
   * .eslintrc.json
   */
  export const ESLINT_RC = "{\n    \"extends\": \"next/core-web-vitals\"\n  }\n  ";
  /**
   * Sass breakpoints file containing a map for common screen breakpoints.
   * sass/abstracts/_breakpoints.scss
   */
  export const SASS_BREAKPOINTS = "$breakpoints: (\n    phone-xs: 400px,\n    phone: 500px,\n    tablet: 1024px,\n    desktop: 1300px,\n    desktop-xl: 1500px,\n);";
  /**
   * Sass colours file with a variable for the white colour.
   * sass/abstracts/_colours.scss
   */
  export const SASS_COLOURS = "$white: white;\n";
  /**
   * Sass fonts file containing common font sizes as well as an import for Google fonts Poppins font.
   * sass/abstracts/_fonts.scss
   */
  export const SASS_FONTS = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap\");\n\n$font-xxxl: 8rem;\n$font-xxl: 5rem;\n$font-xl: 4rem;\n$font-lg: 3rem;\n$font-md: 2rem;\n$font-sm: 1.5rem;\n$font-rg: 1rem;\n$font-xs: 0.7rem;\n";
  /**
   * Sass mixins file containing a few mixins.
   * sass/abstracts/_mixins.scss
   */
  export const SASS_MIXINS = "@use \"./breakpoints\" as *;\n\n@mixin flexAllRow {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n@mixin flexAllCol {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n}\n\n@mixin mq($key) {\n\t$size: map-get($breakpoints, $key);\n  \n\t@media only screen and (max-width: $size) {\n\t  @content;\n\t}\n}\n";
  /**
   * Sass index file that forwards all abstracts.
   * sass/abstracts/_index.scss
   */
  export const SASS_INDEX = "@forward \"../abstracts/colours\";\n@forward \"../abstracts/fonts\";\n@forward \"../abstracts/mixins\";\n";
  /**
   * Sass base file containing a reset.
   * sass/components/_base.scss
   */
  export const SASS_BASE = "@use \"../abstracts/\" as *;\n\n*,\n*::before,\n*::after {\n\tfont-family: \"Poppins\", sans-serif;\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\toverflow-x: hidden;\n}\n";
  /**
   * Sass app file for using components.
   * sass/App.scss
   */
  export const SASS_APP = "@use \"./components/base\";\n";
  /**
   * Configuration for using a MongoDB database.
   * utils/db.js
   */
  export const UTILS_DB = "import mongoose from \"mongoose\";\n\nconst MONGO_URI = process.env.MONGO_URI;\n\nif (!MONGO_URI) {\n\tthrow new Error(\"An error occured please refresh or contact the developer.\");\n}\n\nlet cached = { conn: null, promise: null };\n\nif (!cached) {\n\tcached = { conn: null, promise: null };\n}\n\n/**\n * Connect to the database.\n * @returns A mongoose object.\n */\nconst dbConnect = async () => {\n\tif (cached.conn) {\n\t\treturn cached.conn;\n\t}\n\n\tif (!cached.promise) {\n\t\tconst opts = {\n\t\t\tuseNewUrlParser: true,\n\t\t\tuseUnifiedTopology: true,\n\t\t\tbufferCommands: false,\n\t\t};\n\n\t\tcached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {\n\t\t\treturn mongoose;\n\t\t});\n\t}\n\tcached.conn = await cached.promise;\n\treturn cached.conn;\n};\n\nexport default dbConnect;\n";
  /**
   * TypeScript Configuration for using a MongoDB database.
   * utils/db.ts
   */
  export const UTILS_DB_TS = "import mongoose from \"mongoose\";\n\nconst MONGO_URI = process.env.MONGO_URI;\n\nif (!MONGO_URI) {\n\tthrow new Error(\"An error occured please refresh or contact the developer.\");\n}\n\nlet cached: {\n\tconn: null | typeof mongoose;\n\tpromise: null | Promise<typeof mongoose>;\n} = { conn: null, promise: null };\n\nif (!cached) {\n\tcached = { conn: null, promise: null };\n}\n\n/**\n * Connect to the database.\n * @returns A mongoose object.\n */\nconst dbConnect= async (): Promise<typeof mongoose> => {\n\tif (cached.conn) {\n\t\treturn cached.conn;\n\t}\n\n\tif (!cached.promise) {\n\t\tconst opts = {\n\t\t\tuseNewUrlParser: true,\n\t\t\tuseUnifiedTopology: true,\n\t\t\tbufferCommands: false,\n\t\t};\n\n\t\tcached.promise = mongoose\n\t\t\t.connect(MONGO_URI as string, opts)\n\t\t\t.then((mongoose) => {\n\t\t\t\treturn mongoose;\n\t\t\t});\n\t}\n\tcached.conn = await cached.promise;\n\treturn cached.conn;\n};\n\nexport default dbConnect;\n";
  //# sourceMappingURL=constants.d.ts.map
}
declare module '@tinotech/clean-next-boilerplate/utils/constants.d.ts' {
  {"version":3,"file":"constants.d.ts","sourceRoot":"","sources":["../../src/utils/constants.ts"],"names":[],"mappings":"AAAA;;;GAGG;AACH,eAAO,MAAM,WAAW,+DAKvB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,SAAS,yaAkCrB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,WAAW,6GAEvB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,QAAQ,4HAKpB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,WAAW,0NAOvB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,GAAG,itBA2Bf,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,MAAM,uxBA4BlB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,QAAQ,+uBA4BpB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,WAAW,mzBA4BvB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,OAAO,8KAYnB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,UAAU,sQActB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,WAAW,yJAOvB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,SAAS,0DAGnB,CAAC;AAEJ;;;GAGG;AACH,eAAO,MAAM,gBAAgB,qIAM1B,CAAC;AAEJ;;;GAGG;AACH,eAAO,MAAM,YAAY,qBACxB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,UAAU,4PAUtB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,WAAW,oYAsBvB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,UAAU,8GAGtB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,SAAS,yMAcrB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,QAAQ,kCACpB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,QAAQ,szBAuCpB,CAAC;AAEF;;;GAGG;AACH,eAAO,MAAM,WAAW,i8BA4CvB,CAAC"}
}
declare module '@tinotech/clean-next-boilerplate/utils/files' {
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
  //# sourceMappingURL=files.d.ts.map
}
declare module '@tinotech/clean-next-boilerplate/utils/files.d.ts' {
  {"version":3,"file":"files.d.ts","sourceRoot":"","sources":["../../src/utils/files.ts"],"names":[],"mappings":"AAAA;;;;;GAKG;AACH,eAAO,MAAM,OAAO,SAAU,MAAM,cAAc,OAAO,KAAG,MA8G3D,CAAC;AAEF;;;;;GAKG;AACH,eAAO,MAAM,QAAQ,SAAU,MAAM,cAAc,OAAO,KAAG,MAqB5D,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,WAAW,SAAU,MAAM,KAAG,MA0B1C,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,gBAAgB,SAAU,MAAM,KAAG,MAe/C,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,qBAAqB,SAAU,MAAM,KAAG,MAgBpD,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,sBAAsB,SAAU,MAAM,KAAG,MAmBrD,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,oBAAoB,SAAU,MAAM,KAAG,MAkBnD,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,0BAA0B,SAAU,MAAM,KAAG,MAoBzD,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,yBAAyB,SAAU,MAAM,KAAG,MAmBxD,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,2BAA2B,SAAU,MAAM,KAAG,MAoB1D,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,+BAA+B,SAAU,MAAM,KAAG,MAqB9D,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,gBAAgB,SAAU,MAAM,KAAG,MAsB/C,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,qBAAqB,SAAU,MAAM,KAAG,MAuBpD,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,sBAAsB,SAAU,MAAM,KAAG,MAwBrD,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,oBAAoB,SAAU,MAAM,KAAG,MAuBnD,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,0BAA0B,SAAU,MAAM,KAAG,MAyBzD,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,yBAAyB,SAAU,MAAM,KAAG,MAwBxD,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,2BAA2B,SAAU,MAAM,KAAG,MAyB1D,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,+BAA+B,SAAU,MAAM,KAAG,MA0B9D,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,SAAS,SAAU,MAAM,KAAG,MACxC,CAAC"}
}
declare module '@tinotech/clean-next-boilerplate/writers/common' {
  import { Options } from "@tinotech/clean-next-boilerplate/interfaces/index";
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeJSPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeJSMongoPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeJSESLintPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeJSSassPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeJSSassESLintPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeJSSassMongoPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeJSESLintMongoPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeJSSassESLintMongoPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeTSPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeTSMongoPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeTSESLintPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeTSSassPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeTSSassESLintPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeTSSassMongoPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeTSESLintMongoPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the package.json file to the directory specified.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   */
  export const writeTSSassESLintMongoPackageJson: (name: string, basePath: string) => Promise<void>;
  /**
   * Uses fs to write the files that are common to all Next.js apps.
   * @param name The name of the project.
   * @param basePath The base path to write out the files to.
   * @param options The options. Takes the form. {
      typeScript: boolean;
      sass: boolean;
  } where typeScript is if this is a TypeScript object and where sass is whether this project should include sass.
   */
  export const writeCommonFiles: (name: string, basePath: string, options: Options) => Promise<void>;
  //# sourceMappingURL=common.d.ts.map
}
declare module '@tinotech/clean-next-boilerplate/writers/common.d.ts' {
  {"version":3,"file":"common.d.ts","sourceRoot":"","sources":["../../src/writers/common.ts"],"names":[],"mappings":"AAsCA,OAAO,EAAE,OAAO,EAAE,MAAM,eAAe,CAAC;AAExC;;;;GAIG;AACH,eAAO,MAAM,kBAAkB,SACxB,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,uBAAuB,SAC7B,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,wBAAwB,SAC9B,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,sBAAsB,SAC5B,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,4BAA4B,SAClC,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,2BAA2B,SACjC,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,6BAA6B,SACnC,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,iCAAiC,SACvC,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,kBAAkB,SACxB,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,uBAAuB,SAC7B,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,wBAAwB,SAC9B,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,sBAAsB,SAC5B,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,4BAA4B,SAClC,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,2BAA2B,SACjC,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,6BAA6B,SACnC,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAEF;;;;GAIG;AACH,eAAO,MAAM,iCAAiC,SACvC,MAAM,YACF,MAAM,KACd,QAAQ,IAAI,CAKd,CAAC;AAqBF;;;;;;;;GAQG;AACH,eAAO,MAAM,gBAAgB,SACtB,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAgDd,CAAC"}
}
declare module '@tinotech/clean-next-boilerplate/writers/eslint' {
  /**
   * Uses fs to write out an eslint configuration to the specified directory.
   * @param basePath The base path to write out the files to.
   */
  export const writeESLint: (basePath: string) => Promise<void>;
  //# sourceMappingURL=eslint.d.ts.map
}
declare module '@tinotech/clean-next-boilerplate/writers/eslint.d.ts' {
  {"version":3,"file":"eslint.d.ts","sourceRoot":"","sources":["../../src/writers/eslint.ts"],"names":[],"mappings":"AAKA;;;GAGG;AACH,eAAO,MAAM,WAAW,aAAoB,MAAM,KAAG,QAAQ,IAAI,CAEhE,CAAC"}
}
declare module '@tinotech/clean-next-boilerplate/writers/mongodb' {
  /**
   * Uses fs to write out all the files needed for using MongoDB in a Next.js app.
   * @param basePath The base path to write out the files to.
   * @param typeScript Whether this project uses TypeScript or not.
   */
  export const writeMongo: (basePath: string, typeScript: boolean) => Promise<void>;
  //# sourceMappingURL=mongodb.d.ts.map
}
declare module '@tinotech/clean-next-boilerplate/writers/mongodb.d.ts' {
  {"version":3,"file":"mongodb.d.ts","sourceRoot":"","sources":["../../src/writers/mongodb.ts"],"names":[],"mappings":"AA4BA;;;;GAIG;AACH,eAAO,MAAM,UAAU,aACZ,MAAM,cACJ,OAAO,KACjB,QAAQ,IAAI,CAGd,CAAC"}
}
declare module '@tinotech/clean-next-boilerplate/writers/permutations' {
  import { Options } from "@tinotech/clean-next-boilerplate/interfaces/index";
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
  export const writeTypeScriptSassESLintMongoDB: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeTypeScriptESLintMongoDB: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeTypeScriptSassMongoDB: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeTypeScriptSassESLint: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeTypeScriptSass: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeTypeScriptESLint: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeTypeScriptMongoDB: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeTypeScript: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeJavaScriptSassESLintMongoDB: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeJavaScriptESLintMongoDB: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeJavaScriptSassMongoDB: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeJavaScriptSassESLint: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeJavaScriptSass: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeJavaScriptESLint: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeJavaScriptMongoDB: (name: string, basePath: string, options: Options) => Promise<void>;
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
  export const writeJavaScript: (name: string, basePath: string, options: Options) => Promise<void>;
  //# sourceMappingURL=permutations.d.ts.map
}
declare module '@tinotech/clean-next-boilerplate/writers/permutations.d.ts' {
  {"version":3,"file":"permutations.d.ts","sourceRoot":"","sources":["../../src/writers/permutations.ts"],"names":[],"mappings":"AAwBA,OAAO,EAAE,OAAO,EAAE,MAAM,eAAe,CAAC;AAExC;;;;;;;;;GASG;AACH,eAAO,MAAM,gCAAgC,SACtC,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAWd,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,4BAA4B,SAClC,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAQd,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,0BAA0B,SAChC,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAQd,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,yBAAyB,SAC/B,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAQd,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,mBAAmB,SACzB,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAOd,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,qBAAqB,SAC3B,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAOd,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,sBAAsB,SAC5B,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAOd,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,eAAe,SACrB,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAId,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,gCAAgC,SACtC,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAWd,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,4BAA4B,SAClC,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAQd,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,0BAA0B,SAChC,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAQd,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,yBAAyB,SAC/B,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAQd,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,mBAAmB,SACzB,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAOd,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,qBAAqB,SAC3B,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAOd,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,sBAAsB,SAC5B,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAOd,CAAC;AAEF;;;;;;;;;GASG;AACH,eAAO,MAAM,eAAe,SACrB,MAAM,YACF,MAAM,WACP,OAAO,KACd,QAAQ,IAAI,CAId,CAAC"}
}
declare module '@tinotech/clean-next-boilerplate/writers/sass' {
  /**
   * Uses fs to write out all the files necessary for using Sass in a Next.js app.
   * @param basePath The base path to write out the files to.
   */
  export const writeSass: (basePath: string) => Promise<void>;
  //# sourceMappingURL=sass.d.ts.map
}
declare module '@tinotech/clean-next-boilerplate/writers/sass.d.ts' {
  {"version":3,"file":"sass.d.ts","sourceRoot":"","sources":["../../src/writers/sass.ts"],"names":[],"mappings":"AAoGA;;;GAGG;AACH,eAAO,MAAM,SAAS,aAAoB,MAAM,KAAG,QAAQ,IAAI,CAS9D,CAAC"}
}
declare module '@tinotech/clean-next-boilerplate' {
  import main = require('@tinotech/clean-next-boilerplate/index');
  export = main;
}