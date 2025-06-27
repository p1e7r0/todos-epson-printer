# Gemini Project Helper

This file provides context to the Gemini agent to help it understand your project.

## Project Overview

This project is a React application that integrates with the Epson ePOS SDK.

## Development Principles

All implementations should adhere to the following principles:

- **DRY (Don't Repeat Yourself):** Avoid code duplication.
- **SOLID:** Follow the SOLID principles of object-oriented design.
- **KISS (Keep It Simple, Stupid):** Prefer simple solutions over complex ones.
- **YAGNI (You Ain't Gonna Need It):** Do not add functionality until it is necessary.
- **GRASP (General Responsibility Assignment Software Patterns):** Use GRASP patterns for assigning responsibilities to objects.
- **LoD (Law of Demeter):** A module should not have knowledge of the internal workings of the objects it manipulates.

## Project Architecture

Projects are structured using a feature-based architecture. The `src` directory contains three main folders:

- **`src/common`**: Contains reusable code, components, and utilities that could be part of a library and are used across multiple features.
- **`src/features`**: Contains all the application's features, with each feature grouped in its own directory.
- **`src/app`**: Contains the core application logic, which aggregates and connects the different features.

## Styling

We use **Tailwind CSS** for styling.

## State Management

- For simple, local component state, use `useState` and `useReducer`.
- For complex, global state, use `Redux Toolkit`.

## Common Commands

- **To run the development server:** `npm run dev`
- **To create a production build:** `npm run build`
- **To run tests:** `npm test`
- **To run the linter:** `npx eslint .`
