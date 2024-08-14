# Assignment 3

## Question

Send multiple requests to a single endpoint with different payload at the same time and return a single promise. (The promise should not fail if one of the request returns an error)

## Implementation

- Created an async function which takes in the endpoint and the different payloads in an array.
- Inside the function, call the endpoint using the different payloads and return the data (if the fetch was successful) or error (if the fetch failed)
- Used "Promise.allSettled" to await the async function as we have to wait till all the promises are settled, irrespective of being fullfilled or rejected and then return the result array.
- Called the async function and then logged the result to the console.
