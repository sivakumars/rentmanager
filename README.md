# sivakumars.github.io/rentmanager
Rent management - This is a reasonably comprehensive App built with angular v7.0 with Firebase as the backend DB for persisting user data and using Firebase authentication services - It maintains a user collection based on the due they owe and it also has a settings page to govern features like adding and editing users.

## TODO
migrate the styles framework from bootstrap to  tailwindCSS to customize the styles<br/>
Add authentication services for social media  sites like Facebook and Google

## Get started

### Clone the repo

```shell
git clone https://github.com/bryanforbes/rentmanager
cd rentmanager
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs `lite-server` on port `3000`.

Shut it down manually with `Ctrl-C`.

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run build:watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.
* `npm run lint` - runs `tslint` on the project files.
* `npm run serve` - runs `lite-server`.
