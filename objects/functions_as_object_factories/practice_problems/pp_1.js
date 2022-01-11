/*
Consider the code below:
Think about what is necessary and unnecessary
in this code. Where is there duplication?
*/
let chile = {
  name: 'The Republic of Chile',
  continent: 'South America',
  getDescription() {
    return this.name + ' is located in ' + this.continent + '.';
  },
};

let canada = {
  name: 'Canada',
  continent: 'North America',
  getDescription() {
    return this.name + ' is located in ' + this.continent + '.';
  },
};

let southAfrica = {
  name: 'The Republic of South Africa',
  continent: 'Africa',
  getDescription() {
    return this.name + ' is located in ' + this.continent + '.';
  },
};
/*
method getDescription is repeated in the same form
in each object
however each object needs to hold unique values
for its name and continent properties
*/
