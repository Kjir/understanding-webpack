# Exercise 2: Multiple scripts

## Make it work

In this small application we started to write two separate files for our
functionality, to better organize our code.

1.  Include the scripts in our HTML. Check the result to see if we get what we expect.

## Make it better

Now that we made it work, we actually want to optimize for delivery. Let's
serve our javascript application from one single file instead of including two
files.

1. Create a file named `bundle.js` which is the concatenation of the `user.js` and `author.js`
2. Remove the inclusions of `user.js` and `author.js` from the HTML and use `bundle.js` instead.
3. Verify that the application still works as expected.

Did it work? If not, why not?

How can we fix this problem?
