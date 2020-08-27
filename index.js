const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, iteratee) {
      const newCollection =
        collection instanceof Array
          ? collection.slice()
          : Object.values(collection);

      for (let idx = 0; idx < newCollection.length; idx++)
        iteratee(newCollection[idx]);

      return collection;
    },

    map: function (array, callback) {
      if (!(array instanceof Array)) {
        array = Object.values(array);
      }

      const newArray = [];
      for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
      }
      return newArray;
    },

    find: function (collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },
    filter: function (collection, predicate) {
      let newArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArray.push(collection[i]);
        }
      }
      return newArray;
    },
    reduce: function (c = [], callback = () => {}, acc) {
      let collection = c.slice(0);

      if (!acc) {
        acc = collection[0];
        collection = collection.slice(1);
      }

      let len = collection.length;

      for (let i = 0; i < len; i++) {
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    uniq: function (array, isSorted, callback) {
      return [...new Set(array)];
    },
    compact: function (array) {
      return array.filter((e) => !!e); // two
    },
    size: function (obj) {
      return Object.keys(obj).length;
    },
    first: function (array, n) {
      if (!n) {
        return array[0];
      }
      return array.filter((e) => e < n + 1);
    },
    last: function (array, n = false) {
      if (!n) {
        return array[array.length - 1];
      }
      return array.slice(array.n, array.length);
    },
    keys: function (obj) {
      const keys = [];
      for (key in obj) {
        keys.push(key);
      }
      return keys;
    },
    values: function (obj) {
      const values = [];
      for (value in obj) {
        values.push(obj[value]);
      }
      return values;
    },
    functions: function (obj) {
      let functions = [];
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functions.push(key);
        }
      }
      return functions;
    },
  };
})();

fi.libraryMethod();

// console.log(fi.uniq([1, 1, 2, 3, 2, 4, 5, 6, 1]));
// console.log(fi.compact([1, 0, 'a', "", "maru", null, "choux", NaN, false, "doge", undefined]));

const testObject = {
  a: "",
  z: () => null,
  p: "",
  c: () => null,
  k: () => null,
};
// console.log(fi.size(testObject));
// console.log(fi.last([1, 2, 3, 4], 1));
// // reducer takes an array, reducer() and initialValue as argumentfunction
// // reduce(arr, reducer, initialValue);
// // {
// //   let accumulator = initialValue === undefined ? 0 : initialValue;
// //   for (let i = 0; i < arr.length; i++)
// //     accumulator = reducer(accumulator, arr[i], i, arr);
// //   return accumulator;
// // }
