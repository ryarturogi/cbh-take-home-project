# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Here are some reasons why:

- The code defines constants for the trivial partition key and maximum partition key length. This makes the code easier to read and modify, and ensures that these values are consistent across the module.
- The createHash and stringify helper functions improve readability and reduce repetition in the code. They also provide a consistent way to create SHA3-512 hashes and stringify non-string data throughout the module.
- The exports.deterministicPartitionKey function uses a simple and clear if-else logic to determine the candidate partition key. It first checks if the event has a partition key property and uses that as the candidate if it exists. Otherwise, it creates a hash from a stringified version of the event object.
- The function also ensures that the candidate partition key is always a string by using the stringify helper function.
- Finally, the function checks if the candidate partition key is too long and creates a hash from it if it is. This ensures that the final partition key is always within the maximum length limit.

- O(1) time complexity
- O(1) space complexity
