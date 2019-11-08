# Exercise 9: Code splitting

## Loading on-demand

We decided to go for the long Biography on our authors. We only display the Bio
after the user clicks on a button since not everybody might be interested in
it. This means we now load the long description with our bundle.
Let's use code-splitting to create a separate chunk that will be loaded only if
users click on the button.

1. Install dependencies with `npm install` or `yarn install`
2. Inspect the file in `src/author.js`
3. Bundle your application with `yarn prod`
4. Inspect the generated bundle in `dist/main.js`. Do you see the long text in there?
5. Change the `src/author.js` to use the dynamic `import()` function.
   Hint: The `import()` function returns a promise.
6. Bundle the application again and check in `dist` that you have 2 files now.
7. Open `index.html` in your browser with the network tab open.
8. Click on the `Show bio` button and verify that the code gets downloaded.
