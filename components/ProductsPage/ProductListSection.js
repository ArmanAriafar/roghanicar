//? Components
import Dotted from "./Dotted";

//? Icons
import { BiSearchAlt } from "react-icons/bi";

export default function ProductListSection() {
    return (
        <section className="m-auto grid grid-rows-[1fr_.5fr_3fr] px-4 lg:max-w-5xl lg:grid-cols-2 lg:grid-rows-1">
            <div className="m-auto w-full max-w-xs justify-self-start lg:order-1 lg:mx-0">
                <div className="w-fit">
                    <h1 className="text-lg font-black text-orange-500">لیست تمام محصولات:</h1>
                    <div className="relative bottom-3 h-2 w-full bg-orange-500 opacity-30" />
                </div>
            </div>
            <Dotted className={"max-w-5xl lg:order-3 lg:col-span-2"} />
            <div
                className="
                    sticky top-10 m-auto mt-4 mb-8 flex h-14 w-full max-w-xs flex-row-reverse 
                    items-center rounded-2xl border-2 border-orange-400 bg-white px-2 py-1 
                    shadow-lg shadow-slate-400 lg:relative lg:top-0 lg:order-2 lg:mx-0 lg:my-0 lg:justify-self-end
                    lg:rounded-b-none lg:border-4 lg:border-x-0 lg:border-t-0 lg:shadow-none"
            >
                <BiSearchAlt className="w-[10%] text-3xl text-orange-500" />
                <input
                    type="text"
                    className="w-[90%] border-none pr-1 font-serif text-base font-bold text-slate-500 outline-none"
                    placeholder="جستجو محصول"
                    dir="rtl"
                />
            </div>
        </section>
    );
}
