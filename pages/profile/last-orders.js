//? Required
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

//? Component
export default function PersonalInformation() {
    return (
        <>
        <Head>
            <title>مشاهده سفارشات من | روغنی کار</title>
        </Head>
            <main className="min-h-screen px-4 lg:pt-20">
                <div
                    className="
                    m-auto grid w-full max-w-xs grid-cols-2 items-center
                    px-4 py-6 font-extrabold text-slate-400"
                >
                    <Link href="/profile">
                        <a className="justify-self-start">پروفایل من</a>
                    </Link>
                    <div className="w-fit justify-self-end text-lg font-thin text-orange-500">
                        <h4>سفارشات من</h4>
                        <div className="relative bottom-3 h-2 w-full bg-orange-500 bg-opacity-30" />
                    </div>
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
                    m-auto min-h-[500px] w-full max-w-xl rounded-3xl 
                    border-2 border-orange-500 bg-white shadow-2xl"
                >
                    <div className="grid w-full grid-cols-3 items-center justify-items-center py-4">
                        <button>تکمیل شده</button>
                        <button>در حال پردازش</button>
                        <button>مرجوع شده</button>
                    </div>
                </motion.section>
            </main>
        </>
    );
}
