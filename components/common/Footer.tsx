"use client"

import { Fragment } from "react";

export function Footer() {

  return (
    <Fragment>
      <div className="mt-2 lg:mt-0 flex flex-col items-center justify-center gap-1  p-2 text-sm font-light">
        <div>Press <kbd className="opacity-50 bg-slate-500/30 p-1 rounded">Ctrl</kbd> + <kbd className="opacity-50 bg-slate-500/30 p-1 rounded">K</kbd> to open the command palette</div>
        <p className="text-sm font-medium text-slate-200">
          &copy; {new Date().getFullYear()} {'Keerthan N S'}
        </p>
      </div>
    </Fragment>
  );
}
