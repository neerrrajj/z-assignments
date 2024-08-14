# Assignment 6

## Question

Implement A/B testing with the help of next.js middleware

## Implementation

- Created a middleware.js file which protects the "/" route.
- In the middleware component, checked if the cookie already present. If not, a cookie ('a' or 'b') is set randomly
- Get that cookie in the home page and display ComponentA if the value of the cookie is 'a' else display ComponentB

## Run development server:

```sh
git clone https://github.com/neerrrajj/z-assignments.git
cd zemuria-interview/assignment-6
npm install
npm run dev
```
