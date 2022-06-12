export const getMeta: Function = (
	name: string
): string => `import Head from "next/head";

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

export const getIndex: Function = (
	name: string
): string => `const Home = () => {
	return (
		<main>
			<p>${name}</p>
		</main>
	);
};

export default Home;
`;

export const getManifest: Function = (name: string): string => `{
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

export const getJSPackageJson: Function = (name: string): string => `{
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

export const getJSMongoPackageJson: Function = (name: string): string => `{
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

export const getJSESLintPackageJson: Function = (name: string): string => `{
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

export const getJSSassPackageJson: Function = (name: string): string => `{
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

export const getJSSassESLintPackageJson: Function = (name: string): string => `{
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

export const getJSSassMongoPackageJson: Function = (name: string): string => `{
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

export const getJSESLintMongoPackageJson: Function = (
	name: string
): string => `{
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

export const getJSSassESLintMongoPackageJson: Function = (
	name: string
): string => `{
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

export const getTSPackageJson: Function = (name: string): string => `{
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
		"@types/node": "latest",
		"@types/react": "latest",
		"@types/react-dom": "latest",
		"typescript": "latest"
	}
}
`;

export const getReadme: Function = (name: string): string => `# ${name}
`;
