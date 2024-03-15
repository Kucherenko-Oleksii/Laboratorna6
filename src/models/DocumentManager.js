import { str } from "ajv";
import CMessages from "../managers/CMessages";

export default class DocumentManager {
  constructor() {
    this.messages = new CMessages();
  }

  savedDocument() {
    const data = this.messages.serialize();
    console.log(`Document saved: ${data}`);
  }

  loadDocument() {
    const data = `["Hello", "World", "!"]`;
    this.messages.deserialize(data);
    console.log(
      `Document loaded: ${this.messages.strings.map((str) => str.str).join("")}`
    );
  }

  onDraw() {
    console.log(
      `Drawing messages: ${this.messages.strings
        .map((str) => str.str)
        .join("")}`
    );
  }

  onEditChangeMessages() {
    this.messages.strings[0].str = "Updated";
    this.messages.strings[1].str = "Message";
    this.messages.strings[2].str = "!!!";
    console.log(
      `Messages changed: ${this.messages.strings.map((str) => str.str)}`
    );
  }
}
