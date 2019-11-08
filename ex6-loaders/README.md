# Exercise 6: Loaders

## More than Javascript

We are now further along our development of the app. We now have a basic
webpack configuration that handles the generation of the HTML and we now placed
our CSS inside the `src` directory. Let's configure webpack to load it too!

1.  Install the dependencies with `npm install` or `yarn install`.
2.  Review the configuration in `webpack.config.js`.
3.  Review the `package.json` file. We now have a `serve` command.
4.  Try to run the application with `yarn serve` and browse to `http://localhost:8080`.

As you can see the styles are missing. Let's add them by using webpack.

1. Let's include the styles in our `src/index.js` file with an ESM import of `src/css/style.css`
2. Observe how our build is now broken.
3. Add two new loaders to our project with `npm install --save-dev css-loader style-loader`.
4. Extend the configuration in `webpack.config.js` to use the two loaders.
   Ensure they are in the correct order.
5. Notice how the build is still broken.
6. Comment out the `@font-face` rule in our style.
7. Uncomment it again and let's add the `file-loader` to our project to handle fonts.
8. Check the results in the webpage

Our application is now styled!

Bonus: Try to include a logo in the header
The logo file can be found in `src/images/logo.jpg` and you should include it using javascript.

We now have to fix our application. Let's write our first webpack configuration file!

1.  Add a `webpack.config.js` with the correct configuration for the entry.
2.  Try to run `yarn dev` again and see that the bundling is successful
3.  Open `index.html` in your browser. The application is still broken, why?

We now have to finish the job and generate our bundle in the expected location.

1.  Add a configuration option for our outputs to the `webpack.config.js` file.
2.  Re-run `yarn dev`
3.  Check that our application now works again!
