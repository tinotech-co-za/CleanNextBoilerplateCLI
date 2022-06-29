"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSCONFIG = exports.INTERFACES = exports.UTILS_DB_TS = exports.UTILS_DB = exports.SASS_APP = exports.SASS_BASE = exports.SASS_INDEX = exports.SASS_MIXINS = exports.SASS_FONTS = exports.SASS_COLOURS = exports.SASS_BREAKPOINTS = exports.ESLINT_RC = exports.NEXT_CONFIG = exports.WRAPPER_TS = exports.WRAPPER = exports.APP_SASS_TS = exports.APP_SASS = exports.APP_TS = exports.APP = exports.API_POST_TS = exports.API_POST = exports.UTILS_INDEX = exports.GITIGNORE = exports.VERCEL_JSON = void 0;
/**
 * Vercel config file that silences Vercel/GitHub notifications for building/pull requests.
 * vercel.json
 */
exports.VERCEL_JSON = `{
    "github": {
        "silent": true
    }
}
`;
/**
 * Standard .gitignore file.
 * .gitignore
 */
exports.GITIGNORE = `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env.local
.env.development.local
.env.test.local
.env.production.local

# vercel
.vercel
`;
/**
 * A utils file that contains a ternary for the base url of the project as well as a function to limit and elipsise strings.
 * utils/index.ts/js
 */
exports.UTILS_INDEX = `export const BASE_URL =
	process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";

	/**
 * Appends a limit to the end of text and substrings to the specified limit.
 * @param text The text to add an ellips to.
 * @param limit The point at which the text is cut off.
 * @returns A string cut off at the limit and with an ellips appended to the end.
 */
export const elipsise = (text: string, limit: number): string =>
	text.substring(0, limit - 7)+"...";
`;
/**
 * A dummy API endpoint.
 * pages/api/post/index.js
 */
exports.API_POST = `const handler = (req, res) => {
	res.status(200).json({ message: "Hello there" });
};

export default handler;
`;
/**
 * A dummy TypeScript API endpoint.
 * pages/api/post/index.ts
 */
exports.API_POST_TS = `import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({ message: "Hello there" });
};

export default handler;
`;
/**
 * Next.js app file.
 * pages/_app.jsx
 */
exports.APP = `import { useEffect } from "react";

import Wrapper from "../components/Wrapper";

const MyApp = ({ Component, pageProps }) => {
	useEffect(() => {
		const disableReactDevTools = () => {
			const noop = () => undefined;
			const DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

			if (typeof DEV_TOOLS === "object") {
				for (const [key, value] of Object.entries(DEV_TOOLS)) {
					DEV_TOOLS[key] = typeof value === "function" ? noop : null;
				}
			}
		};
		if (process.env.NODE_ENV === "production") disableReactDevTools();
	}, []);

	return (
		<Wrapper>
			<Component {...pageProps} />
		</Wrapper>
	);
};

export default MyApp;
`;
/**
 * Next.js TypeScript app file.
 * pages/_app.tsx
 */
exports.APP_TS = `import { AppProps } from "next/app";
import { useEffect } from "react";

import Wrapper from "../components/Wrapper";

const MyApp= ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		const disableReactDevTools = (): void => {
			const noop = (): void => undefined;
			const DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;

			if (typeof DEV_TOOLS === "object") {
				for (const [key, value] of Object.entries(DEV_TOOLS)) {
					DEV_TOOLS[key] = typeof value === "function" ? noop : null;
				}
			}
		};
		if (process.env.NODE_ENV === "production") disableReactDevTools();
	}, []);

	return (
		<Wrapper>
			<Component {...pageProps} />
		</Wrapper>
	);
};

export default MyApp;
`;
/**
 * Next.js app file with Sass import.
 * pages/_app.jsx
 */
exports.APP_SASS = `import { useEffect } from "react";

import Wrapper from "../components/Wrapper";
import "../sass/App.scss";

const MyApp = ({ Component, pageProps }) => {
	useEffect(() => {
		const disableReactDevTools = () => {
			const noop = () => undefined;
			const DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

			if (typeof DEV_TOOLS === "object") {
				for (const [key, value] of Object.entries(DEV_TOOLS)) {
					DEV_TOOLS[key] = typeof value === "function" ? noop : null;
				}
			}
		};
		if (process.env.NODE_ENV === "production") disableReactDevTools();
	}, []);

	return (
		<Wrapper>
			<Component {...pageProps} />
		</Wrapper>
	);
};

export default MyApp;
`;
/**
 * Next.js app TypeScript file with Sass import.
 * pages/_app.tsx
 */
exports.APP_SASS_TS = `import { AppProps } from "next/app";
import { useEffect } from "react";

import Wrapper from "../components/Wrapper";
import "../sass/App.scss";

const MyApp= ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		const disableReactDevTools = (): void => {
			const noop = (): void => undefined;
			const DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;

			if (typeof DEV_TOOLS === "object") {
				for (const [key, value] of Object.entries(DEV_TOOLS)) {
					DEV_TOOLS[key] = typeof value === "function" ? noop : null;
				}
			}
		};
		if (process.env.NODE_ENV === "production") disableReactDevTools();
	}, []);
	return (
		<Wrapper>
			<Component {...pageProps} />
		</Wrapper>
	);
};

export default MyApp;
`;
/**
 * Container file for wrapping components around app.
 * components/Wrapper.jsx
 */
exports.WRAPPER = `import Meta from "./Meta";

const Wrapper = ({ children }) => {
	return (
		<>
			<Meta />
			{children}
		</>
	);
};

export default Wrapper;
`;
/**
 * TypeScript Container file for wrapping components around app.
 * components/Wrapper.tsx
 */
exports.WRAPPER_TS = `import { WrapperProps } from "../interfaces";

import Meta from "./Meta";

const Wrapper: React.FC<WrapperProps> = ({ children }): JSX.Element => {
	return (
		<>
			<Meta />
			{children}
		</>
	);
};

export default Wrapper;
`;
/**
 * Next.js config file.
 * next.config.js
 */
exports.NEXT_CONFIG = `module.exports = {
	webpack5: true,
	env: {
		// Ensure you've added this in an .env file.
		MONGO_URI: process.env.MONGO_URI,
	},
};
`;
/**
 * ESLint config file.
 * .eslintrc.json
 */
exports.ESLINT_RC = `{
    "extends": "next/core-web-vitals"
  }
  `;
/**
 * Sass breakpoints file containing a map for common screen breakpoints.
 * sass/abstracts/_breakpoints.scss
 */
exports.SASS_BREAKPOINTS = `$breakpoints: (
    phone-xs: 400px,
    phone: 500px,
    tablet: 1024px,
    desktop: 1300px,
    desktop-xl: 1500px,
);`;
/**
 * Sass colours file with a variable for the white colour.
 * sass/abstracts/_colours.scss
 */
exports.SASS_COLOURS = `$white: white;
`;
/**
 * Sass fonts file containing common font sizes as well as an import for Google fonts Poppins font.
 * sass/abstracts/_fonts.scss
 */
exports.SASS_FONTS = `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");

$font-xxxl: 8rem;
$font-xxl: 5rem;
$font-xl: 4rem;
$font-lg: 3rem;
$font-md: 2rem;
$font-sm: 1.5rem;
$font-rg: 1rem;
$font-xs: 0.7rem;
`;
/**
 * Sass mixins file containing a few mixins.
 * sass/abstracts/_mixins.scss
 */
exports.SASS_MIXINS = `@use "./breakpoints" as *;

@mixin flexAllRow {
	display: flex;
	justify-content: center;
	align-items: center;
}

@mixin flexAllCol {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

@mixin mq($key) {
	$size: map-get($breakpoints, $key);
  
	@media only screen and (max-width: $size) {
	  @content;
	}
}
`;
/**
 * Sass index file that forwards all abstracts.
 * sass/abstracts/_index.scss
 */
exports.SASS_INDEX = `@forward "../abstracts/colours";
@forward "../abstracts/fonts";
@forward "../abstracts/mixins";
`;
/**
 * Sass base file containing a reset.
 * sass/components/_base.scss
 */
exports.SASS_BASE = `@use "../abstracts/" as *;

*,
*::before,
*::after {
	font-family: "Poppins", sans-serif;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	overflow-x: hidden;
}
`;
/**
 * Sass app file for using components.
 * sass/App.scss
 */
exports.SASS_APP = `@use "./components/base";
`;
/**
 * Configuration for using a MongoDB database.
 * utils/db.js
 */
exports.UTILS_DB = `import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
	throw new Error("An error occured please refresh or contact the developer.");
}

let cached = { conn: null, promise: null };

if (!cached) {
	cached = { conn: null, promise: null };
}

/**
 * Connect to the database.
 * @returns A mongoose object.
 */
const dbConnect = async () => {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			bufferCommands: false,
		};

		cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
			return mongoose;
		});
	}
	cached.conn = await cached.promise;
	return cached.conn;
};

export default dbConnect;
`;
/**
 * TypeScript Configuration for using a MongoDB database.
 * utils/db.ts
 */
exports.UTILS_DB_TS = `import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
	throw new Error("An error occured please refresh or contact the developer.");
}

let cached: {
	conn: null | typeof mongoose;
	promise: null | Promise<typeof mongoose>;
} = { conn: null, promise: null };

if (!cached) {
	cached = { conn: null, promise: null };
}

/**
 * Connect to the database.
 * @returns A mongoose object.
 */
const dbConnect= async (): Promise<typeof mongoose> => {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			bufferCommands: false,
		};

		cached.promise = mongoose
			.connect(MONGO_URI as string, opts)
			.then((mongoose) => {
				return mongoose;
			});
	}
	cached.conn = await cached.promise;
	return cached.conn;
};

export default dbConnect;
`;
exports.INTERFACES = `export interface WrapperProps {
	children: JSX.Element | JSX.Element[];
}

export interface MetaProps {
	title?: string;
	description?: string;
	keywords?: string;
	url?: string;
	image?: string;
}`;
exports.TSCONFIG = `{
	"compilerOptions": {
	  "target": "es5",
	  "lib": [
		"dom",
		"dom.iterable",
		"esnext"
	  ],
	  "allowJs": true,
	  "skipLibCheck": true,
	  "strict": true,
	  "forceConsistentCasingInFileNames": true,
	  "noEmit": true,
	  "esModuleInterop": true,
	  "module": "esnext",
	  "moduleResolution": "node",
	  "resolveJsonModule": true,
	  "isolatedModules": true,
	  "jsx": "preserve",
	  "incremental": true
	},
	"include": [
	  "next-env.d.ts",
	  "**/*.ts",
	  "**/*.tsx"
	],
	"exclude": [
	  "node_modules"
	]
  }
  `;
