# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
First, on the line, it's possible to remove validation if the event object is non-null by just putting "?" to perform the same functionality, being able to remove two lines of code with this change.
As a second step, we can use the conditional "?:" replacing the ifs and else structure for evaluating the "candidate" object, thus reducing the number of lines from 7 to 1, making the code more readable and easier to understand.
Finally, so that we can track the occurrence of an error during the execution of the method, all of it was placed inside a try catch structure to handle any possible errors.