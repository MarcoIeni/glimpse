---
sidebar_position: 6
---

In the following, you will find the default Glimpse key bindings.
| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| v | Select/expand region | editor.action.smartSelect.grow |
| ␣ | Commands | workbench.action.showCommands |
| ↹ | Last editor | [ workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup, list.select ] |
| ! | Show terminal | workbench.action.terminal.focus |
| " | Open new external terminal | workbench.action.terminal.openNativeConsole |
| ' | Show terminal | workbench.action.terminal.focus |
| * | Search Selection in Project | [ editor.action.addSelectionToNextFindMatch, workbench.action.findInFiles, search.action.focusSearchList ] |
| / | Search in project | workbench.action.findInFiles |
| ; | Toggle comment | editor.action.commentLine |
| 0 | Focus on files explorer | workbench.files.action.focusFilesExplorer |
| 1 | Focus 1st editor group | workbench.action.focusFirstEditorGroup |
| 2 | Focus 2nd editor group | workbench.action.focusSecondEditorGroup |
| 3 | Focus 3rd editor group | workbench.action.focusThirdEditorGroup |
| 4 | Focus 4th editor group | workbench.action.focusFourthEditorGroup |
| 5 | Focus 5th editor group | workbench.action.focusFifthEditorGroup |
| 6 | Focus 6th editor group | workbench.action.focusSixthEditorGroup |
| 7 | Focus 7th editor group | workbench.action.focusSeventhEditorGroup |
| 8 | Focus 8th editor group | workbench.action.focusEighthEditorGroup |

## Configuration

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| c | Open settings | workbench.action.openGlobalSettings |
| C | Open settings JSON | workbench.action.openSettingsJson |
| g | Glimpse: Configure | glimpse.configure |
| k | Open global key bindings | workbench.action.openGlobalKeybindings |
| K | Open global key bindings JSON | workbench.action.openGlobalKeybindingsFile |
| l | Open language settings | workbench.action.configureLanguageBasedSettings |
| s | Configure user snippets | workbench.action.openSnippets |
| w | Open workspace settings | workbench.action.openWorkspaceSettings |
| W | Open workspace settings JSON | workbench.action.openWorkspaceSettingsFile |

## Comment

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| f | Fold all block comments | editor.foldAllBlockComments |
| b | Toggle block comment | editor.action.blockComment |
| l | Toggle line comment | editor.action.commentLine |

## Debug

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| c | Continue debug | workbench.action.debug.continue |
| C | Continue to cursor | editor.debug.action.runToCursor |
| d | Start debug | workbench.action.debug.start |
| D | Run without debugging | workbench.action.debug.run |
| i | Step into | workbench.action.debug.stepInto |
| j | Jump to cursor | debug.jumpToCursor |
| o | Step out | workbench.action.debug.stepOut |
| p | Pause debug | workbench.action.debug.pause |
| R | Restart debug | workbench.action.debug.restart |
| s | Step over | workbench.action.debug.stepOver |
| S | Stop debug | workbench.action.debug.stop |
| v | REPL | workbench.debug.action.toggleRepl |
| w | Focus on watch view | workbench.debug.action.focusWatchView |
| W | Add to watch | editor.debug.action.selectionToWatch |

## Diff/Compare

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| c | Compare active file with clipboard | workbench.files.action.compareWithClipboard |
| d | Compare active file with | workbench.files.action.compareFileWith |
| s | Compare active file with saved | workbench.files.action.compareWithSaved |
| w | Toggle ignore trim whitespace | toggle.diff.ignoreTrimWhitespace |

## Error

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| e | Show error | editor.action.showHover |
| E | Show all errors | workbench.actions.view.problems |
| f | Fix error | editor.action.quickFix |
| n | Next error | editor.action.marker.nextInFiles |
| N | Previous error | editor.action.marker.prevInFiles |
| p | Previous error | editor.action.marker.prevInFiles |

## Editor

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| c | Close active editor | workbench.action.closeActiveEditor |
| C | Close other editors | workbench.action.closeOtherEditors |
| e | Show all editors | workbench.action.showAllEditorsByMostRecentlyUsed |
| E | Show all editors in active group | workbench.action.showEditorsInActiveGroup |
| h | Previous editor | workbench.action.previousEditor |
| H | Move editor into left group | workbench.action.moveEditorToLeftGroup |
| j | Next editor | workbench.action.nextEditor |
| J | Move editor into below group | workbench.action.moveEditorToBelowGroup |
| k | Previous editor | workbench.action.previousEditor |
| K | Move editor into above group | workbench.action.moveEditorToAboveGroup |
| l | Next editor | workbench.action.nextEditor |
| L | Move editor into right group | workbench.action.moveEditorToRightGroup |
| n | New Untitled Editor | workbench.action.files.newUntitledFile |
| p | Pin editor | workbench.action.pinEditor |
| P | Unpin editor | workbench.action.unpinEditor |
| r | Revert the current editor | workbench.action.files.revert |
| s | Scratch editor | workbench.action.files.newUntitledFile |
| T | Reopen closed editor | workbench.action.reopenClosedEditor |
| 0 | First editor in group | workbench.action.firstEditorInGroup |
| $ | Last editor in group | workbench.action.lastEditorInGroup |

## File

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| d | Delete current file | [ workbench.files.action.showActiveFileInExplorer, deleteFile ] |
| f | Show file in explorer | workbench.files.action.showActiveFileInExplorer |
| l | Change file language | workbench.action.editor.changeLanguageMode |
| n | New file | explorer.newFile |
| o | Open with | explorer.openWith |
| O | Open in OS | revealFileInOS |
| p | Copy Path of Active File | copyFilePath |
| P | Copy Relative Path of Active File | copyRelativeFilePath |
| r | Rename file | [ revealInExplorer, renameFile ] |
| s | Save file | workbench.action.files.save |
| S | Save all files | workbench.action.files.saveAll |
| w | Open file in new window | workbench.action.files.showOpenedFileInNewWindow |

## Format

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| c | Format changes | editor.action.formatChanges |
| e | Format Editor | editor.action.formatDocument |
| E | Format editor with formatter | editor.action.formatDocument.multiple |
| f | Format region or buffer | editor.action.format |
| s | Format selection | editor.action.formatSelection |
| S | Format selection with formatter | editor.action.formatSelection.multiple |

## Git

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| a | Stage Changes | git.stageSelectedRanges |
| A | Stage Selected Ranges | git.stageSelectedRanges |
| b | Checkout | git.checkout |
| c | Commit | git.commit |
| C | Clone | git.clone |
| f | Fetch | git.fetch |
| F | Pull | git.pull |
| i | Initialize repository | git.init |
| l | Show log/timeline | timeline.focus |
| m | Merge | git.merge |
| p | Publish | git.publish |
| P | Push | git.push |
| s | Status | workbench.view.scm |
| u | Unstage | git.unstage |
| U | Unstage Selected Ranges | git.unstageSelectedRanges |

## GitHub Copilot

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| c | Copilot Chat | workbench.panel.chatSidebar.copilot |
| e | Explain this | github.copilot.interactiveEditor.explain |
| f | Fix this | github.copilot.interactiveEditor.fix |
| o | Open Completions Panel | github.copilot.generate |
| t | Toggle (Enable/Disable) Copilot | github.copilot.toggleCopilot |

## Help

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| d | Open VSCode Documentation | workbench.action.openDocumentationUrl |
| g | Open Glimpse Documentation | glimpse.openDocs |
| h | Describe thing at point | editor.action.showHover |
| i | Report VSCode Issue | workbench.action.openIssueReporter |
| k | Open global key bindings | workbench.action.openGlobalKeybindings |
| t | Open VSCode Tutorial | workbench.action.showInteractivePlayground |

## Insert

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| j | Insert line below | editor.action.insertLineAfter |
| k | Insert line above | editor.action.insertLineBefore |
| p | Paste as | editor.action.pasteAs |
| s | Insert snippet | editor.action.insertSnippet |

## Indent

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| d | Detect indentation | editor.action.detectIndentation |
| i | Change indentation | changeEditorIndentation |
| r | Reindent | editor.action.reindentlines |
| R | Reindent selected | editor.action.reindentselectedlines |
| s | Convert indentation to spaces | editor.action.indentationToSpaces |
| t | Convert indentation to tabs | editor.action.indentationToTabs |

## Jump

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| b | Go to breadcrumb | breadcrumbs.focusAndSelect |
| c | Go to previous change | workbench.action.editor.previousChange |
| C | Go to next change | workbench.action.editor.nextChange |
| d | Go to declaration | editor.action.revealDeclaration |
| g | Go to definition | editor.action.revealDefinition |
| h | Show call hierarchy | references-view.showCallHierarchy |
| i | Go to implementations | editor.action.goToImplementation |
| I | Find implementations | references-view.findImplementations |
| r | Go to reference | editor.action.goToReferences |
| R | Find references | references-view.findReferences |
| s | Go to symbol in buffer | workbench.action.gotoSymbol |
| S | Go to symbol in project | workbench.action.showAllSymbols |
| t | Go to type definition | editor.action.goToTypeDefinition |

## Project

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| f | Find file in project | workbench.action.quickOpen |
| p | Switch project | workbench.action.openRecent |
| R | Replace in files | workbench.action.replaceInFiles |

## Peek

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| d | Peek declaration | editor.action.peekDeclaration |
| h | Peek call hierarchy | editor.showCallHierarchy |
| i | Peek implementations | editor.action.peekImplementation |
| p | Peek definition | editor.action.peekDefinition |
| r | Peek references | editor.action.referenceSearch.trigger |
| R | Search all references in side bar | references-view.find |
| t | Peek type definition | editor.action.peekTypeDefinition |

## Quit

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| q | Quit VSCode window | workbench.action.closeWindow |
| Q | Quit all VSCode windows | workbench.action.quit |
| r | Reload window | workbench.action.reloadWindow |
| R | Reload window with extensions disabled | workbench.action.reloadWindowWithExtensionsDisabled |
| s | Save all and close window | [ workbench.action.files.saveAll, workbench.action.closeWindow ] |
| w | Close workspace | workbench.action.closeFolder |

## Refactor

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| . | Quick fix | editor.action.quickFix |
| e | Extract to function or variable | {editor.action.codeAction, {"kind":"refactor.extract"}} |
| i | Organize imports | editor.action.organizeImports |
| r | Rename Symbol | editor.action.rename |
| R | Refactor actions | editor.action.refactor |
| s | Execute source action | editor.action.sourceAction |

## Search

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| c | Clear Search Results | search.action.clearSearchResults |
| h | Highlight symbol | editor.action.wordHighlight.trigger |
| p | Search in project | workbench.action.findInFiles |
| P | Search Selection in Project | [ editor.action.addSelectionToNextFindMatch, workbench.action.findInFiles, search.action.focusSearchList ] |
| r | Replace | editor.action.startFindReplaceAction |
| R | Replace in files | workbench.action.replaceInFiles |

## Show

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| d | Show debug console | workbench.debug.action.toggleRepl |
| e | Show explorer | workbench.view.explorer |
| E | Show extensions | workbench.view.extensions |
| g | Show source control | workbench.view.scm |
| n | Show notification | notifications.toggleList |
| o | Show output | workbench.action.output.toggleOutput |
| p | Show problems | workbench.actions.view.problems |
| r | Show remote explorer | workbench.view.remote |
| s | Show search | workbench.view.search |
| t | Show test | workbench.view.extension.test |

## Toogle

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| b | Toggle side bar visibility | workbench.action.toggleSidebarVisibility |
| B | Toggle Activity Bar Visibility | workbench.action.toggleActivityBarVisibility |
| c | Toggle centered layout | workbench.action.toggleCenteredLayout |
| C | Toggle find case sensitive | toggleFindCaseSensitive |
| f | Toggle full screen | workbench.action.toggleFullScreen |
| i | Select icon theme | workbench.action.selectIconTheme |
| m | Toggle minimap | editor.action.toggleMinimap |
| p | Toggle panel visibility | workbench.action.togglePanel |
| P | Toggle maximized panel | workbench.action.toggleMaximizedPanel |
| t | Select theme | workbench.action.selectTheme |
| T | Toggle tab visibility | workbench.action.toggleTabsVisibility |
| w | Toggle word wrap | editor.action.toggleWordWrap |
| W | Toggle render whitespace | editor.action.toggleRenderWhitespace |
| z | Toggle zen mode | workbench.action.toggleZenMode |

## Test

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| a | Run all tests | testing.runAll |
| A | Debug all tests | testing.debugAll |
| f | Run current test file | testing.runCurrentFile |
| r | Re-run failed tests | testing.reRunFailTests |
| t | Select and run test | testing.runSelected |
| T | Select and debug test | testing.debugSelected |

## Window/Group

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| + | Enlarge group | workbench.action.increaseViewSize |
| = | Enlarge group | workbench.action.increaseViewSize |
| - | Shrink group | workbench.action.decreaseViewSize |
| c | Close group | workbench.action.closeEditorsInGroup |
| C | Close all other groups | workbench.action.closeEditorsInOtherGroups |
| h | Focus group left | workbench.action.focusPreviousGroup |
| H | Move in group left | workbench.action.moveActiveEditorGroupLeft |
| j | Focus group down | workbench.action.focusBelowGroup |
| J | Move in group down | workbench.action.moveActiveEditorGroupDown |
| k | Focus group up | workbench.action.focusAboveGroup |
| K | Move in group up | workbench.action.moveActiveEditorGroupUp |
| l | Focus group right | workbench.action.focusNextGroup |
| L | Move in group right | workbench.action.moveActiveEditorGroupRight |
| m | Maximize group | workbench.action.toggleEditorWidths |
| M | Maximize group and hide side bar | workbench.action.maximizeEditor |
| n | Duplicate workspace in new window | workbench.action.duplicateWorkspaceInNewWindow |
| N | Open new VSCode window | workbench.action.newWindow |
| o | Switch VSCode window | workbench.action.quickSwitchWindow |
| r | Reset editor widths | workbench.action.evenEditorWidths |
| s | Split editor down | workbench.action.splitEditorDown |
| v | Split editor right | workbench.action.splitEditor |
| w | Focus group right | workbench.action.focusNextGroup |
| W | Focus group left | workbench.action.focusPreviousGroup |
| x | Close all groups | workbench.action.closeAllGroups |
| z | Join all groups | workbench.action.joinAllGroups |

## Text

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| j | Move lines down | editor.action.moveLinesDownAction |
| k | Move lines up | editor.action.moveLinesUpAction |
| o | Open link | editor.action.openLink |
| u | To lower case | editor.action.transformToLowercase |
| U | To upper case | editor.action.transformToUppercase |
| w | Delete trailing whitespace | editor.action.trimTrailingWhitespace |

## Select/expand region

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| v | Grow selection | editor.action.smartSelect.grow |
| V | Shrink selection | editor.action.smartSelect.shrink |

## Zoom/Fold

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| + | Zoom In | workbench.action.zoomIn |
| = | Zoom In | workbench.action.zoomIn |
| - | Zoom Out | workbench.action.zoomOut |
| 0 | Reset zoom | workbench.action.zoomReset |

## Task

| Key | Command name | Command Id |
| --- | ------------ | ---------- |
| . | Rerun last task | workbench.action.tasks.reRunTask |
| : | Run task | workbench.action.tasks.runTask |
| b | Run build tasks | workbench.action.tasks.build |
| c | Configure task runner | workbench.action.tasks.configureTaskRunner |
| g | Show running tasks | workbench.action.tasks.showTasks |
| l | Show task log | workbench.action.tasks.showLog |
| t | Run test task | workbench.action.tasks.test |
| x | Terminate task | workbench.action.tasks.terminate |
| R | Restart running task | workbench.action.tasks.restartTask |

