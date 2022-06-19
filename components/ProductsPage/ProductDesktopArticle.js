export default function ProductDesktopArticle({ image, name, price }) {
    return (
        <article
            className="
            grid h-36 w-80 grid-rows-[3fr_1.5fr_.5fr] items-center justify-items-center rounded-lg 
            bg-white p-2 shadow-lg shadow-slate-400 duration-200 lg:grid-cols-2 lg:grid-rows-[3fr_1fr] 
            lg:gap-x-4 lg:overflow-ellipsis lg:hover:translate-y-1 lg:hover:bg-slate-50 lg:hover:shadow-none"
        >
            <div
                className="
                flex h-full w-full items-center justify-center self-start overflow-hidden 
                rounded-lg bg-slate-100 p-2 lg:col-span-1 lg:row-span-2 lg:justify-self-start"
            >
                <img src={image} alt={name} title={name} className="h-full" />
            </div>
            <h1 className="self-start text-[13px] font-bold text-slate-500 lg:col-span-1 lg:text-sm">
                {name}
            </h1>
            <p className="self-end justify-self-end font-serif text-xs font-bold text-slate-400">
                <span className="text-[8px]">تومان</span> {price.toLocaleString()}
            </p>
        </article>
    );
}
