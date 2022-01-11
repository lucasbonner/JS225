/*
This situation seems a bit problematic,
though. Suppose we want to add a country
that we've already visited. Alter the
factory function to use an optional
visited parameter with a default value of false.
*/
function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      console.log(this.name + " is located in", this.continent);
    }
  };
}
