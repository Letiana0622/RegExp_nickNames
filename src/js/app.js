export default class Validator {

  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    let checkForSymbols = /^[^0-9_-][A-Za-z0-9_-]*[^0-9_-]$/.test(this.name)
    let checkForSequence = /\d{4,}/g.test(this.name);
    if (!checkForSymbols || checkForSequence) {
      throw new Error ('введено некорректное значение');
    }
  }
}