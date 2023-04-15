export class housePlant extends Plant {
  #fullSun;

  constructor(kindValue, fullSun) {
    super(kindValue);
    this.#fullSun = fullSun;
  }

  get fullSun() {
    return this.#fullSun;
  }
}
