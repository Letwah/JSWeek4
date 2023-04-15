class Plant {
  constructor(kind) {
    this.kindValue = kind;
  }

  get kind() {
    return this.kindValue;
  }
}

class housePlant extends Plant {
  #fullSun;

  constructor(kindValue, fullSun) {
    super(kindValue);
    this.#fullSun = fullSun;
  }

  get fullSun() {
    return this.#fullSun;
  }
}

class hardy extends housePlant {
  #ph;

  constructor(kindValue, fullSun, ph) {
    super(kindValue, fullSun);
    this.#ph = ph;
  }

  set acidity(acidity) {
    this._acidity = acidity;
  }
}

const _housePlant = new hardy("Monstera", "fullSun", 8);

console.log(_housePlant.fullSun);
console.log("kind", _housePlant.kind, "sun", _housePlant.acidity, "ph");

const _Plant = new Plant("Pilea", 4);
console.log(_Plant.kind);

const _acidity = new housePlant("ph", 4);
