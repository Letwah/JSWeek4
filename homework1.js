class Plant {
  constructor(kind) {
    this._kind = kind;
  }

  kind() {
    return this._kind;
  }
}

class housePlant extends Plant{
  constructor(kind, fullSun) {
    super(kind);
    this.fullSun = fullSun;
  }

  Sun() {
    return this.fullSun;
  }
}

class hardy extends Plant {
  constructor(kind, fullSun, ph) {
    super(kind, fullSun);
    this.ph = ph;
  }

  acidity() {
    return this.ph / 4;
  }
}


const _housePlant = new hardy("Monstera", "fullSun", 8);
console.log("kind", _housePlant.kind(), "sun", _housePlant.acidity());


const _Plant = new Plant("Pilea", 4);
console.log(_Plant.kind());
