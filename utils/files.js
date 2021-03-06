"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReadme = exports.getTSSassESLintMongoPackageJson = exports.getTSESLintMongoPackageJson = exports.getTSSassMongoPackageJson = exports.getTSSassESLintPackageJson = exports.getTSSassPackageJson = exports.getTSESLintPackageJson = exports.getTSMongoPackageJson = exports.getTSPackageJson = exports.getJSSassESLintMongoPackageJson = exports.getJSESLintMongoPackageJson = exports.getJSSassMongoPackageJson = exports.getJSSassESLintPackageJson = exports.getJSSassPackageJson = exports.getJSESLintPackageJson = exports.getJSMongoPackageJson = exports.getJSPackageJson = exports.getManifest = exports.getIndex = exports.getMeta = void 0;
/**
 * Generates a Meta file containing meta tags for a web app.
 * @param name The name of the project.
 * @param typeScript Whether this project uses TypeScript or not
 * @returns	A string containing a Meta file for setting meta tags for the project.
 */
const getMeta = (name, typeScript) => typeScript
    ? `import Head from "next/head";

import { MetaProps } from "../interfaces";
import { BASE_URL } from "../utils";
import { elipsise } from "../utils";

const Meta: React.FC<MetaProps> = ({
	title,
	description,
	keywords,
	url,
	image,
}): JSX.Element => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="theme-color" content="#000000" key="theme-colour" />
		<meta name="keywords" content={keywords} key="keywords" />
		<meta
			name="description"
			content={elipsise(description || "", 300)}
			key="name-description"
		/>

		{/* <!-- Google / Search Engine Tags --> */}
		<meta itemProp="name" content={title} key="item-name" />
		<meta
			itemProp="description"
			content={elipsise(description || "", 300)}
			key="item-description"
		/>
		<meta itemProp="image" content={image} key="item-image" />

		{/* <!-- Facebook Meta Tags --> */}
		<meta property="og:url" content={url} key="og-url" />
		<meta property="og:type" content="website" key="og-type" />
		<meta property="og:title" content={title} key="og-title" />
		<meta
			property="og:description"
			content={elipsise(description || "", 300)}
			key="og-description"
		/>
		<meta property="og:image" content={image} key="og-image" />

		{/* <!-- Twitter Meta Tags --> */}
		<meta name="twitter:card" content="summary_large_image" key="twitter-card" />
		<meta name="twitter:title" content={title} key="twitter-title" />
		<meta
			name="twitter:description"
			content={elipsise(description || "", 200)}
			key="twitter-description"
		/>
		<meta name="twitter:image" content={image} key="twitter-image" />

		<meta charSet="utf-8" />
		<link rel="icon" href="/favicon.ico" />
		<meta name={title} content={elipsise(description || "", 300)} key="name" />
		<link rel="apple-touch-icon" href="/logo192.png" />
		<link rel="manifest" href="/manifest.json" />
		<title>{title}</title>

		{/* Add your preconnect links here */}
		<link rel="preconnect" href="https://a.storyblok.com" />
	</Head>
);

Meta.defaultProps = {
	title: "${name}",
	keywords: "",
	description: "Your description here",
	image: "https://unsplash.it/1000",
	url: BASE_URL,
};

export default Meta;
`
    : `import Head from "next/head";

import { BASE_URL } from "../utils";
import { elipsise } from "../utils";

const Meta = ({ title, description, keywords, url, image }) => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="theme-color" content="#000000" key="theme-colour" />
		<meta name="keywords" content={keywords} key="keywords" />
		<meta
			name="description"
			content={elipsise(description || "", 300)}
			key="name-description"
		/>

		{/* <!-- Google / Search Engine Tags --> */}
		<meta itemProp="name" content={title} key="item-name" />
		<meta
			itemProp="description"
			content={elipsise(description || "", 300)}
			key="item-description"
		/>
		<meta itemProp="image" content={image} key="item-image" />

		{/* <!-- Facebook Meta Tags --> */}
		<meta property="og:url" content={url} key="og-url" />
		<meta property="og:type" content="website" key="og-type" />
		<meta property="og:title" content={title} key="og-title" />
		<meta
			property="og:description"
			content={elipsise(description || "", 300)}
			key="og-description"
		/>
		<meta property="og:image" content={image} key="og-image" />

		{/* <!-- Twitter Meta Tags --> */}
		<meta name="twitter:card" content="summary_large_image" key="twitter-card" />
		<meta name="twitter:title" content={title} key="twitter-title" />
		<meta
			name="twitter:description"
			content={elipsise(description || "", 200)}
			key="twitter-description"
		/>
		<meta name="twitter:image" content={image} key="twitter-image" />

		<meta charSet="utf-8" />
		<link rel="icon" href="/favicon.ico" />
		<meta name={title} content={elipsise(description || "", 300)} key="name" />
		<link rel="apple-touch-icon" href="/logo192.png" />
		<link rel="manifest" href="/manifest.json" />
		<title>{title}</title>

		{/* Add your preconnect links here. */}
		<link rel="preconnect" href="https://a.storyblok.com" />
	</Head>
);

Meta.defaultProps = {
	title: "${name}",
	keywords: "",
	description: "Your description here",
	image: "https://unsplash.it/1000",
	url: BASE_URL,
};

export default Meta;
`;
exports.getMeta = getMeta;
/**
 * Generates the entry point for a Next.js app.
 * @param name The name of the project
 * @param typeScript Whether or not this project uses TypeScript
 * @returns A string containing the index file for the project.
 */
const getIndex = (name, typeScript) => typeScript
    ? `const Home: React.FC = (): JSX.Element => {
	return (
		<main>
			<p>${name}</p>
		</main>
	);
};

export default Home;
`
    : `const Home = () => {
	return (
		<main>
			<p>${name}</p>
		</main>
	);
};

export default Home;
`;
exports.getIndex = getIndex;
/**
 * Generates a manifest for a Next.js app.
 * @param name The name of the project.
 * @returns A string containing the manifest.json for the project.
 */
const getManifest = (name) => `{
	"short_name": "${name}",
	"name": "${name}",
	"icons": [
		{
			"src": "favicon.ico",
			"sizes": "64x64 32x32 24x24 16x16",
			"type": "image/x-icon"
		},
		{
			"src": "logo192.png",
			"type": "image/png",
			"sizes": "192x192"
		},
		{
			"src": "logo512.png",
			"type": "image/png",
			"sizes": "512x512",
			"purpose": "any maskable"
		}
	],
	"start_url": ".",
	"display": "standalone",
	"theme_color": "#000000",
	"background_color": "#ffffff"
}
`;
exports.getManifest = getManifest;
/**
 * Generates a package.json for a Next.js app that uses JavaScript.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getJSPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest"
	},
	"license": "MIT"
}
`;
exports.getJSPackageJson = getJSPackageJson;
/**
 * Generates a package.json for a Next.js app that uses JavaScript and MongoDB.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getJSMongoPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest",
        "mongoose": "latest"
	},
	"license": "MIT"
}
`;
exports.getJSMongoPackageJson = getJSMongoPackageJson;
/**
 * Generates a package.json for a Next.js app that uses JavaScript and ESLint.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getJSESLintPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest"
	},
	"license": "MIT",
	"devDependencies": {
		"eslint": "8.11.0",
		"eslint-config-next": "12.1.0"
	}
}
`;
exports.getJSESLintPackageJson = getJSESLintPackageJson;
/**
 * Generates a package.json for a Next.js app that uses JavaScript and Sass.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getJSSassPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest"
	},
	"license": "MIT",
	"devDependencies": {
		"sass": "latest"
	}
}
`;
exports.getJSSassPackageJson = getJSSassPackageJson;
/**
 * Generates a package.json for a Next.js app that uses JavaScript, Sass and ESLint.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getJSSassESLintPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest"
	},
	"license": "MIT",
	"devDependencies": {
        "eslint": "8.11.0",
		"eslint-config-next": "12.1.0",
		"sass": "latest"
	}
}
`;
exports.getJSSassESLintPackageJson = getJSSassESLintPackageJson;
/**
 * Generates a package.json for a Next.js app that uses JavaScript, Sass and MongoDB.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getJSSassMongoPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest",
        "mongoose": "latest"
	},
	"license": "MIT",
	"devDependencies": {
		"sass": "latest"
	}
}
`;
exports.getJSSassMongoPackageJson = getJSSassMongoPackageJson;
/**
 * Generates a package.json for a Next.js app that uses JavaScript, ESLint and Mongo.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getJSESLintMongoPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest",
        "mongoose": "latest"
	},
	"license": "MIT",
	"devDependencies": {
		"eslint": "8.11.0",
		"eslint-config-next": "12.1.0"
	}
}
`;
exports.getJSESLintMongoPackageJson = getJSESLintMongoPackageJson;
/**
 * Generates a package.json for a Next.js app that uses JavaScript, Sass and ESLint.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getJSSassESLintMongoPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest",
        "mongoose": "latest"
	},
	"license": "MIT",
	"devDependencies": {
		"eslint": "8.11.0",
		"eslint-config-next": "12.1.0",
        "sass": "latest"
	}
}
`;
exports.getJSSassESLintMongoPackageJson = getJSSassESLintMongoPackageJson;
/**
 * Generates a package.json for a Next.js app that uses TypeScript.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getTSPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start",
        "type-check": "tsc"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest"
	},
	"license": "MIT",
	"devDependencies": {
		"@types/node": "latest",
		"@types/react": "latest",
		"@types/react-dom": "latest",
		"typescript": "latest"
	}
}
`;
exports.getTSPackageJson = getTSPackageJson;
/**
 * Generates a package.json for a Next.js app that uses TypeScript and MongoDB.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getTSMongoPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start",
        "type-check": "tsc"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest",
        "mongoose": "latest"
	},
	"license": "MIT",
	"devDependencies": {
		"@types/node": "latest",
		"@types/react": "latest",
		"@types/react-dom": "latest",
		"typescript": "latest"
	}
}
`;
exports.getTSMongoPackageJson = getTSMongoPackageJson;
/**
 * Generates a package.json for a Next.js app that uses TypeScript and ESLint.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getTSESLintPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start",
        "type-check": "tsc"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest"
	},
	"license": "MIT",
	"devDependencies": {
		"@types/node": "latest",
		"@types/react": "latest",
		"@types/react-dom": "latest",
        "eslint": "latest",
		"eslint-config-next": "latest",
		"typescript": "latest"
	}
}
`;
exports.getTSESLintPackageJson = getTSESLintPackageJson;
/**
 * Generates a package.json for a Next.js app that uses TypeScript and Sass.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getTSSassPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start",
        "type-check": "tsc"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest"
	},
	"license": "MIT",
	"devDependencies": {
		"@types/node": "latest",
		"@types/react": "latest",
		"@types/react-dom": "latest",
        "sass": "latest",
		"typescript": "latest"
	}
}
`;
exports.getTSSassPackageJson = getTSSassPackageJson;
/**
 * Generates a package.json for a Next.js app that uses TypeScript, Sass and ESLint.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getTSSassESLintPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start",
        "type-check": "tsc"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest"
	},
	"license": "MIT",
	"devDependencies": {
		"@types/node": "latest",
		"@types/react": "latest",
		"@types/react-dom": "latest",
        "eslint": "latest",
		"eslint-config-next": "latest",
		"sass": "latest",
		"typescript": "latest"
	}
}
`;
exports.getTSSassESLintPackageJson = getTSSassESLintPackageJson;
/**
 * Generates a package.json for a Next.js app that uses TypeScript, Sass and MongoDB.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getTSSassMongoPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start",
        "type-check": "tsc"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest",
        "mongoose": "latest"
	},
	"license": "MIT",
	"devDependencies": {
		"@types/node": "latest",
		"@types/react": "latest",
		"@types/react-dom": "latest",
		"sass": "latest",
		"typescript": "latest"
	}
}
`;
exports.getTSSassMongoPackageJson = getTSSassMongoPackageJson;
/**
 * Generates a package.json for a Next.js app that uses TypeScript, ESLint and MongoDB.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getTSESLintMongoPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start",
        "type-check": "tsc"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest",
        "mongoose": "latest"
	},
	"license": "MIT",
	"devDependencies": {
		"@types/node": "latest",
		"@types/react": "latest",
		"@types/react-dom": "latest",
		"eslint": "latest",
		"eslint-config-next": "latest",
		"typescript": "latest"
	}
}
`;
exports.getTSESLintMongoPackageJson = getTSESLintMongoPackageJson;
/**
 * Generates a package.json for a Next.js app that uses TypeScript, Sass, ESLint and MongoDB.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
const getTSSassESLintMongoPackageJson = (name) => `{
    "name": "${name.toLowerCase().split(" ").join("-")}",
	"private": true,
	"scripts": {
		"dev": "next",
		"build": "next build",
		"start": "next start",
        "type-check": "tsc"
	},
	"dependencies": {
		"next": "latest",
		"react": "latest",
		"react-dom": "latest",
        "mongoose": "latest"
	},
	"license": "MIT",
	"devDependencies": {
		"@types/node": "latest",
		"@types/react": "latest",
		"@types/react-dom": "latest",
		"eslint": "latest",
		"eslint-config-next": "latest",
        "sass": "latest",
		"typescript": "latest"
	}
}
`;
exports.getTSSassESLintMongoPackageJson = getTSSassESLintMongoPackageJson;
/**
 * Generates a README file with the project's name.
 * @param name The name of the project.
 * @returns A string containing a Readme with the project's name.
 */
const getReadme = (name) => `# ${name}
`;
exports.getReadme = getReadme;
