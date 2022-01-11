/*
Let's add a method to our country objects that
lets us visit them. Implement a method
 visitCountry that sets the visited property to true.
*/
function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      console.log(this.name + " is located in", this.continent);
    },
    visitCountry() {
      this.visited = true;
    },
  };
}
