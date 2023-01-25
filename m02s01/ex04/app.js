class Car {
  constructor(
    left = 0,
    top = 0,
    color = 'black',
    tireColor = 'black',
    capColor = 'white',
    areHazardsOn = false,
  ) {
    this.left = left;
    this.top = top;
    this.color = color;
    this.tireColor = tireColor;
    this.capColor = capColor;
    this.areHazardsOn = areHazardsOn;

    this.frame = document.createElement('div');
    this.frame.classList.add('frame');
    this.changePosition(this.left, this.top);

    this.createFragment();
  }

  createFragment() {
    this.car = this.createElement('div', ['car']);
    this.frame.append(this.car);

    // roof
    this.carTop = this.createElement('div', ['car__top']);
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    //body
    this.carBody = this.createElement('div', ['car__body']);
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    // light back
    this.lightBack = this.createElement('div', ['light', 'light--back']);
    this.carBody.append(this.lightBack);

    // light front
    this.lightFront = this.createElement('div', ['light', 'light--front']);
    this.carBody.append(this.lightFront);

    // wheel back
    this.wheelBack = this.createElement('div', [
      'wheel',
      'car__wheel',
      'car__wheel--back',
    ]);
    this.wheelBack.style.backgroundColor = this.tireColor;
    this.carBody.append(this.wheelBack);
    // wheel back cap
    this.wheelBackCap = this.createElement('div', ['wheel__cap']);
    this.wheelBackCap.style.backgroundColor = this.capColor;
    this.wheelBack.append(this.wheelBackCap);

    // wheel front
    this.wheelFront = this.createElement('div', [
      'wheel',
      'car__wheel',
      'car__wheel--front',
    ]);
    this.wheelFront.style.backgroundColor = this.tireColor;
    this.carBody.append(this.wheelFront);
    // wheel front cap
    this.wheelFrontCap = this.createElement('div', ['wheel__cap']);
    this.wheelFrontCap.style.backgroundColor = this.capColor;
    this.wheelFront.append(this.wheelFrontCap);
  }

  turnLightsOn() {
    // this.lightFront.style.backgroundColor = 'yellow';
    this.lightFront.classList.add('light--on');

    return this;
  }

  turnLightsOff() {
    this.lightFront.classList.remove('light--on');

    return this;
  }

  changePosition(left = 0, top = 0) {
    this.frame.style.left = `${left}px`;
    this.frame.style.top = `${top}px`;

    return this;
  }

  createElement(nodeName = '', classListArray = []) {
    const element = document.createElement(nodeName);
    // element.classList.add(...classListArray);

    classListArray.forEach((className) => {
      element.classList.add(className);
    });

    return element;
  }

  changeTireColor(tireColor) {
    this.wheelBack.style.backgroundColor = tireColor;
    this.wheelFront.style.backgroundColor = tireColor;

    return this;
  }

  changeCapColor(capColor) {
    this.wheelBackCap.style.backgroundColor = capColor;
    this.wheelFrontCap.style.backgroundColor = capColor;

    return this;
  }

  changeCarColor(color) {
    this.carTop.style.backgroundColor = color;
    this.carBody.style.backgroundColor = color;

    return this;
  }

  engageBreak() {
    this.lightBack.classList.add('light--on');

    return this;
  }

  disengageBreak() {
    this.lightBack.classList.remove('light--on');

    return this;
  }

  toggleHazards() {
    setInterval(() => {
      if (this.areHazardsOn == false) {
        this.lightFront.classList.add('light--on');
        this.lightBack.classList.add('light--on');
        this.areHazardsOn = true;
      } else {
        this.lightFront.classList.remove('light--on');
        this.lightBack.classList.remove('light--on');
        this.areHazardsOn = false;
      }
    }, 1000);

    return this;
  }

  render() {
    document.body.append(this.frame);

    // method chaining
    return this;
  }
}

const car = new Car(0, 250, 'red');
car.render();

/**
 * Folosind fisierele rezultate din exercitiul 04. Creeaza configurare pentru culoarea rotilor si a capacelor de roti si metode pentru schimbarea lor dinamica.
Creeaza metode numite engageBreak() si disenagageBreak() care vor aprinde respectiv stinge farul din spate.
Creeaza o metoda numita toggleHazards() care sa functioneze ca avarie si sa aprinda si sa stinga farurile repetat. Foloseste o proprietate numita areHazardsOn pentru a putea tine cont de statusul sistemului. (google setInterval)
 */
