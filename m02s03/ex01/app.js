class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed = this.speed + 1;

    return this;
  }

  decelare() {
    this.speed = this.speed - 1;
  }
}

const audi = new Car('Audi', 'black', 4, 50);
