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

  decelarate(deltaSpeed = 1) {
    this.speed = this.speed - deltaSpeed;

    return this;
  }

  setSpeed(speed = 0) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;

    return this;
  }

  // implementarea binecunsocutei metode
  // setSpeed + protectiile de supra si subaccelerare
}

const audi = new Car('Audi', 'black', 4, 50);

audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .decelarate()
  .decelarate()
  .decelarate();

let carSpeed = document.createElement('p');
carSpeed.innerText = `Audi speed is: ${audi.speed}`;
document.body.append(carSpeed);

audi.accelerate(12).decelarate(3).accelerate(4);

let newCarSpeed = document.createElement('p');
newCarSpeed.innerText = `Audi new speed is: ${audi.speed}`;
document.body.append(newCarSpeed);

audi.setSpeed(4).accelerate();

let newNewCarSpeed = document.createElement('p');
newNewCarSpeed.innerText = `Audi new speed is: ${audi.speed}`;
document.body.append(newNewCarSpeed);
