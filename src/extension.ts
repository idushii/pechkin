import { commands, ExtensionContext, workspace, window } from "vscode";
import { HelloWorldPanel } from "./panels/HelloWorldPanel";
import { NodeDependenciesProvider } from "./utilities/tree";

export function activate(context: ExtensionContext) {
  // Create the show Pechkin command
  const showHelloWorldCommand = commands.registerCommand("pechkin.showHelloWorld", () => {
    HelloWorldPanel.render(context.extensionUri);
  });

  // Add command to the extension context
  context.subscriptions.push(showHelloWorldCommand);
}

const rootPath =
  workspace.workspaceFolders && workspace.workspaceFolders.length > 0
    ? workspace.workspaceFolders[0].uri.fsPath
    : undefined;

window.registerTreeDataProvider("nodeDependencies", new NodeDependenciesProvider(rootPath!));
