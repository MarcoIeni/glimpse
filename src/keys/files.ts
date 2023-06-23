import { type UserMenu } from "./keys";

export function filesKeys(): UserMenu {
    return {
        items: [
            {
                key: "d",
                name: "Delete current file",
                icon: "trash",
                commands: ["workbench.files.action.showActiveFileInExplorer", "deleteFile"],
            },
            {
                key: "f",
                name: "Open file/folder",
                icon: "folder-opened",
                command: "revealInExplorer",
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
                name: "Open with",
                icon: "file-code",
                command: "explorer.openWith",
            },
            {
                key: "O",
                name: "Open in OS",
                icon: "file-symlink-directory",
                command: "revealFileInOS",
            },
            {
                key: "r",
                name: "Open recent",
                icon: "clock",
                command: "workbench.action.openRecent",
            },
            {
                key: "R",
                name: "Rename file",
                icon: "edit",
                commands: ["revealInExplorer", "renameFile"],
            },
            {
                key: "s",
                name: "Save file",
                icon: "save",
                command: "workbench.action.files.save",
            },
            {
                key: "S",
                name: "Save all files",
                icon: "save-all",
                command: "workbench.action.files.saveAll",
            },
            {
                key: "t",
                name: "Toggle tree/explorer view",
                icon: "list-tree",
                command: "workbench.view.explorer",
                // TODO: do this when the explorer is visible to go back to the editor
                // {
                //     key: "when:sideBarVisible && explorerViewletVisible",
                //     icon: "three-bars",
                //     name: "Hide side bar",
                //     command: "workbench.action.toggleSidebarVisibility",
                // },
            },
            {
                key: "T",
                name: "Show file in tree/explorer view",
                icon: "list-tree",
                command: "workbench.files.action.showActiveFileInExplorer",
            },
            {
                key: "w",
                name: "Open file in new window",
                icon: "window",
                command: "workbench.action.files.showOpenedFileInNewWindow",
            },
            {
                key: "y",
                name: "Yank",
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
