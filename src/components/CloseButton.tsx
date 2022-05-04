import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";



export function CloseButton() {
    return <Popover.Button className="w-4 h-4 absolute right-5 top-5 text-zinc-400 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"><X weight="bold"  /></Popover.Button>
}