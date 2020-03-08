// this file will not afect the sandbox but will
// afect the deployment and dowload

import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";

export default function config({
  ssr = false,
  dev = false,
  input,
  outputFile,
  format
}) {
  return {
    input,
    output: {
      sourcemap: true,
      format,
      name: "app",
      file: outputFile
    },
    plugins: [
      svelte({
        generate: ssr ? "ssr" : "dom",
        dev,
        hydratable: ssr,
        // we'll extract any component CSS out into
        // a separate file — better for performance
        css: css => {
          css.write("public/bundle.css");
        }
      }),

      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration —
      // consult the documentation for details:
      // https://github.com/rollup/rollup-plugin-commonjs
      resolve(),
      commonjs(),

      // If we're building for production (npm run build
      // instead of npm run dev), minify
      !dev && terser()
    ]
  };
}