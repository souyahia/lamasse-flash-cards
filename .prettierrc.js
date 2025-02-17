/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  tailwindFunctions: ["cn", "cva"],
};
