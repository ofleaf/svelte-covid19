const { default: svelte } = require('rollup-plugin-svelte');
const sveltePreprocess = require('svelte-preprocess');
const autoprefixer = require('autoprefixer');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  preprocess: sveltePreprocess({
    sourceMap: !production,
    includePaths: ['src'],
    scss: {
      prependData: `@import "src/assets/styles/_variables.scss";`
    },
    postcss: {
      plugins: [autoprefixer()]
    }
  }),
}