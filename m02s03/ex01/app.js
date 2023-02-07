class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = 150;
    this.topReverseSpeed = -80;
  }

  accelerate(deltaSpeed = 1) {
    this.speed = this.speed + deltaSpeed;

    return this;
  }

  decelare(deltaSpeed = 1) {
    this.speed = this.speed - deltaSpeed;

    return this;
  }

  // implementarea binecunsocutei metode
  // setSpeed + protectiile de supra si subaccelerare
}

const audi = new Car('Audi', 'black', 4, 50);
