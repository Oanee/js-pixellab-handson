const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 140,
  topReverseSpeed: -50,
  areLightsOn: false,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    this.setSpeed(this.speed + 1);
  },

  decelerate: function () {
    this.setSpeed(this.speed - 1);
  },

  setSpeed(speed = 0) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
    this.displaySpeed();
  },

  turnLightsOn() {
    this.areLightsOn = true;
  },

  turnLightsOff() {
    this.areLightsOn = false;
  },

  flashLights: function () {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 5000);
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.setSpeed(140);
audi.accelerate();

/**
 *Adauga metoda setSpeed(), proprietatile topSpeed si topReverseSpeed si implementeaza protectiile deja cunoscute.
Seteaza topSpeed la 140 apoi ruleaza metoda setSpeed() pentru a face viteza curenta 140.
Ruleaza metoda accelerate().
Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune, folosind metoda window.setTimeout().
 */
