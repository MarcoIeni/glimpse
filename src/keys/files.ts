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
                name: "Show file in explorer",
                icon: "list-tree",
                command: "workbench.files.action.showActiveFileInExplorer",
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
                key: "p",
                name: "Copy Path of Active File",
                icon: "edit",
                command: "copyFilePath",
            },
            {
                key: "P",
                name: "Copy Relative Path of Active File",
                icon: "edit",
                command: "copyRelativeFilePath",
            },
            {
                key: "r",
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
                key: "w",
                name: "Open file in new window",
                icon: "window",
                command: "workbench.action.files.showOpenedFileInNewWindow",
            },
        ],
    };
}
