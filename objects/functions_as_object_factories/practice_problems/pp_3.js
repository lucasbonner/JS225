/*
We've decided that we want to track
which countries we've visited, and
 which we haven't. Alter the
 factory function so that the
 object it returns includes a property
 visited with a value of false.
*/
function makeCountry(name, continent) {
  return {
    name,
    continent,
    visited: false,
    getDescription() {
      console.log(this.name + " is located in", this.continent);
    }
  };
}
