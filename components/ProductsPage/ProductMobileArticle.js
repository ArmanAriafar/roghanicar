//? JSX
export default function ProductMobileArticle({ image, name, price }) {
    return (
        <article
            className="
                grid h-60 w-40 grid-rows-[3fr_1.5fr_.5fr] items-center justify-items-center 
                rounded-lg bg-white p-2 shadow-lg shadow-slate-300"
        >
            <div className="flex aspect-square h-full w-full items-center justify-center self-start overflow-hidden rounded-lg bg-slate-100 p-2">
                <img src={image} alt={name} title={name} className="h-full" />
            </div>
            <h1 className="text-[13px] font-bold text-slate-500">{name}</h1>
            <p className="self-end justify-self-end font-serif text-xs font-bold text-slate-400">
                <span className="text-[8px]">تومان</span> {price.toLocaleString()}
            </p>
        </article>
    );
}
