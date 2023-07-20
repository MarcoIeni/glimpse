import { type UserMenu } from "../keys";

export function commentsKeys(): UserMenu {
    return {
        items: [
            {
                key: "f",
                name: "Fold all block comments",
                icon: "comment",
                command: "editor.foldAllBlockComments",
            },
            {
                key: "b",
                name: "Toggle block comment",
                icon: "comment",
                command: "editor.action.blockComment",
            },
            {
                key: "l",
                name: "Toggle line comment",
                icon: "comment",
                command: "editor.action.commentLine",
            },
        ],
    };
}
