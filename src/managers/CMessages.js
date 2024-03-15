import CString from "./CString";

const DECLARE_SERIAL = (className) => {};

export default class CMessages {
  constructor() {
    this.strings = [new CString(), new CString(), new CString()];
  }

  serialize() {
    return JSON.stringify(this.strings.map((str) => str.serialize()));
  }

  deserialize(data) {
    const parsedData = JSON.parse(data);
    this.strings.forEach((str, index) => str.deserialize(parsedData[index]));
  }
}

DECLARE_SERIAL(CMessages);
