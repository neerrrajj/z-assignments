# Assignment 5

## Question

Implement a memoization function that caches the values of a computation intensive function

## Implementation

- Created an example function that should be computationally expensive called "add".
- Created a 'memoize' wrapper function which takes in the expensive operation and returns the memoized function.
- The memozing function takes in the arguments and creates a key which is used to store the values in the cache.
- If the key already exists, its corresponding value is returned, else the function is executed and its result is stored to the corresponding key in the cache.
