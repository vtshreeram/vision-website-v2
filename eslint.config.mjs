import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
   baseDirectory: __dirname,
});

const eslintConfig = [
   ...compat.extends("next/core-web-vitals", "next/typescript"),
   {
      ignores: [
         "node_modules/**",
         ".next/**",
         "out/**",
         "build/**",
         "next-env.d.ts",
      ],
   },
   {
      rules: {
         // Disable all TypeScript ESLint rules
         "@typescript-eslint/no-explicit-any": "off",
         "@typescript-eslint/no-unused-vars": "off",
         "@typescript-eslint/ban-ts-comment": "off",

         // Disable React rules
         "react-hooks/exhaustive-deps": "off",
         "react/no-unescaped-entities": "off",
         "react/prop-types": "off",

         // Disable Next.js rules
         "@next/next/no-img-element": "off",

         // Disable general ESLint rules
         "no-var": "off",
         "jsx-a11y/anchor-is-valid": "off",

         // Disable all other warnings
         "no-unused-vars": "off",
         "no-undef": "off",
         "no-console": "off",
         "no-debugger": "off",
         "no-alert": "off",
         "no-unreachable": "off",
         "no-constant-condition": "off",
         "no-empty": "off",
         "no-extra-boolean-cast": "off",
         "no-extra-semi": "off",
         "no-func-assign": "off",
         "no-inner-declarations": "off",
         "no-invalid-regexp": "off",
         "no-irregular-whitespace": "off",
         "no-obj-calls": "off",
         "no-sparse-arrays": "off",
         "no-unexpected-multiline": "off",
         "use-isnan": "off",
         "valid-typeof": "off",
      },
   },
];

export default eslintConfig;
