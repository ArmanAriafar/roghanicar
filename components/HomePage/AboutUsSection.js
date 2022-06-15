export default function AboutUsSection() {
    return (
        <section
            className="
                flex justify-center items-center flex-col w-full max-w-xs m-auto px-4 pt-6 
                pb-8 gap-y-2 lg:grid lg:grid-cols-3 lg:grid-rows-[1fr_3fr] lg:justify-items-center lg:max-w-5xl"
        >
            <div className="w-fit text-orange-500 font-thin text-lg col-span-3 lg:justify-self-start">
                <h5>روغنی‌کار چطوری کار میکنه؟</h5>
                <div className="h-2 w-full bg-orange-500 opacity-30 relative bottom-3" />
            </div>
            <div className="font-extrabold self-start mt-4">
                <div>
                    <h5 className="text-slate-500">
                        <span className="text-orange-500 text-sm">۱.</span> خرید و ثبت فاکتور
                    </h5>
                    <p className="font-semibold text-gray-400 mt-2 text-sm">
                        مرحله ای که فاکتور شما برای ما ارسال میشه. محصول سفارش داده شده آماده و به پردازش سپرده میشه.
                    </p>
                </div>
            </div>
            <div className="font-extrabold self-start mt-4">
                <div>
                    <h5 className="text-slate-500">
                        <span className="text-orange-500 text-sm">۲.</span> پردازش سفارش و ارسال
                    </h5>
                    <p className="font-semibold text-gray-400 mt-2 text-sm">
                        مرحله‌ای که کیفیت محصول بررسی میشه، تا به آدرس ثبت شده تو سایت ارسال بشه که برسه خدمتتون برای مصرفتون.
                    </p>
                </div>
            </div>
            <div className="font-extrabold self-start mt-4">
                <div>
                    <h5 className="text-slate-500">
                        <span className="text-orange-500 text-sm">۳.</span> پشتیبانی محصول
                    </h5>
                    <p className="font-semibold text-gray-400 mt-2 text-sm">
                        محصول رسیده و یه موضوعی نظرتون رو به خودش جلب کرده؟ کاری نداره که، ما هستیم تا شما رو راهنمایی و پشتیبانی
                        کنیم
                    </p>
                </div>
            </div>
        </section>
    );
}
