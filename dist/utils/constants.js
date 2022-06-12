"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SASS_APP = exports.SASS_BASE = exports.SASS_INDEX = exports.SASS_MIXINS = exports.SASS_FONTS = exports.SASS_COLOURS = exports.SASS_BREAKPOINTS = exports.ESLINT_RC = exports.NEXT_CONFIG = exports.WRAPPER = exports.APP_SASS = exports.APP = exports.API_POST = exports.UTILS_INDEX = exports.GITIGNORE = exports.VERCEL_JSON = void 0;
exports.VERCEL_JSON = `{
    "github": {
        "silent": true
    }
}
`;
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
exports.UTILS_INDEX = `export const BASE_URL =
	process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";
`;
exports.API_POST = `const handler = (req, res) => {
	res.status(200).json({ message: "Hello there" });
};

export default handler;
`;
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
exports.NEXT_CONFIG = `module.exports = {
	webpack5: true,
	env: {
		// Ensure you've added this in an .env file.
		MONGO_URI: process.env.MONGO_URI,
	},
};
`;
exports.ESLINT_RC = `{
    "extends": "next/core-web-vitals"
  }
  `;
exports.SASS_BREAKPOINTS = `$breakpoints: (
    phone-xs: 400px,
    phone: 500px,
    tablet: 1024px,
    desktop: 1300px,
    desktop-xl: 1500px,
);`;
exports.SASS_COLOURS = `$white: white;
`;
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
exports.SASS_INDEX = `@forward "../abstracts/colours";
@forward "../abstracts/fonts";
@forward "../abstracts/mixins";
`;
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
exports.SASS_APP = `@use "./components/base";
`;
