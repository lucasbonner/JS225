/*
Our application now needs to handle braking to
slow down. Extend the code from problem 1 to
handle specifying a braking rate for each car.
Also, add a method that tells the car to apply
 the brakes for one second. It should work like this:
*/

function makeCar(accelRate, brakeRate) {
  return {
    speed: 0,
    accelRate,
    brakeRate,
    accelerate() {
      this.speed += this.accelRate;
    },
    brake() {
      let newSpeed = this.speed - this.brakeRate;
      if (newSpeed === 0 || newSpeed <= 0) {
        this.speed = 0;
      } else {
        this.speed = newSpeed;
      }
    },
  };
};

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
