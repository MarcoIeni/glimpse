import { type UserMenu } from "./keys";

export function tasksKeys(): UserMenu {
    return {
        items: [
            {
                key: ".",
                name: "Rerun last task",
                icon: "debug-rerun",
                command: "workbench.action.tasks.reRunTask",
            },
            {
                key: ":",
                name: "Run task",
                icon: "play",
                command: "workbench.action.tasks.runTask",
            },
            {
                key: "b",
                name: "Run build tasks",
                icon: "server-process",
                command: "workbench.action.tasks.build",
            },
            {
                key: "c",
                name: "Configure task runner",
                icon: "gear",
                command: "workbench.action.tasks.configureTaskRunner",
            },
            {
                key: "g",
                name: "Show running tasks",
                icon: "checklist",
                command: "workbench.action.tasks.showTasks",
            },
            {
                key: "l",
                name: "Show task log",
                icon: "history",
                command: "workbench.action.tasks.showLog",
            },
            {
                key: "t",
                name: "Run test task",
                icon: "beaker",
                command: "workbench.action.tasks.test",
            },
            {
                key: "x",
                name: "Terminate task",
                icon: "trash",
                command: "workbench.action.tasks.terminate",
            },
            {
                key: "R",
                name: "Restart running task",
                icon: "refresh",
                command: "workbench.action.tasks.restartTask",
            },
        ],
    };
}
