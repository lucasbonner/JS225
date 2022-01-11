/*
Reimplement makeList, so that it returns an Object that provides the interface shown above,
 including add, list, and remove methods.
*/
function makeList() {
  let collection = [];

  return {


    add(arg) {
      collection.push(arg);
      console.log(`${arg} added!`);
    },
    list() {
      collection.forEach(listItem => console.log(listItem));
    },
    remove(arg) {
      collection.splice(collection.indexOf(arg), 1);
      console.log(`${arg} removed!`);
    }
  };
}

let list = makeList();
list.add('peas');
// = peas added!
list.list();
// // = peas
list.add('corn');
// // = corn added!
list.list();
// // = peas
// // = corn
list.remove('peas');
// // = peas removed!
list.list();
// // = corn
console.log(list.collection);
