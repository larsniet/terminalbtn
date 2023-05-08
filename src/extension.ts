import * as vscode from "vscode";

// Command ID as defined in package.json
const commandId = "terminalbtn.toggle";

/**
 * @description Toggles the terminal using the built-in command from VS Code
 * @returns {void}
 **/
function toggleTerminal(): void {
  vscode.commands.executeCommand("workbench.action.terminal.toggleTerminal");
}

/**
 * @description Creates the status bar item
 * @returns {void}
 **/
function createStatusBarItem(): void {
  // Create a status bar item
  const statusBarItem: vscode.StatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );

  // Set the item property
  statusBarItem.text = `$(terminal)`; // Octicon icon name
  statusBarItem.tooltip = "Show/Hide Terminal";
  statusBarItem.command = commandId;

  // Show the item
  statusBarItem.show();
}

/**
 * @description Function that is called when the extension is activated (which is onStartupFinish)
 * @param {vscode.ExtensionContext} context
 * @returns {void}
 */
function activate(context: vscode.ExtensionContext) {
  console.log('The extension "Terminalbtn" is now active! 🎉');

  // Create the status bar item
  createStatusBarItem();

  // Register the toggle command
  const toggle = vscode.commands.registerCommand(commandId, () => {
    toggleTerminal();
  });

  // Add the command to the context
  context.subscriptions.push(toggle);
}

/**
 * @description Function that is called when the extension is deactivated (returns nothing because it's not neccessary)
 * @returns {void}
 */
function deactivate(): void {}

module.exports = {
  activate,
  deactivate,
};
