//? Required
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

//? Icons
import { HiOutlineLogin } from "react-icons/hi";

export default function NotFoundPage() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>خطا ۴۰۴ | صحفه‌ای که دنبال آن بودید پیدا نشد</title>
            </Head>
            <main className="flex min-h-screen min-w-full flex-col items-center justify-center gap-y-8">
                <Image
                    src="/images/SadOil.png"
                    alt="404Page"
                    title="صحفه‌ای که دنبال آن بودید پیدا نشد"
                    width={160}
                    height={225}
                />
                <div className="flex w-full max-w-xs flex-col items-center justify-center gap-y-8 font-sans font-extrabold">
                    <p className="text-slate-500">متاسفانه! صحفه‌ای که دنبال آن بودید پیدا نشد</p>
                    <button
                        onClick={() => router.replace("/products")}
                        className="gradientMobile flex w-full items-center justify-center gap-x-1 rounded-md py-2 font-extrabold text-white"
                    >
                        <HiOutlineLogin className="text-2xl" />
                        بازگشت به فروشگاه
                    </button>
                </div>
            </main>
        </>
    );
}
