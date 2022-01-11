/*
Use your new definition of makeCar to create a hatchback
 car whose rate of acceleration is 9 mph/s.
*/

function makeCar(rate) {
  return {
    speed: 0,
    rate,
    accelerate() {
      this.speed += this.rate;
    },
  };
};

let hatchback = makeCar(9);
