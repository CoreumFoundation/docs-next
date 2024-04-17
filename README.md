# Coreum Documentation

Coreum is a 3rd-generation layer-1 enterprise-grade blockchain
built to serve as a core infrastructure for decentralized applications with ISO20022 compatibility,
IBC interoperability, and novel [Smart Tokens](https://www.coreum.com/smart-tokens).

This repository contains the code for the documentation, built using [Next.js](https://nextjs.org/).

## Development

To begin development, clone this repo, and simply run the command `npm install` in order to install all dependencies.

```sh
npm install
```

Once all dependencies are installed, you may begin the dev-server by running the command `npm run dev`. Once the dev-server is running, you may access it by visiting [`localhost:3000`](http://localhost:3000) on your machine. If port `3000` is already occupied, the output of running `npm run dev` in the console should reveal the port at which the server may be accessed (by default, it's port `3001`).

```sh
npm run dev
```

## Build

To build the project run `npm run build`.

```sh
npm run build
```

This command will execute `next build` command.

Running `next build` generates an optimized version of your application for production. HTML, CSS, and JavaScript files are created based on your pages. JavaScript is **compiled** and browser bundles are **minified** using the [Next.js Compiler](https://nextjs.org/docs/architecture/nextjs-compiler) to help achieve the best performance and support [all modern browsers](https://nextjs.org/docs/architecture/supported-browsers).

The output displays information about each route:

- `Size` – The number of assets downloaded when navigating to the page client-side. The size for each route only includes its dependencies.
- `First Load JS` – The number of assets downloaded when visiting the page from the server. The amount of JS shared by all is shown as a separate metric.

## Start the applicaiton in production mode

To start the application in production mode, run `npm run start`.

```sh
npm run start
```

This command will execute `next start` command. **Note**, that application should be compiled with `next build` first.

## Generate new page

To generate new page, run `npm run generate` in your terminal.

```sh
npm run generate -- --page <page> --category <category> --subcategory <subcategory>
```

This command has next flags:

- `--page` (required): The name of the page, that will be generated;
- `--category` (required): The category of the page, that will be generated;
- `--subcategory` (optional): The subcategory of the page, that will be generated.

When you will generate your page, it will be accessible by route: `/docs/<category>/<subcategory>/<page>`

*Examples*:

1. `npm run generate -- --page user --category tutorials --subcategory ibc`
  This command will generate the page, that will be accessible via: `/docs/tutorials/ibc/user`.
1. `npm run generate -- --page new_tutorial --category tutorials`
  This command will generate the page, that will be accessible via: `/docs/tutorials/new_tutorial`.

## Generate pages from sources

To generate pages from sources, setup all necessary information in [sources.json](./sources.json).

There is a map in the file, where the `key` is the `category`.

  *Examples*: `overview`, `tutorials`, etc.

To set `subcategory`, create or update the `key` with adding `/<subcategory>`.

  *Examples*: `tutorials/ibc`, `tutorials/golang`, etc.

Value of the map is the array of pages, that are going to be generated. Each item of the array should have next fields:

- `page` (required): The name of the page
- `source` (required): The link to the external source of the content of this page

*Example*:

```json
{
 "api/protobuf": [
   {
     "page": "protobuf",
     "source": "https://raw.githubusercontent.com/CoreumFoundation/coreum/5adfcc2d93e81b9344f0abaca7eab68fbca2ecba/docs/api.md"
   }
 ],
 "api/rust-protobuf": [
   {
     "page": "rust-protobuf",
     "source": "https://raw.githubusercontent.com/CoreumFoundation/coreum-rust-protobuf/main/README.md"
   }
 ],
 "tutorials": [
   {
     "page": "coreum-wasm-sdk",
     "source": "https://raw.githubusercontent.com/CoreumFoundation/coreum-wasm-sdk/main/README.md"
   },
   {
     "page": "coreum-ts-protobuf",
     "source": "https://raw.githubusercontent.com/CoreumFoundation/coreum-ts-protobuf/main/README.md"
   },
   {
     "page": "crust-for-development",
     "source": "https://raw.githubusercontent.com/CoreumFoundation/crust/master/README.md"
   }
 ]
}
```

When you finished with the setup of this file, run `npm run generate-pages` in your terminal. This command will generate all the pages using page names and sources, that you defined.

```sh
npm run generate-pages
```

*Example*: using the `sources.json` above, this will generate 5 pages with next routes:

- `/docs/api/protobuf`
- `/docs/api/rust-protobuf`
- `/docs/tutorials/coreum-wasm-sdk`
- `/docs/tutorials/coreum-ts-protobuf`
- `/docs/tutorials/crust-for-development`

## Update Sidebar Items

Make sure you've added all your newly generated pages in [sidebar constants](./components/Sidebar/constants.ts)

Find the required section and add the item there with next data:

- `name` (required): The display name of the page in the sidebar.
- `href` (required): The URL path to the page.
- `external` (optional): Indicates if the page should open in a new tab.
