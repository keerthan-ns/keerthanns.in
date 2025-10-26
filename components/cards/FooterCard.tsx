import { Fragment } from "react/jsx-runtime";

export default function FooterCard() {
    return (
        <Fragment>
            <div className="hidden xl:flex flex-col justify-center xl:col-span-3 xl:row-span-1 xl:col-start-3 xl:row-start-7 p-2 text-sm font-light rounded-2xl border-2 border-light-text/10">
                <div>Press <kbd className="opacity-50 bg-slate-500/30 p-1 rounded">Ctrl</kbd> + <kbd className="opacity-50 bg-slate-500/30 p-1 rounded">K</kbd> to open the command palette</div>
                <p className="text-sm font-medium text-slate-200">
                    &copy; {new Date().getFullYear()} {'Keerthan N S'}
                </p>
            </div>
            <div className="md:col-span-2 xl:hidden xl:col-span-2 xl:row-span-3">
                &copy; {new Date().getFullYear()} {'Keerthan N S'}
            </div>
        </Fragment>
    );
}