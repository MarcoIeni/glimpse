import { type UserMenu } from "./keys";

export function files(): UserMenu {
    return {
        items: [
            {
                key: "f",
                name: "Open file/folder",
                icon: "folder-opened",
                command: "file-browser.open",
            },
            {
                key: "l",
                name: "Change file language",
                icon: "code",
                command: "workbench.action.editor.changeLanguageMode",
            },
            {
                key: "n",
                name: "New file",
                icon: "new-file",
                command: "explorer.newFile",
            },
            {
                key: "o",
                name: "+Open with",
                icon: "file-code",
                command: "explorer.openWith",
            },
            {
                key: "r",
                name: "+Open recent",
                icon: "clock",
                command: "workbench.action.openRecent",
            },
            {
                key: "s",
                name: "Save file",
                icon: "save",
                command: "workbench.action.files.save",
            },
            {
                key: "t",
                name: "Toggle tree/explorer view",
                icon: "list-tree",
                menu: {
                    items: [
                        {
                            key: "",
                            name: "Show explorer view",
                            command: "workbench.view.explorer",
                        },
                        {
                            key: "when:sideBarVisible && explorerViewletVisible",
                            name: "Hide side bar",
                            command: "workbench.action.toggleSidebarVisibility",
                        },
                    ],
                },
            },
            {
                key: "w",
                name: "Open active in new window",
                icon: "window",
                command: "workbench.action.files.showOpenedFileInNewWindow",
            },
            {
                key: "D",
                name: "Delete current file",
                icon: "trash",
                commands: ["workbench.files.action.showActiveFileInExplorer", "deleteFile"],
            },
            {
                key: "L",
                name: "Locate file",
                icon: "file-symlink-directory",
                command: "revealFileInOS",
            },
            {
                key: "R",
                name: "Rename file",
                icon: "edit",
                commands: ["revealInExplorer", "renameFile"],
            },
            {
                key: "S",
                name: "Save all files",
                icon: "save-all",
                command: "workbench.action.files.saveAll",
            },
            {
                key: "T",
                name: "Show active file in tree/explorer view",
                icon: "list-tree",
                command: "workbench.files.action.showActiveFileInExplorer",
            },
            {
                key: "e",
                name: "+Emacs/VSpaceCode",
                icon: "settings",
                menu: {
                    items: [
                        {
                            key: "d",
                            name: "Open settings",
                            icon: "settings",
                            command: "workbench.action.openGlobalSettings",
                        },
                        {
                            key: "k",
                            name: "Open global key bindings",
                            icon: "keyboard",
                            command: "workbench.action.openGlobalKeybindings",
                        },
                        {
                            key: "l",
                            name: "Open language settings",
                            icon: "code",
                            command: "workbench.action.configureLanguageBasedSettings",
                        },
                        {
                            key: "s",
                            name: "Configure user snippets",
                            icon: "symbol-snippet",
                            command: "workbench.action.openSnippets",
                        },
                        {
                            key: "w",
                            name: "Open workspace settings",
                            icon: "settings-edit",
                            command: "workbench.action.openWorkspaceSettings",
                        },
                        {
                            key: "D",
                            name: "Open settings JSON",
                            icon: "json",
                            command: "workbench.action.openSettingsJson",
                        },
                        {
                            key: "K",
                            name: "Open global key bindings JSON",
                            icon: "json",
                            command: "workbench.action.openGlobalKeybindingsFile",
                        },
                        {
                            key: "W",
                            name: "Open workspace settings JSON",
                            icon: "json",
                            command: "workbench.action.openWorkspaceSettingsFile",
                        },
                    ],
                },
            },
            {
                key: "i",
                name: "+Indentation",
                icon: "arrow-right",
                menu: {
                    items: [
                        {
                            key: "d",
                            name: "Detect indentation",
                            icon: "whitespace",
                            command: "editor.action.detectIndentation",
                        },
                        {
                            key: "i",
                            name: "Change indentation",
                            icon: "edit",
                            command: "changeEditorIndentation",
                        },
                        {
                            key: "r",
                            name: "Reindent",
                            icon: "list-flat",
                            command: "editor.action.reindentlines",
                        },
                        {
                            key: "s",
                            name: "Convert indentation to spaces",
                            icon: "arrow-small-right",
                            command: "editor.action.indentationToSpaces",
                        },
                        {
                            key: "t",
                            name: "Convert indentation to tabs",
                            icon: "export",
                            command: "editor.action.indentationToTabs",
                        },
                        {
                            key: "R",
                            name: "Reindent selected",
                            icon: "selection",
                            command: "editor.action.reindentselectedlines",
                        },
                    ],
                },
            },
            {
                key: "y",
                name: "+Yank",
                icon: "clippy",
                menu: {
                    items: [
                        {
                            key: "c",
                            name: "Copy path of active file with line and column",
                            icon: "list-selection",
                            command: "vspacecode.copyPathWithLineColumn",
                        },
                        {
                            key: "d",
                            name: "Copy directory path of the active file",
                            icon: "file-directory",
                            command: "vspacecode.copyDirectoryPath",
                        },
                        {
                            key: "l",
                            name: "Copy path of active file with line",
                            icon: "list-flat",
                            command: "vspacecode.copyPathWithLine",
                        },
                        {
                            key: "n",
                            name: "Copy filename of active file",
                            icon: "file",
                            command: "vspacecode.copyFilename",
                        },
                        {
                            key: "y",
                            name: "Copy path of active file",
                            icon: "go-to-file",
                            command: "vspacecode.copyPath",
                        },
                        {
                            key: "C",
                            name: "Copy relative path of active file with line and column",
                            icon: "list-selection",
                            command: "vspacecode.copyRelativePathWithLineColumn",
                        },
                        {
                            key: "D",
                            name: "Copy relative directory path of the active file",
                            icon: "file-directory",
                            command: "vspacecode.copyRelativeDirectoryPath",
                        },
                        {
                            key: "L",
                            name: "Copy relative path of active file with line",
                            icon: "list-flat",
                            command: "vspacecode.copyRelativePathWithLine",
                        },
                        {
                            key: "N",
                            name: "Copy filename without extension of active file",
                            icon: "file",
                            command: "vspacecode.copyFilenameBase",
                        },
                        {
                            key: "Y",
                            name: "Copy relative path of active file",
                            icon: "go-to-file",
                            command: "vspacecode.copyRelativePath",
                        },
                    ],
                },
            },
        ],
    };
}
