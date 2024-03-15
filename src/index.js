import DocumentManager from "./models/DocumentManager";

const documentManager = new DocumentManager();
documentManager.onDraw();
documentManager.onEditChangeMessages();
documentManager.savedDocument();
documentManager.loadDocument();
documentManager.onDraw();
