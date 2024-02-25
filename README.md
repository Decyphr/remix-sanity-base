# Remix & Sanity - Supercharge your web development
This project was bootstrapped with [Remix](https://remix.run) and [Sanity](https://www.sanity.io).

- [Remix docs](https://remix.run/docs)
- [Sanity docs](https://www.sanity.io/docs)


## Getting Started
This project will use [pnpm](https://pnpm.io/) as the package manager. Feel free to use npm or yarn if you prefer.

### Install
```bash
pnpm install
```

### Sanity
You can use the Sanity CLI to initialize a new project or connect to an existing one. If you don't have the CLI installed, you can install it globally:

Initialize Sanity within your project:
```bash
npx sanity@latest init --env
```

## Development
Run the Express server with Vite dev middleware:

```bash
pnpm dev
```

## Deployment
First, build your app for production:

```bash
pnpm build
```

Then run the app in production mode:

```bash
pnpm start
```