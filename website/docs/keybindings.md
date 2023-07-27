---
sidebar_position: 6
---

In the following, you will find the default Glimpse key bindings.

# Key bindings

## Top level menu

| Key | Name | Command |
| --- | ---- | ------- |
| v | Select/expand region | `editor.action.smartSelect.grow` |
| ␣ | Commands | `workbench.action.showCommands` |
| ↹ | Last editor | \[ `workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup`, `list.select` \] |
| ! | Show terminal | `workbench.action.terminal.focus` |
| " | Open new external terminal | `workbench.action.terminal.openNativeConsole` |
| ' | Show terminal | `workbench.action.terminal.focus` |
| * | Search Selection in Project | \[ `editor.action.addSelectionToNextFindMatch`, `workbench.action.findInFiles`, `search.action.focusSearchList` \] |
| / | Search in project | `workbench.action.findInFiles` |
| ; | Toggle comment | `editor.action.commentLine` |
| 0 | Focus on files explorer | `workbench.files.action.focusFilesExplorer` |
| 1 | Focus 1st editor group | `workbench.action.focusFirstEditorGroup` |
| 2 | Focus 2nd editor group | `workbench.action.focusSecondEditorGroup` |
| 3 | Focus 3rd editor group | `workbench.action.focusThirdEditorGroup` |
| 4 | Focus 4th editor group | `workbench.action.focusFourthEditorGroup` |
| 5 | Focus 5th editor group | `workbench.action.focusFifthEditorGroup` |
| 6 | Focus 6th editor group | `workbench.action.focusSixthEditorGroup` |
| 7 | Focus 7th editor group | `workbench.action.focusSeventhEditorGroup` |
| 8 | Focus 8th editor group | `workbench.action.focusEighthEditorGroup` |

## Configuration

| Key | Name | Command |
| --- | ---- | ------- |
| c c | Open settings | `workbench.action.openGlobalSettings` |
| c C | Open settings JSON | `workbench.action.openSettingsJson` |
| c g | Glimpse: Configure | `glimpse.configure` |
| c k | Open global key bindings | `workbench.action.openGlobalKeybindings` |
| c K | Open global key bindings JSON | `workbench.action.openGlobalKeybindingsFile` |
| c l | Open language settings | `workbench.action.configureLanguageBasedSettings` |
| c s | Configure user snippets | `workbench.action.openSnippets` |
| c w | Open workspace settings | `workbench.action.openWorkspaceSettings` |
| c W | Open workspace settings JSON | `workbench.action.openWorkspaceSettingsFile` |

## Comment

| Key | Name | Command |
| --- | ---- | ------- |
| C f | Fold all block comments | `editor.foldAllBlockComments` |
| C b | Toggle block comment | `editor.action.blockComment` |
| C l | Toggle line comment | `editor.action.commentLine` |

## Debug

| Key | Name | Command |
| --- | ---- | ------- |
| d c | Continue debug | `workbench.action.debug.continue` |
| d C | Continue to cursor | `editor.debug.action.runToCursor` |
| d d | Start debug | `workbench.action.debug.start` |
| d D | Run without debugging | `workbench.action.debug.run` |
| d i | Step into | `workbench.action.debug.stepInto` |
| d j | Jump to cursor | `debug.jumpToCursor` |
| d o | Step out | `workbench.action.debug.stepOut` |
| d p | Pause debug | `workbench.action.debug.pause` |
| d R | Restart debug | `workbench.action.debug.restart` |
| d s | Step over | `workbench.action.debug.stepOver` |
| d S | Stop debug | `workbench.action.debug.stop` |
| d v | REPL | `workbench.debug.action.toggleRepl` |
| d w | Focus on watch view | `workbench.debug.action.focusWatchView` |
| d W | Add to watch | `editor.debug.action.selectionToWatch` |

### Breakpoint

| Key | Name | Command |
| --- | ---- | ------- |
| d b b | Toggle breakpoint | `editor.debug.action.toggleBreakpoint` |
| d b c | Add conditional breakpoint | `editor.debug.action.conditionalBreakpoint` |
| d b d | Delete breakpoint | `debug.removeBreakpoint` |
| d b D | Delete all breakpoints | `workbench.debug.viewlet.action.removeAllBreakpoints` |
| d b e | Enable breakpoint | `debug.enableOrDisableBreakpoint` |
| d b E | Enable all breakpoints | `workbench.debug.viewlet.action.enableAllBreakpoints` |
| d b f | Add function breakpoint | `workbench.debug.viewlet.action.addFunctionBreakpointAction` |
| d b i | Toggle inline breakpoint | `editor.debug.action.toggleInlineBreakpoint` |
| d b n | Next breakpoint | `editor.debug.action.goToNextBreakpoint` |
| d b p | Previous breakpoint | `editor.debug.action.goToPreviousBreakpoint` |
| d b s | Disable breakpoint | `debug.enableOrDisableBreakpoint` |
| d b S | Disable all breakpoints | `workbench.debug.viewlet.action.disableAllBreakpoints` |

#### Next breakpoint

| Key | Name | Command |
| --- | ---- | ------- |
| d b n n | Next breakpoint | `editor.debug.action.goToNextBreakpoint` |
| d b n p | Previous breakpoint | `editor.debug.action.goToPreviousBreakpoint` |

#### Previous breakpoint

| Key | Name | Command |
| --- | ---- | ------- |
| d b p n | Next breakpoint | `editor.debug.action.goToNextBreakpoint` |
| d b p p | Previous breakpoint | `editor.debug.action.goToPreviousBreakpoint` |

## Diff/Compare

| Key | Name | Command |
| --- | ---- | ------- |
| D c | Compare active file with clipboard | `workbench.files.action.compareWithClipboard` |
| D d | Compare active file with | `workbench.files.action.compareFileWith` |
| D s | Compare active file with saved | `workbench.files.action.compareWithSaved` |
| D w | Toggle ignore trim whitespace | `toggle.diff.ignoreTrimWhitespace` |

## Error

| Key | Name | Command |
| --- | ---- | ------- |
| e e | Show error | `editor.action.showHover` |
| e E | Show all errors | `workbench.actions.view.problems` |
| e f | Fix error | `editor.action.quickFix` |
| e n | Next error | `editor.action.marker.nextInFiles` |
| e N | Previous error | `editor.action.marker.prevInFiles` |
| e p | Previous error | `editor.action.marker.prevInFiles` |

### Error transient

| Key | Name | Command |
| --- | ---- | ------- |
| e t f | Fix error | `editor.action.quickFix` |
| e t n | Next error | `editor.action.marker.nextInFiles` |
| e t p | Previous error | `editor.action.marker.prevInFiles` |
| e t N | Previous error | `editor.action.marker.prevInFiles` |

## Editor

| Key | Name | Command |
| --- | ---- | ------- |
| E c | Close active editor | `workbench.action.closeActiveEditor` |
| E C | Close other editors | `workbench.action.closeOtherEditors` |
| E e | Show all editors | `workbench.action.showAllEditorsByMostRecentlyUsed` |
| E E | Show all editors in active group | `workbench.action.showEditorsInActiveGroup` |
| E h | Previous editor | `workbench.action.previousEditor` |
| E H | Move editor into left group | `workbench.action.moveEditorToLeftGroup` |
| E j | Next editor | `workbench.action.nextEditor` |
| E J | Move editor into below group | `workbench.action.moveEditorToBelowGroup` |
| E k | Previous editor | `workbench.action.previousEditor` |
| E K | Move editor into above group | `workbench.action.moveEditorToAboveGroup` |
| E l | Next editor | `workbench.action.nextEditor` |
| E L | Move editor into right group | `workbench.action.moveEditorToRightGroup` |
| E n | New Untitled Editor | `workbench.action.files.newUntitledFile` |
| E p | Pin editor | `workbench.action.pinEditor` |
| E P | Unpin editor | `workbench.action.unpinEditor` |
| E r | Revert the current editor | `workbench.action.files.revert` |
| E s | Scratch editor | `workbench.action.files.newUntitledFile` |
| E T | Reopen closed editor | `workbench.action.reopenClosedEditor` |
| E 0 | First editor in group | `workbench.action.firstEditorInGroup` |
| E $ | Last editor in group | `workbench.action.lastEditorInGroup` |

### New Editor in other Group

| Key | Name | Command |
| --- | ---- | ------- |
| E N h | New untitled editor (split left) | \[ `workbench.action.splitEditorLeft`, `workbench.action.files.newUntitledFile`, `workbench.action.closeOtherEditors` \] |
| E N j | New untitled editor (split down) | \[ `workbench.action.splitEditorDown`, `workbench.action.files.newUntitledFile`, `workbench.action.closeOtherEditors` \] |
| E N k | New untitled editor (split up) | \[ `workbench.action.splitEditorUp`, `workbench.action.files.newUntitledFile`, `workbench.action.closeOtherEditors` \] |
| E N l | New untitled editor (split right) | \[ `workbench.action.splitEditorRight`, `workbench.action.files.newUntitledFile`, `workbench.action.closeOtherEditors` \] |

## File

| Key | Name | Command |
| --- | ---- | ------- |
| f d | Delete current file | \[ `workbench.files.action.showActiveFileInExplorer`, `deleteFile` \] |
| f f | Show file in explorer | `workbench.files.action.showActiveFileInExplorer` |
| f l | Change file language | `workbench.action.editor.changeLanguageMode` |
| f n | New file | `explorer.newFile` |
| f o | Open with | `explorer.openWith` |
| f O | Open in OS | `revealFileInOS` |
| f p | Copy Path of Active File | `copyFilePath` |
| f P | Copy Relative Path of Active File | `copyRelativeFilePath` |
| f r | Rename file | \[ `revealInExplorer`, `renameFile` \] |
| f s | Save file | `workbench.action.files.save` |
| f S | Save all files | `workbench.action.files.saveAll` |
| f w | Open file in new window | `workbench.action.files.showOpenedFileInNewWindow` |

## Format

| Key | Name | Command |
| --- | ---- | ------- |
| F c | Format changes | `editor.action.formatChanges` |
| F e | Format Editor | `editor.action.formatDocument` |
| F E | Format editor with formatter | `editor.action.formatDocument.multiple` |
| F f | Format region or buffer | `editor.action.format` |
| F s | Format selection | `editor.action.formatSelection` |
| F S | Format selection with formatter | `editor.action.formatSelection.multiple` |

## Git

| Key | Name | Command |
| --- | ---- | ------- |
| g a | Stage Changes | `git.stageSelectedRanges` |
| g A | Stage Selected Ranges | `git.stageSelectedRanges` |
| g b | Checkout | `git.checkout` |
| g c | Commit | `git.commit` |
| g C | Clone | `git.clone` |
| g f | Fetch | `git.fetch` |
| g F | Pull | `git.pull` |
| g i | Initialize repository | `git.init` |
| g l | Show log/timeline | `timeline.focus` |
| g m | Merge | `git.merge` |
| g p | Publish | `git.publish` |
| g P | Push | `git.push` |
| g s | Status | `workbench.view.scm` |
| g u | Unstage | `git.unstage` |
| g U | Unstage Selected Ranges | `git.unstageSelectedRanges` |

### Delete

| Key | Name | Command |
| --- | ---- | ------- |
| g d b | Delete Branch | `git.deleteBranch` |
| g d t | Delete Tag | `git.deleteTag` |
| g d T | Delete Remote Tag | `git.deleteRemoteTag` |

### Merge conflict

| Key | Name | Command |
| --- | ---- | ------- |
| g M b | Accept both | `merge-conflict.accept.both` |
| g M B | Accept all both | `merge-conflict.accept.all-both` |
| g M c | Accept current | `merge-conflict.accept.current` |
| g M C | Accept all current | `merge-conflict.accept.all-current` |
| g M d | Compare current conflict | `merge-conflict.compare` |
| g M i | Accept incoming | `merge-conflict.accept.incoming` |
| g M I | Accept all incoming | `merge-conflict.accept.all-incoming` |
| g M n | Next Conflict | `merge-conflict.next` |
| g M N | Previous Conflict | `merge-conflict.previous` |
| g M s | Accept selection | `merge-conflict.accept.selection` |

## GitHub Copilot

| Key | Name | Command |
| --- | ---- | ------- |
| G c | Copilot Chat | `workbench.panel.chatSidebar.copilot` |
| G e | Explain this | `github.copilot.interactiveEditor.explain` |
| G f | Fix this | `github.copilot.interactiveEditor.fix` |
| G o | Open Completions Panel | `github.copilot.generate` |
| G t | Toggle (Enable/Disable) Copilot | `github.copilot.toggleCopilot` |

### Generate

| Key | Name | Command |
| --- | ---- | ------- |
| G g d | Generate Docs | `github.copilot.interactiveEditor.generateDocs` |
| G g g | Generate This | `github.copilot.interactiveEditor.generate` |
| G g t | Generate Tests | `github.copilot.interactiveEditor.generateTests` |

## Help

| Key | Name | Command |
| --- | ---- | ------- |
| h d | Open VSCode Documentation | `workbench.action.openDocumentationUrl` |
| h g | Open Glimpse Documentation | `glimpse.openDocs` |
| h h | Describe thing at point | `editor.action.showHover` |
| h i | Report VSCode Issue | `workbench.action.openIssueReporter` |
| h k | Open global key bindings | `workbench.action.openGlobalKeybindings` |
| h t | Open VSCode Tutorial | `workbench.action.showInteractivePlayground` |

## Insert

| Key | Name | Command |
| --- | ---- | ------- |
| i j | Insert line below | `editor.action.insertLineAfter` |
| i k | Insert line above | `editor.action.insertLineBefore` |
| i p | Paste as | `editor.action.pasteAs` |
| i s | Insert snippet | `editor.action.insertSnippet` |

## Indent

| Key | Name | Command |
| --- | ---- | ------- |
| I d | Detect indentation | `editor.action.detectIndentation` |
| I i | Change indentation | `changeEditorIndentation` |
| I r | Reindent | `editor.action.reindentlines` |
| I R | Reindent selected | `editor.action.reindentselectedlines` |
| I s | Convert indentation to spaces | `editor.action.indentationToSpaces` |
| I t | Convert indentation to tabs | `editor.action.indentationToTabs` |

## Jump

| Key | Name | Command |
| --- | ---- | ------- |
| j b | Go to breadcrumb | `breadcrumbs.focusAndSelect` |
| j c | Go to previous change | `workbench.action.editor.previousChange` |
| j C | Go to next change | `workbench.action.editor.nextChange` |
| j d | Go to declaration | `editor.action.revealDeclaration` |
| j g | Go to definition | `editor.action.revealDefinition` |
| j h | Show call hierarchy | `references-view.showCallHierarchy` |
| j i | Go to implementations | `editor.action.goToImplementation` |
| j I | Find implementations | `references-view.findImplementations` |
| j r | Go to reference | `editor.action.goToReferences` |
| j R | Find references | `references-view.findReferences` |
| j s | Go to symbol in buffer | `workbench.action.gotoSymbol` |
| j S | Go to symbol in project | `workbench.action.showAllSymbols` |
| j t | Go to type definition | `editor.action.goToTypeDefinition` |

## Project

| Key | Name | Command |
| --- | ---- | ------- |
| p f | Find file in project | `workbench.action.quickOpen` |
| p p | Switch project | `workbench.action.openRecent` |
| p R | Replace in files | `workbench.action.replaceInFiles` |

## Peek

| Key | Name | Command |
| --- | ---- | ------- |
| P d | Peek declaration | `editor.action.peekDeclaration` |
| P h | Peek call hierarchy | `editor.showCallHierarchy` |
| P i | Peek implementations | `editor.action.peekImplementation` |
| P p | Peek definition | `editor.action.peekDefinition` |
| P r | Peek references | `editor.action.referenceSearch.trigger` |
| P R | Search all references in side bar | `references-view.find` |
| P t | Peek type definition | `editor.action.peekTypeDefinition` |

## Quit

| Key | Name | Command |
| --- | ---- | ------- |
| q q | Quit VSCode window | `workbench.action.closeWindow` |
| q Q | Quit all VSCode windows | `workbench.action.quit` |
| q r | Reload window | `workbench.action.reloadWindow` |
| q R | Reload window with extensions disabled | `workbench.action.reloadWindowWithExtensionsDisabled` |
| q s | Save all and close window | \[ `workbench.action.files.saveAll`, `workbench.action.closeWindow` \] |
| q w | Close workspace | `workbench.action.closeFolder` |

## Refactor

| Key | Name | Command |
| --- | ---- | ------- |
| r . | Quick fix | `editor.action.quickFix` |
| r e | Extract to function or variable | `editor.action.codeAction: {"kind":"refactor.extract"}` |
| r i | Organize imports | `editor.action.organizeImports` |
| r r | Rename Symbol | `editor.action.rename` |
| r R | Refactor actions | `editor.action.refactor` |
| r s | Execute source action | `editor.action.sourceAction` |

## Search

| Key | Name | Command |
| --- | ---- | ------- |
| s c | Clear Search Results | `search.action.clearSearchResults` |
| s h | Highlight symbol | `editor.action.wordHighlight.trigger` |
| s p | Search in project | `workbench.action.findInFiles` |
| s P | Search Selection in Project | \[ `editor.action.addSelectionToNextFindMatch`, `workbench.action.findInFiles`, `search.action.focusSearchList` \] |
| s r | Replace | `editor.action.startFindReplaceAction` |
| s R | Replace in files | `workbench.action.replaceInFiles` |

### Highlight symbol

| Key | Name | Command |
| --- | ---- | ------- |
| s h n | Next occurrence | `editor.action.wordHighlight.next` |
| s h p | Previous occurrence | `editor.action.wordHighlight.prev` |
| s h N | Previous occurrence | `editor.action.wordHighlight.prev` |

## Show

| Key | Name | Command |
| --- | ---- | ------- |
| S d | Show debug console | `workbench.debug.action.toggleRepl` |
| S e | Show explorer | `workbench.view.explorer` |
| S E | Show extensions | `workbench.view.extensions` |
| S g | Show source control | `workbench.view.scm` |
| S n | Show notification | `notifications.toggleList` |
| S o | Show output | `workbench.action.output.toggleOutput` |
| S p | Show problems | `workbench.actions.view.problems` |
| S r | Show remote explorer | `workbench.view.remote` |
| S s | Show search | `workbench.view.search` |
| S t | Show test | `workbench.view.extension.test` |

## Toogle

| Key | Name | Command |
| --- | ---- | ------- |
| t b | Toggle side bar visibility | `workbench.action.toggleSidebarVisibility` |
| t B | Toggle Activity Bar Visibility | `workbench.action.toggleActivityBarVisibility` |
| t c | Toggle centered layout | `workbench.action.toggleCenteredLayout` |
| t C | Toggle find case sensitive | `toggleFindCaseSensitive` |
| t f | Toggle full screen | `workbench.action.toggleFullScreen` |
| t i | Select icon theme | `workbench.action.selectIconTheme` |
| t m | Toggle minimap | `editor.action.toggleMinimap` |
| t p | Toggle panel visibility | `workbench.action.togglePanel` |
| t P | Toggle maximized panel | `workbench.action.toggleMaximizedPanel` |
| t t | Select theme | `workbench.action.selectTheme` |
| t T | Toggle tab visibility | `workbench.action.toggleTabsVisibility` |
| t w | Toggle word wrap | `editor.action.toggleWordWrap` |
| t W | Toggle render whitespace | `editor.action.toggleRenderWhitespace` |
| t z | Toggle zen mode | `workbench.action.toggleZenMode` |

## Test

| Key | Name | Command |
| --- | ---- | ------- |
| T a | Run all tests | `testing.runAll` |
| T A | Debug all tests | `testing.debugAll` |
| T f | Run current test file | `testing.runCurrentFile` |
| T r | Re-run failed tests | `testing.reRunFailTests` |
| T t | Select and run test | `testing.runSelected` |
| T T | Select and debug test | `testing.debugSelected` |

## Window/Group

| Key | Name | Command |
| --- | ---- | ------- |
| w + | Enlarge group | `workbench.action.increaseViewSize` |
| w = | Enlarge group | `workbench.action.increaseViewSize` |
| w - | Shrink group | `workbench.action.decreaseViewSize` |
| w c | Close group | `workbench.action.closeEditorsInGroup` |
| w C | Close all other groups | `workbench.action.closeEditorsInOtherGroups` |
| w h | Focus group left | `workbench.action.focusPreviousGroup` |
| w H | Move in group left | `workbench.action.moveActiveEditorGroupLeft` |
| w j | Focus group down | `workbench.action.focusBelowGroup` |
| w J | Move in group down | `workbench.action.moveActiveEditorGroupDown` |
| w k | Focus group up | `workbench.action.focusAboveGroup` |
| w K | Move in group up | `workbench.action.moveActiveEditorGroupUp` |
| w l | Focus group right | `workbench.action.focusNextGroup` |
| w L | Move in group right | `workbench.action.moveActiveEditorGroupRight` |
| w m | Maximize group | `workbench.action.toggleEditorWidths` |
| w M | Maximize group and hide side bar | `workbench.action.maximizeEditor` |
| w n | Duplicate workspace in new window | `workbench.action.duplicateWorkspaceInNewWindow` |
| w N | Open new VSCode window | `workbench.action.newWindow` |
| w o | Switch VSCode window | `workbench.action.quickSwitchWindow` |
| w r | Reset editor widths | `workbench.action.evenEditorWidths` |
| w s | Split editor down | `workbench.action.splitEditorDown` |
| w v | Split editor right | `workbench.action.splitEditor` |
| w w | Focus group right | `workbench.action.focusNextGroup` |
| w W | Focus group left | `workbench.action.focusPreviousGroup` |
| w x | Close all groups | `workbench.action.closeAllGroups` |
| w z | Join all groups | `workbench.action.joinAllGroups` |

### Enlarge group

| Key | Name | Command |
| --- | ---- | ------- |
| w + - | Shrink group | `workbench.action.decreaseViewSize` |
| w + + | Enlarge group | `workbench.action.increaseViewSize` |
| w + = | Enlarge group | `workbench.action.increaseViewSize` |

### Enlarge group

| Key | Name | Command |
| --- | ---- | ------- |
| w = - | Shrink group | `workbench.action.decreaseViewSize` |
| w = + | Enlarge group | `workbench.action.increaseViewSize` |
| w = = | Enlarge group | `workbench.action.increaseViewSize` |

### Shrink group

| Key | Name | Command |
| --- | ---- | ------- |
| w - - | Shrink group | `workbench.action.decreaseViewSize` |
| w - + | Enlarge group | `workbench.action.increaseViewSize` |
| w - = | Enlarge group | `workbench.action.increaseViewSize` |

## Text

| Key | Name | Command |
| --- | ---- | ------- |
| x j | Move lines down | `editor.action.moveLinesDownAction` |
| x k | Move lines up | `editor.action.moveLinesUpAction` |
| x o | Open link | `editor.action.openLink` |
| x u | To lower case | `editor.action.transformToLowercase` |
| x U | To upper case | `editor.action.transformToUppercase` |
| x w | Delete trailing whitespace | `editor.action.trimTrailingWhitespace` |

### Move lines down

| Key | Name | Command |
| --- | ---- | ------- |
| x j j | Move lines down | `editor.action.moveLinesDownAction` |
| x j k | Move lines up | `editor.action.moveLinesUpAction` |

### Move lines up

| Key | Name | Command |
| --- | ---- | ------- |
| x k j | Move lines down | `editor.action.moveLinesDownAction` |
| x k k | Move lines up | `editor.action.moveLinesUpAction` |

### Lines

| Key | Name | Command |
| --- | ---- | ------- |
| x l d | Duplicate lines down | `editor.action.copyLinesDownAction` |
| x l D | Duplicate lines up | `editor.action.copyLinesUpAction` |
| x l s | Sort lines in ascending order | `editor.action.sortLinesAscending` |
| x l S | Sort lines in descending order | `editor.action.sortLinesDescending` |

## Select/expand region

| Key | Name | Command |
| --- | ---- | ------- |
| v v | Grow selection | `editor.action.smartSelect.grow` |
| v V | Shrink selection | `editor.action.smartSelect.shrink` |

## Zoom/Fold

| Key | Name | Command |
| --- | ---- | ------- |
| z + | Zoom In | `workbench.action.zoomIn` |
| z = | Zoom In | `workbench.action.zoomIn` |
| z - | Zoom Out | `workbench.action.zoomOut` |
| z 0 | Reset zoom | `workbench.action.zoomReset` |

### Zoom In

| Key | Name | Command |
| --- | ---- | ------- |
| z + + | Zoom In | `workbench.action.zoomIn` |
| z + = | Zoom In | `workbench.action.zoomIn` |
| z + - | Zoom Out | `workbench.action.zoomOut` |

### Zoom In

| Key | Name | Command |
| --- | ---- | ------- |
| z = + | Zoom In | `workbench.action.zoomIn` |
| z = = | Zoom In | `workbench.action.zoomIn` |
| z = - | Zoom Out | `workbench.action.zoomOut` |

### Zoom Out

| Key | Name | Command |
| --- | ---- | ------- |
| z - + | Zoom In | `workbench.action.zoomIn` |
| z - = | Zoom In | `workbench.action.zoomIn` |
| z - - | Zoom Out | `workbench.action.zoomOut` |

### Image preview

| Key | Name | Command |
| --- | ---- | ------- |
| z i + | Zoom in | `imagePreview.zoomIn` |
| z i - | Zoom out | `imagePreview.zoomOut` |
| z i = | Zoom in | `imagePreview.zoomIn` |

### Font

| Key | Name | Command |
| --- | ---- | ------- |
| z f + | Zoom In | `editor.action.fontZoomIn` |
| z f = | Zoom In | `editor.action.fontZoomIn` |
| z f - | Zoom out | `editor.action.fontZoomOut` |
| z f 0 | Reset zoom | `editor.action.fontZoomReset` |

### Fold

| Key | Name | Command |
| --- | ---- | ------- |
| z F a | Toggle: around a point | `editor.toggleFold` |
| z F b | Close: all block comments | `editor.foldAllBlockComments` |
| z F c | Close: at a point | `editor.fold` |
| z F g | Close: all regions | `editor.foldAllMarkerRegions` |
| z F G | Open: all regions | `editor.unfoldAllMarkerRegions` |
| z F m | Close: all | `editor.foldAll` |
| z F o | Open: at a point | `editor.unfold` |
| z F O | Open: recursively | `editor.unfoldRecursively` |
| z F r | Open: all | `editor.unfoldAll` |

## Task

| Key | Name | Command |
| --- | ---- | ------- |
| : . | Rerun last task | `workbench.action.tasks.reRunTask` |
| : : | Run task | `workbench.action.tasks.runTask` |
| : b | Run build tasks | `workbench.action.tasks.build` |
| : c | Configure task runner | `workbench.action.tasks.configureTaskRunner` |
| : g | Show running tasks | `workbench.action.tasks.showTasks` |
| : l | Show task log | `workbench.action.tasks.showLog` |
| : t | Run test task | `workbench.action.tasks.test` |
| : x | Terminate task | `workbench.action.tasks.terminate` |
| : R | Restart running task | `workbench.action.tasks.restartTask` |

