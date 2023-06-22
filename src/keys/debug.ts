import { type UserMenu } from "./keys";

export function debugKeys(): UserMenu {
    return {
        items: [
            { key: "b", name: "Breakpoint", icon: "debug-breakpoint", menu: breakpoint() },
            {
                key: "c",
                name: "Continue debug",
                icon: "debug-continue",
                command: "workbench.action.debug.continue",
            },
            {
                key: "C",
                name: "Continue to cursor",
                icon: "debug-continue",
                command: "editor.debug.action.runToCursor",
            },
            {
                key: "d",
                name: "Start debug",
                icon: "debug-start",
                command: "workbench.action.debug.start",
            },
            {
                key: "D",
                name: "Run without debugging",
                icon: "run",
                command: "workbench.action.debug.run",
            },
            {
                key: "i",
                name: "Step into",
                icon: "debug-step-into",
                command: "workbench.action.debug.stepInto",
            },
            {
                key: "j",
                name: "Jump to cursor",
                icon: "whole-word",
                command: "debug.jumpToCursor",
            },
            {
                key: "o",
                name: "Step out",
                icon: "debug-step-out",
                command: "workbench.action.debug.stepOut",
            },
            {
                key: "p",
                name: "Pause debug",
                icon: "debug-pause",
                command: "workbench.action.debug.pause",
            },
            {
                key: "R",
                name: "Restart debug",
                icon: "debug-restart",
                command: "workbench.action.debug.restart",
            },
            {
                key: "s",
                name: "Step over",
                icon: "debug-step-over",
                command: "workbench.action.debug.stepOver",
            },
            {
                key: "S",
                name: "Stop debug",
                icon: "debug-stop",
                command: "workbench.action.debug.stop",
            },
            {
                key: "v",
                name: "REPL",
                icon: "debug-console",
                command: "workbench.debug.action.toggleRepl",
            },
            {
                key: "w",
                name: "Focus on watch window",
                icon: "eye-watch",
                command: "workbench.debug.action.focusWatchView",
            },
            {
                key: "W",
                name: "Add to watch",
                icon: "watch-expressions-add",
                command: "editor.debug.action.selectionToWatch",
            },
        ],
    };
}

function breakpoint() {
    return {
        items: [
            {
                key: "b",
                name: "Toggle breakpoint",
                icon: "activate-breakpoints",
                command: "editor.debug.action.toggleBreakpoint",
            },
            {
                key: "c",
                name: "Add conditional breakpoint",
                icon: "debug-breakpoint-conditional",
                command: "editor.debug.action.conditionalBreakpoint",
            },
            {
                key: "d",
                name: "Delete breakpoint",
                icon: "trash",
                command: "debug.removeBreakpoint",
            },
            {
                key: "D",
                name: "Delete all breakpoints",
                icon: "trash",
                command: "workbench.debug.viewlet.action.removeAllBreakpoints",
            },
            {
                key: "e",
                name: "Enable breakpoint",
                icon: "debug-breakpoint",
                command: "debug.enableOrDisableBreakpoint",
            },
            {
                key: "E",
                name: "Enable all breakpoints",
                icon: "expand-all",
                command: "workbench.debug.viewlet.action.enableAllBreakpoints",
            },
            {
                key: "f",
                name: "Add function breakpoint",
                icon: "debug-breakpoint-function",
                command: "workbench.debug.viewlet.action.addFunctionBreakpointAction",
            },
            {
                key: "i",
                name: "Toggle inline breakpoint",
                icon: "activate-breakpoints",
                command: "editor.debug.action.toggleInlineBreakpoint",
            },
            {
                key: "n",
                name: "Next breakpoint",
                icon: "arrow-down",
                command: "editor.debug.action.goToNextBreakpoint",
                menu: nextPrevBreakPoint(),
            },
            {
                key: "p",
                name: "Previous breakpoint",
                icon: "arrow-up",
                command: "editor.debug.action.goToPreviousBreakpoint",
                menu: nextPrevBreakPoint(),
            },
            {
                key: "s",
                name: "Disable breakpoint",
                icon: "debug-breakpoint-disabled",
                command: "debug.enableOrDisableBreakpoint",
            },
            {
                key: "S",
                name: "Disable all breakpoints",
                icon: "collapse-all",
                command: "workbench.debug.viewlet.action.disableAllBreakpoints",
            },
        ],
    };
}

function nextPrevBreakPoint(): UserMenu {
    return {
        transient: true,
        items: [
            {
                key: "n",
                name: "Next breakpoint",
                icon: "arrow-down",
                command: "editor.debug.action.goToNextBreakpoint",
            },
            {
                key: "p",
                name: "Previous breakpoint",
                icon: "arrow-up",
                command: "editor.debug.action.goToPreviousBreakpoint",
            },
        ],
    };
}
