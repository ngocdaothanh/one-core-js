This is a demo showing how to merge (bundle)
[core-js](https://github.com/zloirock/core-js)
polyfill files into one file, using
[rollup](https://rollupjs.org/)
and
[@rollup/plugin-commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs).
If you just want to use core-js bundle, see:
[core-js-bundle](https://github.com/zloirock/core-js/tree/master/packages/core-js-bundle).

Create one file `es6polyfills.js` containing all ES6 polyfills from core-js:

```sh
npm install
npm run build
```
