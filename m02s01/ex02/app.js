class Vehicle {
  constructor(make, color, wheels, speed, topSpeed, topReverseSpeed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  accelerate() {
    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
  }

  setSpeed(speed = 0) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;

    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }
}

const bike = new Bicycle('Pegas', 'red', 8, 20);
bike.setSpeed(2);
bike.decelerate();
bike.decelerate();
bike.decelerate();
bike.setSpeed(-10);

/**
 * Creeaza o noua clasa care extinde Vehicle in mod similar cu Bicycle, numita Tricycle. Diferenta fiind ca o tricicleta are trei roti.
Instantiaza o tricicleta (marca Tryke, culoare red, viteza curenta 2, viteza minima -2, viteza maxima 9). O poti stoca intr-o variabila numita trike.
Seteaza viteza instantei trike la 0
Foloseste metoda decelerate() de trei ori, ce observi?
Seteaza viteza instantei trike la -10, ce observi?
 */

// topReverseSpeed nu e la fel cu pixeltab-ul

class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 3, speed, topSpeed, -2);
  }
}

const trike = new Tricycle('Tryke', 'red', 2, 9, -2);
trike.setSpeed(0);
trike.decelerate();
trike.decelerate();
trike.decelerate();
trike.speed(-10);
