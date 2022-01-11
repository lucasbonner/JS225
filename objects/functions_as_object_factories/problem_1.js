/*
write makeCar function that works as shown above
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

let sedan = makeCar(8);
sedan.accelerate();
console.log(sedan.speed);
