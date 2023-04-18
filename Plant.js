export class Plant {
  constructor(name, type, hardy) {
    (this._name = name), (this._type = type), (this._hardy = hardy);
  }
  set name(name) {
    this._name = name;
  }

  set type(type) {
    this._type = type;
  }

  set hardy(hardy) {
    this._hardy = hardy;
  }

  get plantInfo() {
    return `${this._name} is a ${this._type} and is ${this._hardy} plant.`;
  }
}
