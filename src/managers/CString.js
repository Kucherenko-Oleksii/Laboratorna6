export default class CString {
  constructor(str = "") {
    this.str = str;
  }

  serialize() {
    return this.str;
  }

  deserialize(str) {
    this.str = str;
  }
}
