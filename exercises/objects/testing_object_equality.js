/*
In JavaScript, comparing two objects either with == or ===
checks for object identity. In other words, the comparison
 evaluates as true if it's the same object on either
 side of == or ===. This is a limitation, in a sense,
  because sometimes we need to check if two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

Write a function objectsEqual that accepts two object
 arguments and returns true or false depending on
  whether the objects have the same key/value pairs.
*/
// function arraysAreEqual(arr1, arr2) {
//   for (let i = 0; i <= arr1.length; i++) {
//     if (isNaN(arr1[i]) && isNaN(arr2[i])) {
//       continue;
//     }

//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }

//   return true;
// }
// function objectsEqual(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }

//   if (!arraysAreEqual(Object.keys(obj1), Object.keys(obj2))) {
//     return false;
//   } else if (!arraysAreEqual(Object.values(obj1), Object.values(obj2))) {
//     return false;
//   }

//   for (let prop in obj1) {
//     if (isNaN(obj1[prop]) && isNaN(obj2[prop])) {
//       continue;
//     }


//     if (obj2[prop] === undefined) {
//       return false;
//     }
//   }
//   return true;
// }
function objectsEqual(a, b) {
  if (a === b) {
    return true;
  }

  return (keysMatch(a, b) && valuesMatch(a, b));
}

function keysMatch(a, b) {
  const aKeys = Object.getOwnPropertyNames(a).sort();
  const bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key, index) => key === bKeys[index]);
}

function valuesMatch(a, b) {
  const aKeys = Object.getOwnPropertyNames(a).sort();

  return aKeys.every(key => a[key] === b[key]);
}

console.log('Should be: true');

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: NaN}, {a: 'foo', b: NaN}));  // true
console.log(objectsEqual({a: true, b: false}, {a: true, b: false}));  // true
console.log(objectsEqual({a: true, b: false}, {b: false, a: true}));  // true
console.log(objectsEqual({a: 'foo', b: { this: 'that'}}, {a: 'foo', b: { this: 'that'}}));  // true
console.log(objectsEqual({a: 'foo', b: ['this', 'that']}, {a: 'foo', b: ['this', 'that']}));  // true
console.log(objectsEqual({a: 'foo', b: { this: 'that', other: { one: 'one'}}},
                         {a: 'foo', b: { this: 'that', other: { one: 'one'}}}));  // true

console.log('Should be: false');

console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo', c: '1'}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo', b: { this: 'that'}}, {a: 'foo', b: { this: 'other'}}));  // false
console.log(objectsEqual({a: 'foo', b: ['this']}, {a: 'foo', b: ['this', 'that']}));  // false
console.log(objectsEqual({a: 'foo', b: { this: 'that', other: { one: 'one'}}},
                         {a: 'foo', b: { this: 'that', other: { one: 'two'}}}));  // false
