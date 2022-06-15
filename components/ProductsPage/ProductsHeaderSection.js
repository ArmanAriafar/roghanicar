//? Required
import Image from "next/image";

export default function ProductsHeaderSection() {
    return (
        <header
            className="
            m-auto my-8 flex max-w-sm flex-col items-center 
            justify-end gap-y-12 px-4 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:justify-items-center lg:pt-20"
        >
            <div className="flex max-w-sm items-center justify-center drop-shadow-[0px_15px_10px_rgba(0,0,0,0.25)] lg:max-w-[26rem]">
                <img
                    src="/images/productsIcon.png"
                    alt="روغنی کار | فروش انواع روغن و فیلتر خودرو"
                    title="روغنی کار | فروش انواع روغن و فیلتر خودرو"
                />
            </div>
            <div className="flex flex-col items-start justify-center gap-y-4">
                <div className="flex flex-col gap-y-2 text-orange-500">
                    <h6 className="text-lg font-extrabold">مراحل</h6>
                    <div className="w-fit">
                        <h2 className="text-2xl font-thin">قبل از خرید محصول:</h2>
                        <div className="relative bottom-3 h-3 w-full bg-orange-500 opacity-30" />
                    </div>
                </div>
                <ol className="pr-3 text-sm font-semibold leading-6 text-slate-400 lg:text-base">
                    <li>۱. قیمت محصولات ما رو ببین و ... مقایسه نکن</li>
                    <li>۲. خدمات رسانی ما رو ببین و ... مقایسه نکن</li>
                    <li>
                        ۳. اعتماد و تعهدات ما رو ببین و ... <span className=" text-orange-500">حالا مقایسه کن</span>
                    </li>
                </ol>
                <div className="self-center text-sm font-semibold text-slate-400">
                    <p className="mb-1">
                        دارای نماد <span className="font-extrabold">اعتماد الکترونیک</span> از وزارت صنعت معدن و تجارت
                    </p>
                    <p>
                        و مجوز <span className="font-extrabold">کسب و کار اینترنتی</span> از توسعه تجارت الکترونیکی
                    </p>
                </div>
                <p className="self-center text-sm font-extrabold text-slate-200">
                    اگه داری اینو میخونی، بدون که: افتخار ما، رضایت توست
                </p>
            </div>
        </header>
    );
}
