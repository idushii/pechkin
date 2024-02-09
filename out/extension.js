"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode_1 = require("vscode");
const HelloWorldPanel_1 = require("./panels/HelloWorldPanel");
const tree_1 = require("./utilities/tree");
function activate(context) {
    // Create the show Pechkin command
    const showHelloWorldCommand = vscode_1.commands.registerCommand("pechkin.showHelloWorld", () => {
        HelloWorldPanel_1.HelloWorldPanel.render(context.extensionUri);
    });
    // Add command to the extension context
    context.subscriptions.push(showHelloWorldCommand);
}
exports.activate = activate;
const rootPath = vscode_1.workspace.workspaceFolders && vscode_1.workspace.workspaceFolders.length > 0
    ? vscode_1.workspace.workspaceFolders[0].uri.fsPath
    : undefined;
vscode_1.window.registerTreeDataProvider("nodeDependencies", new tree_1.NodeDependenciesProvider(rootPath));
//# sourceMappingURL=extension.js.map