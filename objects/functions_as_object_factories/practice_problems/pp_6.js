/*
Finally, let's update our getDescription
 function to reflect the visited data.
  Assuming that canada.visited is false,
  your code should look like this:
*/
function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      let visitStr;
      if (this.visited) {
        visitStr = "I have visited " + this.name;
      } else {
        visitStr = "I haven't visited " + this.name;
      }


      console.log(this.name + " is located in " + this.continent + " " + visitStr);
    },
    visitCountry() {
      this.visited = true;
    },
  };
}

let canada = makeCountry('Canada', 'North America');
canada.getDescription(); // "Canada is located in North America. I haven't visited Canada."
canada.visitCountry();
canada.getDescription(); // "Canada is located in North America. I have visited Canada."
