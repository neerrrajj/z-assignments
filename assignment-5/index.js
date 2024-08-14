const memoize = (fn) => {
  // creating cache using Map data structure
  const map = new Map();

  const temp = (...args) => {
    // key is created using the args
    const keys = args.join("");

    // return the val, if the key already exists in the cache
    if (map.has(keys)) {
      console.log("returning from cache");
      return map.get(keys);
    }

    // execute the function and store the key, val pair in the cache
    const res = fn(...args);
    map.set(keys, res);
    return res;
  };
  return temp;
};

const add = (a, b) => a + b;

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 3));
console.log(memoizedAdd(4, 5));
console.log(memoizedAdd(1, 3));

// Output:
// 3
// returning from cache
// 3
// 4
// 9
// returning from cache
// 4
