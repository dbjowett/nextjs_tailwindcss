# Next.js Template

This is a template for creating a Next.js project with Tailwind CSS and some additional packages to enhance your development experience. The template also suggests using pnpm as the package manager and provides instructions for configuring the ShadCn theme in your project. Follow the steps below to get started.

## Getting Started

To get started with this template, follow these steps:

1. Clone the repository:

```bash
git clone <repository_url>
cd nexttemplate
```

2. Install project dependencies using [pnpm](https://pnpm.io/) :

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

Your Next.js application should now be running locally at [http://localhost:3000](http://localhost:3000/) .
You can start building your project from here.

## Project Structure

The project has the following structure:

- `app/`: This directory contains the `globals.css` file where you can adjust the ShadCn theme, as instructed below.
- `app/pages`: This directory contains your Next.js pages. You can create new pages in this directory.
- `tailwind.config.js`: This is the configuration file for Tailwind CSS. You can customize Tailwind CSS settings in this file.
- `postcss.config.js`: This is the configuration file for PostCSS.

## Customizing ShadCn Theme

To adjust the ShadCn theme in your project, follow these steps:

1. Visit the ShadCn theme section on the [ShadCn website](https://ui.shadcn.com/themes) .
2. Choose a theme that you like.
3. Copy the CSS code for the selected theme.
4. Open the `styles/globals.css` file in your project.
5. Replace the existing ShadCn theme CSS (titled base) with the code you copied from the ShadCn website.

Now, your project will use the ShadCn theme you selected. You can further customize the theme by modifying the CSS in the `globals.css` file.

## Available Scripts

In the project directory, you can run the following scripts:

- `pnpm dev`: Runs the development server.
- `pnpm build`: Builds the production-ready application.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Lints the project code.

## Dependencies

This template includes the following dependencies:

- `@tailwindcss/typography`: Adds typography support to Tailwind CSS.
- `clsx`: A utility for constructing className strings.
- `next`: The Next.js framework.
- `react`: The React library.
- `react-dom`: The ReactDOM library.
- `tailwind-merge`: A utility for merging Tailwind CSS classes.
- `tailwindcss-animate`: An animation library for Tailwind CSS.

## Dev Dependencies

This template includes the following development dependencies:

- `@types/node`, `@types/react`, `@types/react-dom`: TypeScript type definitions for Node.js, React, and ReactDOM.
- `autoprefixer`: A PostCSS plugin to parse CSS and add vendor prefixes.
- `eslint` and `eslint-config-next`: ESLint and ESLint configuration for Next.js projects.
- `postcss`: A tool for transforming styles with JavaScript plugins.
- `tailwindcss`: The core library for Tailwind CSS.
- `typescript`: A superset of JavaScript that provides static types.

Feel free to explore and customize this template to build your Next.js project according to your requirements. Happy coding!
