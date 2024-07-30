var Car = /** @class */ (function () {
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  Car.prototype.start = function () {
    console.log("Car engine started");
  };
  return Car;
})();
var car1 = new Car("BMW", "X5", 2024);
car1.start();
