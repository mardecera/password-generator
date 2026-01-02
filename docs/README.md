# Monorepo Documentation

This repository contains a **monorepo managed with pnpm and Turborepo**, designed to host **Expo (React Native)** and **Next.js** applications, as well as shared packages.

---

## Table of Contents

- [Monorepo Documentation](#monorepo-documentation)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Initialize the Monorepo](#initialize-the-monorepo)
    - [Install Dependencies at the Root](#install-dependencies-at-the-root)
    - [Install Turborepo](#install-turborepo)
    - [Workspace Configuration](#workspace-configuration)
    - [Required Tooling](#required-tooling)
    - [ESLint Configuration](#eslint-configuration)
  - [Apps](#apps)
    - [Expo App](#expo-app)
    - [Next.js App](#nextjs-app)
  - [Packages](#packages)
    - [Structure](#structure)
    - [Create and Use Packages](#create-and-use-packages)
  - [Pre-commit Hooks](#pre-commit-hooks)
  - [Common Commands](#common-commands)
  - [Notes](#notes)

---

## Getting Started

### Initialize the Monorepo

Create the root `package.json`:

```bash
pnpm init
```

### Install Dependencies at the Root

To install any dependency at the monorepo root:

```bash
pnpm add <package-name> -w
```

### Install Turborepo

Install Turborepo to orchestrate tasks across workspaces:

```bash
pnpm add -D turbo -w
```

### Workspace Configuration

Create a `pnpm-workspace.yaml` file:

```yaml
packages:
	- apps/*
	- packages/*
nodeLinker: isolated
onlyBuiltDependencies:
	- lefthook
	- sharp
```

> `nodeLinker: isolated` is required when applications manage dependencies independently.

### Required Tooling

Install shared tooling for linting, formatting, bundling, and Git hooks:

```bash
pnpm add -D @eslint/css @eslint/js @eslint/json @eslint/markdown @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-typescript eslint eslint-plugin-react globals jiti lefthook prettier rimraf rollup rollup-plugin-dts stylelint stylelint-config-standard stylelint-config-tailwindcss turbo typescript-eslint -w
```

### ESLint Configuration

Generate a flat ESLint configuration:

```bash
pnpm create @eslint/config
```

---

## Apps

All applications live inside the `apps/` directory.

### Expo App

Create a new Expo app:

```bash
pnpm dlx create-expo-app@latest apps/mobile
```

Log in to Expo:

```bash
pnpm expo login
```

Build the app using EAS (example):

```bash
pnpm -F mobile build-prod-android
```

Make sure you have an `eas.json` file configured.

### Next.js App

Create a Next.js application:

```bash
pnpm dlx create-next-app@latest apps/web
```

---

## Packages

Shared logic, UI components, and utilities live inside `packages/`.

### Structure

Each package should contain:

- `src/`
- `package.json`
- `rollup.config.js`
- `tsconfig.json`

### Create and Use Packages

Compile shared packages:

```bash
pnpm compile
```

To add a shared package to a specific app:

```bash
pnpm add <package-name>:workspace:* -F <app-name>
```

---

## Pre-commit Hooks

This monorepo uses **Lefthook** for pre-commit hooks:

- Lint and format **only staged files**
- Run type-checking across the entire monorepo

---

## Common Commands

| Command            | Description                                         |
| ------------------ | --------------------------------------------------- |
| `pnpm install`     | Install all dependencies in the monorepo            |
| `pnpm check-types` | Run TypeScript checks for `apps/*` and `packages/*` |
| `pnpm format`      | Format all files in the monorepo                    |
| `pnpm lint`        | Run linting across the entire monorepo              |

---

## Notes

- This setup is optimized for **scalable multi-app development**
- Shared packages are built once and reused across apps
- Turborepo enables fast, cached, and parallel task execution
