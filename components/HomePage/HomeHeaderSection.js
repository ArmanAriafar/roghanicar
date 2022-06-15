//? Required
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeHeaderSection() {
    return (
        <header className="grid grid-rows-2 items-center justify-items-center p-4 lg:grid-cols-2 lg:grid-rows-1 lg:gap-y-8 lg:gap-x-8 lg:pt-24">
            <div className="lg:justify-self-end">
                <motion.div
                    className="max-w-sm lg:hidden"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            scale: 0.9,
                            opacity: 0,
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                duration: 2,
                            },
                        },
                    }}
                >
                    <img
                        src="/images/desk.png"
                        alt="RoghaniCar.com"
                        title="روغنی کار | فروش محصولات روغن و فیلتر خودرو"
                    />
                </motion.div>
                <motion.div
                    className="hidden w-full max-w-xl lg:block"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            scale: 0.8,
                            opacity: 0,
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: 0.4,
                                duration: 1,
                            },
                        },
                    }}
                >
                    <img
                        src="/images/phone.png"
                        alt="RoghaniCar.com"
                        title="روغنی کار | فروش محصولات روغن و فیلتر خودرو"
                    />
                </motion.div>
            </div>
            <div className="flex w-full flex-col items-center gap-y-2 justify-self-start lg:mr-20 lg:mt-20 lg:w-[25rem] lg:self-start">
                <div className="w-fit lg:self-start">
                    <h1 className="text-[27px] font-thin text-orange-500">
                        به آسانی چند کلیک؛
                    </h1>
                    <div className="relative bottom-4 h-3 w-full bg-orange-500 opacity-30" />
                </div>
                <div className="max-w-sm lg:self-start">
                    <p className="text-base font-semibold leading-7 text-slate-500">
                        از هرجایی که هستی،
                        <br />
                        با هر دستگاهی که دم دستته،
                        <br />
                        به آسانی چند کلیک، روغن یا فیلترت تو راهه...
                    </p>
                    <p className="mt-3 font-extrabold text-slate-500">
                        یادت نره قبل از خرید، قیمتامون رو مقایسه کنی
                    </p>
                </div>
                <div
                    className="
                        my-5 flex w-full max-w-xs flex-col items-center justify-center gap-y-5 gap-x-2 
                        font-extrabold lg:grid lg:max-w-sm lg:grid-cols-2 lg:justify-items-center lg:self-start"
                >
                    <Link href="/register">
                        <a
                            className="
                                w-full rounded-lg py-2 text-center 
                                text-orange-500 underline lg:order-2 lg:no-underline
                                lg:duration-200 lg:hover:bg-orange-100"
                        >
                            ثبت نام
                        </a>
                    </Link>
                    <Link href="/products" passHref>
                        <a className="order-1 flex w-full flex-col items-center">
                            <div
                                className="
                                gradient relative z-20 w-full rounded-lg
                                bg-orange-100 py-3 text-center font-extrabold text-orange-500 duration-200  
                                hover:translate-y-1 hover:shadow-none lg:py-2.5 lg:text-white"
                            >
                                مشاهده محصولات
                                <div
                                    className="
                                        absolute bottom-1 left-1/2 hidden h-11 w-36 -translate-x-[50%] opacity-50 
                                        shadow-xl shadow-orange-600 duration-200 hover:w-48 hover:shadow-none lg:inline"
                                />
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    );
}
