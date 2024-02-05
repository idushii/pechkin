"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode_1 = require("vscode");
const HelloWorldPanel_1 = require("./panels/HelloWorldPanel");
function activate(context) {
    // Create the show Pechkin command
    const showHelloWorldCommand = vscode_1.commands.registerCommand("pechkin.showHelloWorld", () => {
        HelloWorldPanel_1.HelloWorldPanel.render(context.extensionUri);
    });
    // Add command to the extension context
    context.subscriptions.push(showHelloWorldCommand);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map