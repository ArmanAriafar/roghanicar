//? Required
import Link from "next/link";

export default function OilArticleSlider({ title, link }) {
    return (
        <Link href={`products/${link}`}>
            <a className="w-full">
                <article
                    className="
                        bg-slate-100 rounded-md w-full py-5 font-serif 
                        font-extrabold text-base text-slate-500 hover:bg-orange-100 duration-200 hover:text-orange-500"
                >
                    <h1>{title}</h1>
                </article>
            </a>
        </Link>
    );
}
