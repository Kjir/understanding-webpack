# Exercise 8: Tree-shaking

## Removing unused code

We added a description to our author. To generate our description we have a
very handy utility function that will take care of finding the text for us. We
chose to include only a short description rather than a long one, but the long
description is still included in the code that we send down the wire. Let's fix
this.

1. Install dependencies with `npm install` or `yarn install`
2. Inspect the utils file in `src/util.js`
3. Bundle your application with `yarn prod`
4. Inspect the generated bundle in `dist/main.js`. Do you see the long text in there?
5. Change the `src/util.js` so that tree-shaking will work.

Once you get tree-shaking to work, let's inspect what is going on.

1. Edit `webpack.config.js` and uncomment the `usedExports` option
2. Bundle your application with `yarn none`.
3. Inspect the generated bundle in `dist/bundle.js`
4. Find the part with the `src/util.js` source code.
5. Notice if there are special comments
