import * as assert from "assert";
import * as vscode from "vscode";

suite("Extension Test Suite", function () {
  vscode.window.showInformationMessage("Start all tests.");

  test("No terminal active on launch", function () {
    // Active terminal should be undefined
    assert.strictEqual(vscode.window.activeTerminal, undefined);
  });

  test("Toggle opens terminal correctly", function () {
    // Toggle the terminal
    vscode.commands.executeCommand("terminalbtn.toggle");

    // Active terminal should not be undefined
    assert.notStrictEqual(vscode.window.terminals.length > 0, undefined);
  });

  test("Toggle closes terminal correctly", function () {
    // Toggle the terminal
    vscode.commands.executeCommand("terminalbtn.toggle");

    // Active terminal should be undefined
    assert.strictEqual(vscode.window.activeTerminal, undefined);
  });
});
