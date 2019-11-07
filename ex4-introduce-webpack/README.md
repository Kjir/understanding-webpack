# Exercise 4: Introduce webpack

## Installing webpack

The same application from our previous excercise has now been reorganized a
little bit: the files have been moved into the `src` directory, an entrypoint
was created as `src/index.js` and they were all converted to ESM format.

1. Check out the different files to see how they look like.
2. Install webpack in our current project.
   - With npm: `npm install --save-dev webpack webpack-cli`
   - With yarn: `yarn add --dev webpack webpack-cli`

Some scripts were also added in `package.json` to give you a head start.

1. Check the `scripts` section in `package.json`
2. Try running the `dev` script and open the `index.html` file in your browser.
3. Try the same with `prod` and `none`.
4. Inspect the generated file in `dist/main.js`. Notice the difference between the different modes?
