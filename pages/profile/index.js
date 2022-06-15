//? Required
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

//? Icons
import { BiEdit } from "react-icons/bi";

export default function ProfilePage() {
    return (
        <>
        <Head>
            <title>پروفایل من | مشخصات ثبت شده در سامانه | روغنی کار</title>
        </Head>
            <main className="min-h-screen px-4 lg:pt-20">
                <div
                    className="
                    m-auto grid w-full max-w-xs grid-cols-2 items-center
                    px-4 py-6 font-extrabold text-slate-400"
                >
                    <div className="w-fit justify-self-start text-lg font-thin text-orange-500">
                        <h4>پروفایل من</h4>
                        <div className="relative bottom-3 h-2 w-full bg-orange-500 bg-opacity-30" />
                    </div>
                    <Link href="/profile/last-orders">
                        <a className="justify-self-end">سفارشات من</a>
                    </Link>
                </div>
                <motion.section
                    initial="initialProfile"
                    animate="animateProfile"
                    variants={{
                        initialProfile: {
                            opacity: 0,
                        },
                        animateProfile: {
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                            },
                        },
                    }}
                    className="
                    m-auto grid h-fit w-full max-w-xl auto-rows-auto items-center 
                    gap-y-6 rounded-3xl border-2 border-orange-500 bg-white p-4 shadow-2xl shadow-slate-400"
                >
                    <div className="grid gap-y-3">
                        <h3 className="font-extrabold text-slate-500">نام من:</h3>
                        <h6
                            className="
                        w-full rounded-lg bg-slate-100 py-2 px-4 text-center 
                        font-bold text-slate-500"
                        >
                            بهرام رادان
                        </h6>
                    </div>
                    <div className="grid gap-y-3">
                        <h3 className="font-extrabold text-slate-500">شماره ملی من:</h3>
                        <h6
                            className="
                            w-full rounded-lg bg-slate-100 py-2 px-4 text-center 
                            font-bold text-slate-500"
                        >
                            ۱۰۵۰۸۶۳۷۸۱
                        </h6>
                    </div>
                    <div className="grid gap-y-3">
                        <h3 className="font-extrabold text-slate-500">خط تلفن من:</h3>
                        <h6
                            className="
                            w-full rounded-lg bg-slate-100 py-2 px-4 text-center 
                            font-bold text-slate-500"
                        >
                            ۰۹۱۰۸۸۰۳۷۲۷
                        </h6>
                    </div>
                    <button className="mt-4 flex items-center justify-self-center text-sm font-light text-orange-500">
                        <BiEdit className="text-sm" />
                        ویرایش اطلاعات
                    </button>
                </motion.section>
            </main>
        </>
    );
}
