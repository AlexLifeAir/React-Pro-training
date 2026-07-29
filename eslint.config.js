import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import boundaries from "eslint-plugin-boundaries";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
    {
        ignores: ["eslint.config.js", "dist", "build", "node_modules"],
    },
    js.configs.recommended,
    prettier,
    {
        files: ["src/**/*.{js,jsx,ts,tsx}"],

        languageOptions: {
            parser: tseslint.parser,
            ecmaVersion: 2020,
            sourceType: "module",
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },

        plugins: {
            react,
            "react-hooks": reactHooks,
            "jsx-a11y": jsxA11y,
            import: importPlugin,
            boundaries,
            "@typescript-eslint": tseslint.plugin,
        },

        settings: {
            react: {
                version: "detect",
            },
            "import/resolver": {
                typescript: {
                  project: "./tsconfig.app.json",
                },
              },
            "boundaries/elements": [
                { type: "shared", pattern: "src/6-shared/*" },
                { type: "entities", pattern: "src/5-entities/*" },
                { type: "features", pattern: "src/4-features/*" },
                { type: "widgets", pattern: "src/3-widgets/*" },
                { type: "pages", pattern: "src/2-pages/*" },
                { type: "app", pattern: "src/1-app/*" },
            ],
        },

        rules: {
            ...react.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            ...reactHooks.configs.recommended.rules,
            ...jsxA11y.configs.recommended.rules,
            ...importPlugin.configs.recommended.rules,
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                },
            ],

            "boundaries/element-types": [
                "error",
                {
                    default: "disallow",
                    rules: [
                        { from: "app", allow: ["pages", "widgets", "features", "entities", "shared"] },
                        { from: "features", allow: ["shared", "entities"] },
                        { from: "entities", allow: ["shared"] },
                        { from: "widgets", allow: ["shared", "features", "entities"] },
                        { from: "pages", allow: ["widgets", "features", "entities", "shared"] },
                    ],
                },
            ],
        },
    },
];
