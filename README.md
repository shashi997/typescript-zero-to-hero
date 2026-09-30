# typescript-zero-to-hero

## Installation

```bash
npm init -y
npm install -D typescript

```

---

## Running the Local TypeScript Compiler (`tsc`)

To use the local compiler version installed in your project, choose one of these methods:

* **Use `npx**`: Type `npx tsc -v` or `npx tsc` to execute the local version of the TypeScript compiler without requiring a global installation.
* **Use npm Scripts**: Open your `package.json` file and add custom scripts under the `"scripts"` object:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "ts": "tsc -v",
  * "dev": "tsc index.ts"
}

```

* Run `npm run ts` to check the version.
* Run `npm run dev` to compile your TypeScript file using the compiler.

> **Note:** Running `npx tsc --init` is **not required** to run `tsc` locally; it is only used to generate an optional `tsconfig.json` configuration file. You can run `npx tsc` immediately after a local installation to compile your files using TypeScript's built-in default settings.

---

## What `npx tsc --init` Actually Does

* **Generates Configuration**: It creates a `tsconfig.json` file in your root directory.
* **Customizes Settings**: It lets you change options like the target ECMAScript version, module resolution, and strictness flags.
* **Optional Step**: If you do not create a `tsconfig.json`, TypeScript still works fine by falling back to its internal default rules when you run `npx tsc file.ts`.

---

## Build Scripts and Compilation Outputs

Update your `package.json` scripts to include a build command:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "ts": "tsc -v",
  "dev": "tsc index.ts",
  "build": "tsc"
}

```

If you run `npm run build`, you will get `index.d.ts`, `index.d.ts.map`, `index.js`, and `index.js.map` generated directly in your main root directory.

However, if you add `"outDir": "./dist"` to your `tsconfig.json`, running `npm run build` will neatly output all of those compiled files into the `dist` folder instead.

### Why Are All These Files Generated?

The generation of these extra files is controlled by settings in `tsconfig.json`:

```json
"sourceMap": true,
"declaration": true,
"declarationMap": true

```

Here is what each of those four generated files does:

### 1. `index.js` (The JavaScript File)

* **What it is**: This is the compiled, plain JavaScript version of your TypeScript code.
* **Why it's generated**: Browsers and Node.js cannot read TypeScript (`.ts`) files directly. They need standard JavaScript (`.js`) to execute. This file contains your code stripped of all TypeScript types.

### 2. `index.js.map` (JavaScript Source Map)

* **What it is**: A mapping file that connects your compiled JavaScript (`index.js`) back to your original TypeScript code (`index.ts`).
* **Why it's generated**: When an error occurs or when you use a debugger in your browser's Developer Tools, source maps allow the browser to point you to the exact line in your `.ts` file rather than the compiled `.js` file.

### 3. `index.d.ts` (Declaration File)

* **What it is**: A TypeScript type definition file. It contains only the types, interfaces, and function signatures of your code—no implementation logic.
* **Why it's generated**: This is generated when `"declaration": true` is enabled in your `tsconfig.json`. It is primarily used if you are building a library or package that other developers will import, allowing them to get autocomplete and type checking without seeing your underlying source code. *(Note: If you are just building a standard web app or Node app, you often don't need this).*

### 4. `index.d.ts.map` (Declaration Source Map)

* **What it is**: A source map specifically for your declaration file (`index.d.ts`), linking it back to the original source files for advanced editor navigation.

> **Tip:** Setting these output options to `false` in your configuration will stop generating these extra files if you don't need them.

---

## Using `tsx` for Development (TypeScript Execute)

For a much smoother development experience, you can install `tsx`:

```bash
npm install -D tsx

```

**`tsx`** is the easiest way to run TypeScript directly in Node.js without manual pre-compilation. Update your `package.json` scripts to use `tsx` for development:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "ts": "tsc -v",
  "dev": "tsx index.ts",
  "build": "tsc"
}

```

Now, when you run `npm run dev`, you can directly execute TypeScript on Node.js without needing to pre-compile your files first!


