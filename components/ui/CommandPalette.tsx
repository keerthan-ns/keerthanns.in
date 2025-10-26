"use client";

import { Dialog, DialogContent } from "./dialog";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "./command";
import { Fragment, useEffect, useState } from "react";
import { socials } from "@/data";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaAnglesRight } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { RiCommandLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

type CommandLink = {
    group: string;
    label: string;
    icon: React.ReactElement;
    shortcut?: string;
    type: "link";
    href: string;
    newTab?: boolean;
};

type CommandFn = {
    group: string;
    label: string;
    icon: React.ReactElement;
    shortcut?: string;
    type: "fn";
    fn: () => void;
};

type Cmd = CommandLink | CommandFn;

const commands: Cmd[] = [
    {
        group: "Go to",
        label: "Home",
        icon: <FaAnglesRight className="mr-2" />,
        shortcut: "",
        type: "link",
        href: "/"
    }, {
        group: "Go to",
        label: "About",
        icon: <FaAnglesRight className="mr-2" />,
        shortcut: "",
        type: "link",
        href: "/about"
    }, {
        group: "Go to",
        label: "Projects & Works",
        icon: <FaAnglesRight className="mr-2" />,
        shortcut: "",
        type: "link",
        href: "/work"
    }, {
        group: "Actions",
        label: "View Resume",
        icon: <IoDocumentText className="mr-2" />,
        shortcut: "Ctrl P",
        type: "link",
        href: socials.resume,
        newTab: true
    }, {
        group: "Social",
        label: "Visit GitHub",
        icon: <BsGithub className="mr-2" />,
        shortcut: "Ctrl G",
        type: "link",
        href: socials.github,
        newTab: true,
    }, {
        group: "Social",
        label: "Visit LinkedIn",
        icon: <BsLinkedin className="mr-2" />,
        shortcut: "Ctrl L",
        type: "link",
        href: socials.linkedin,
        newTab: true,
    }, {
        group: "Social",
        label: "Visit Instagram",
        icon: <BsInstagram className="mr-2" />,
        shortcut: "Ctrl I",
        type: "link",
        href: socials.instagram,
        newTab: true,
    }, {
        group: "Social",
        label: "Visit X / Twitter",
        icon: <BsTwitterX className="mr-2" />,
        shortcut: "Ctrl T",
        type: "link",
        href: socials.twitter,
        newTab: true,
    }
];

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    // open on Ctrl+K
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((o) => !o);
            }
            // for other shortcuts
            const key = e.key.toLowerCase();
            const isCtrl = e.ctrlKey || e.metaKey;

            commands.forEach(cmd => {
                if (!cmd.shortcut) return;

                const s = cmd.shortcut.toLowerCase().replace(" ", "");
                // matching things like "ctrl g"
                if (s === `ctrl${key}` && isCtrl) {
                    e.preventDefault();
                    if (cmd.type === "link") {
                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                        cmd.newTab ? window.open(cmd.href, "_blank") : (window.location.href = cmd.href);
                    } else if (cmd.type === "fn") {
                        cmd.fn();
                    }
                }
            });
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    // grouped by group name
    const groups = Array.from(new Set(commands.map((c) => c.group)));

    return (
        <Fragment>
            <button onClick={() => setOpen(true)}
                className="cursor-pointer fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary/50 text-white shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all duration-300"
                aria-label="Open Command Palette">
                <RiCommandLine size={24} />
            </button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="p-0 shadow-lg max-w-lg overflow-hidden bg-[#171717]">
                    <Command>
                        <CommandInput placeholder="Search command..." />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>

                            {groups.map((gName, idx) => {
                                return (
                                    <Fragment key={gName}>
                                        <CommandGroup heading={gName}>
                                            {commands
                                                .filter((c) => c.group === gName)
                                                .map((cmd, i) => (
                                                    <CommandItem
                                                        key={i}
                                                        onSelect={() => {
                                                            if (cmd.type === "link") {
                                                                if (cmd.newTab) {
                                                                    window.open(cmd.href, "_blank");
                                                                } else {
                                                                    // internal link
                                                                    if (cmd.href.startsWith("/")) {
                                                                        router.push(cmd.href); // client-side navigation
                                                                    } else {
                                                                        window.location.href = cmd.href; // external link
                                                                    }
                                                                }
                                                            } else if (cmd.type === "fn") {
                                                                cmd.fn();
                                                            }
                                                            setOpen(false);
                                                        }}
                                                    >
                                                        {cmd.icon}
                                                        <span>{cmd.label}</span>
                                                        {cmd.shortcut && (
                                                            <kbd className="ml-auto text-xs opacity-50">{cmd.shortcut}</kbd>
                                                        )}
                                                    </CommandItem>
                                                ))}
                                        </CommandGroup>
                                        {idx < groups.length - 1 && <CommandSeparator />}
                                    </Fragment>
                                );
                            })}
                        </CommandList>
                    </Command>
                    <div className="flex flex-row justify-between p-2 border-t border-t-slate-700 text-slate-300 text-sm">
                        <p>
                            <kbd className="text-sm opacity-50 bg-slate-500/30 p-1 rounded">↩</kbd> to select
                        </p>
                        <p>
                            <kbd className="text-sm opacity-50 bg-slate-500/30 p-1 rounded">↑</kbd> <kbd className="text-sm opacity-50 bg-slate-500/30 p-1 rounded">↓</kbd> to navigate
                        </p>
                        <p>
                            <kbd className="text-sm opacity-50 bg-slate-500/30 p-1 rounded">Ctrl K</kbd> / <kbd className="text-sm opacity-50 bg-slate-500/30 p-1 rounded">Escape</kbd> to close
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </Fragment>
    );
}
