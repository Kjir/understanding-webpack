# Exercise 5: Entries and Outputs

## Creating your first webpack configuration

We decided to rename the main script of our app: it is now `src/app.js`. We
also updated the `index.html` file to point to a `bundle.js` file in the same
directory.

1.  Install the dependencies with `npm install` or `yarn install`.
2.  Try to run `yarn dev` and see that it doesn't work.

We now have to fix our application. Let's write our first webpack configuration file!

1.  Add a `webpack.config.js` with the correct configuration for the entry.
2.  Try to run `yarn dev` again and see that the bundling is successful
3.  Open `index.html` in your browser. The application is still broken, why?

We now have to finish the job and generate our bundle in the expected location.

1.  Add a configuration option for our outputs to the `webpack.config.js` file.
2.  Re-run `yarn dev`
3.  Check that our application now works again!
