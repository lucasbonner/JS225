let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let self = this;
    let tax = 3000;
    function specialDiscount() {
      if (self.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());