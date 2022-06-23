# Clean Next.js Boilerplate CLI

![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/TinoMuzambi/CleanNextBoilerplateCLI?style=for-the-badge)
![npm (scoped)](https://img.shields.io/npm/v/@tinotech/clean-next-boilerplate?style=for-the-badge)
![npm](https://img.shields.io/npm/dw/@tinotech/clean-next-boilerplate?style=for-the-badge)
[![Node.js Package](https://github.com/TinoMuzambi/CleanNextBoilerplateCLI/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/TinoMuzambi/CleanNextBoilerplateCLI/actions/workflows/npm-publish.yml)
[![wakatime](https://wakatime.com/badge/user/6ff8627f-cb7f-4d1c-a080-4336f0a82762/project/ddb2540e-a494-4185-a959-5230affa37bd.svg)](https://wakatime.com/badge/user/6ff8627f-cb7f-4d1c-a080-4336f0a82762/project/ddb2540e-a494-4185-a959-5230affa37bd)

Generate a clean Next.js boilerplate with various base configurations. To get started, use the following command:

```bash
npx @tinotech/clean-next-boilerplate
```

To create a new app in a specific folder, you can send a name as an argument. For example, the following command will create a new Next.js app called `blog-app` in a folder with the same name:

```bash
npx @tinotech/clean-next-boilerplate blog-app
```

## Options

`@tinotech/clean-next-boilerplate` comes with the following options:

- -V, --version output the version number
- -y, --yes answer yes to all the prompts
- -h, --help display help for command

## Configurations

1. **with-javascript**
   The default and cleanest boilerplate with no extra dependencies or features.

2. **with-javascript-mongodb**
   A JavaScript Next.js boilerplate with the setup for integration with MongoDB.

3. **with-javascript-sass**
   A JavaScript Next.js boilerplate with the setup for using Sass. It includes the newer `use` and `forward` syntax and has some base styles separated into components and abstracts directories which can be customised.

4. **with-javascript-sass-mongodb**
   A JavaScript Next.js boilerplate which is an amalgamation of the `with-javascript-mongodb` and `with-javascript-sass` configurations.

5. **with-typescript**
   The default Next.js boilerplate setup for using TypeScript instead of JavaScript.

6. **with-typescript-mongodb**
   A TypeScript Next.js boilerplate with the setup for integration with MongoDB.

7. **with-typescript-sass**
   A TypeScript Next.js boilerplate with the setup for using Sass. It includes the newer `use` and `forward` syntax and has some base styles separated into components and abstracts directories which can be customised.

8. **with-typescript-sass-mongodb**
   A TypeScript Next.js boilerplate which is an amalgamation of the `with-typescript-mongodb` and `with-typescript-sass` configurations.

9. **with-eslint**
   There are `with eslint` versions of all the boilerplates above. These configurations just have a stock eslint configuration obtained by running `npx next lint` and choosing the `strict` option.
