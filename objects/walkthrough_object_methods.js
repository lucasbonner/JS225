// let me = {
//   firstName: "Lucas",
//   lastName: "Doe",
// };

let me = {};
me.firstName = "Lucas";
me.lastName = "Bonner";

let friend = {
  firstName: "Hunter",
  lastName: "Sudduth",
};

let mother = {
  firstName: "Christine",
  lastName: "Bonner",
};

let father = {
  firstName: "Don",
  lastName: "Bonner",
};

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

fullName(me);
fullName(friend);

function rollCall(collection) {
  collection.forEach(fullName);
}


let people = {
  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(people.fullName);
  },

  add: function(person) {
    if (this.isInValidPerson(person)) {
      return;
    }

    this.collection.push(person);
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator,i) {
      if (comparator.firstName === person.firstName &&
        comparator.lastName === person.lastName) {
          index = i;
        }
    });

    return index;
  },

  remove: function(person) {
    let index;
    if (this.isInValidPerson(person)) {
      return;
    }

    index = this.getIndex(person);
    if (index === -1) {
      return;
    }

   this.collection.splice(index, 1);
  },

  isInValidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },

  get: function(person) {
    if (this.isInValidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInValidPerson(person)) {
      return;
    }

    let exisitingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

people.rollCall();
people.remove({firstName: 'John', lastName: 'Smith'});
console.log(people.getIndex(friend));
people.remove(friend);
console.log(people.getIndex(friend));
