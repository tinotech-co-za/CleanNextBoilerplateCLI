/**
 * Generates a Meta file containing meta tags for a web app.
 * @param name The name of the project.
 * @param typeScript Whether this project uses TypeScript or not
 * @returns	A string containing a Meta file for setting meta tags for the project.
 */
export const getMeta = (name: string, typeScript: boolean): string =>
	typeScript
		? `import Head from "next/head";

import { MetaProps } from "../interfaces";
import { BASE_URL } from "../utils";

const Meta: React.FC<MetaProps> = ({
	title,
	description,
	keywords,
	url,
	image,
}): JSX.Element => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="theme-color" content="#000000" />
		<meta name="keywords" content={keywords} />
		<meta name="description" content={description} />

		{/* <!-- Google / Search Engine Tags --> */}
		<meta itemProp="name" content={title} />
		<meta itemProp="description" content={description} />
		<meta itemProp="image" content={image} />

		{/* <!-- Facebook Meta Tags --> */}
		<meta property="og:url" content={url} />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content={image} />

		{/* <!-- Twitter Meta Tags --> */}
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:image" content={image} />

		<meta charSet="utf-8" />
		<link rel="icon" href="/favicon.ico" />
		<meta name={title} content={description} />
		<link rel="apple-touch-icon" href="/logo192.png" />
		<link rel="manifest" href="/manifest.json" />
		<title>{title}</title>

		{/* Add your preconnect links here */}
		<link rel="preconnect" href="https://a.storyblok.com" />
	</Head>
);

Meta.defaultProps = {
	title: "${name}",
	keywords: "next.js",
	description: "Your description here",
	image: "https://unsplash.it/1000",
	url: BASE_URL,
};

export default Meta;
`
		: `import Head from "next/head";

import { BASE_URL } from "../utils";

const Meta = ({ title, description, keywords, url, image }) => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="theme-color" content="#000000" />
		<meta name="keywords" content={keywords} />
		<meta name="description" content={description} />

		{/* <!-- Google / Search Engine Tags --> */}
		<meta itemProp="name" content={title} />
		<meta itemProp="description" content={description} />
		<meta itemProp="image" content={image} />

		{/* <!-- Facebook Meta Tags --> */}
		<meta property="og:url" content={url} />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content={image} />

		{/* <!-- Twitter Meta Tags --> */}
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:image" content={image} />

		<meta charSet="utf-8" />
		<link rel="icon" href="/favicon.ico" />
		<meta name={title} content={description} />
		<link rel="apple-touch-icon" href="/logo192.png" />
		<link rel="manifest" href="/manifest.json" />
		<title>{title}</title>

		{/* Add your preconnect links here. */}
		<link rel="preconnect" href="https://a.storyblok.com" />
	</Head>
);

Meta.defaultProps = {
	title: "${name}",
	keywords: "next.js",
	description: "Your description here",
	image: "https://unsplash.it/1000",
	url: BASE_URL,
};

export default Meta;
`;

/**
 * Generates the entry point for a Next.js app.
 * @param name The name of the project
 * @param typeScript Whether or not this project uses TypeScript
 * @returns A string containing the index file for the project.
 */
export const getIndex = (name: string, typeScript: boolean): string =>
	typeScript
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

/**
 * Generates a manifest for a Next.js app.
 * @param name The name of the project.
 * @returns A string containing the manifest.json for the project.
 */
export const getManifest = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses JavaScript.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getJSPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses JavaScript and MongoDB.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getJSMongoPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses JavaScript and ESLint.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getJSESLintPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses JavaScript and Sass.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getJSSassPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses JavaScript, Sass and ESLint.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getJSSassESLintPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses JavaScript, Sass and MongoDB.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getJSSassMongoPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses JavaScript, ESLint and Mongo.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getJSESLintMongoPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses JavaScript, Sass and ESLint.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getJSSassESLintMongoPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses TypeScript.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getTSPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses TypeScript and MongoDB.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getTSMongoPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses TypeScript and ESLint.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getTSESLintPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses TypeScript and Sass.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getTSSassPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses TypeScript, Sass and ESLint.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getTSSassESLintPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses TypeScript, Sass and MongoDB.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getTSSassMongoPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses TypeScript, ESLint and MongoDB.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getTSESLintMongoPackageJson = (name: string): string => `{
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

/**
 * Generates a package.json for a Next.js app that uses TypeScript, Sass, ESLint and MongoDB.
 * @param name The name of the project.
 * @returns A string containing the package file.
 */
export const getTSSassESLintMongoPackageJson = (name: string): string => `{
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

/**
 * Generates a README file with the project's name.
 * @param name The name of the project.
 * @returns A string containing a Readme with the project's name.
 */
export const getReadme = (name: string): string => `# ${name}
`;
