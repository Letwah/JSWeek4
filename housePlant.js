import { Plant } from "./Plant.js";

export class housePlant extends Plant {
  constructor(_name, _type, _hardy, position) {
    super(_name, _type, _hardy);
  }

  set position(position) {
    this._position = position;
  }

  get positionLight() {
    return `${this._name} likes full sun`;
  }
}

// export class housePlant extends Plant {
//   #fullSun;

//   constructor(kindValue, fullSun) {
//     super(kindValue);
//     this.#fullSun = fullSun;
//   }

//   get fullSun() {
//     return this.#fullSun;
//   }
// }
