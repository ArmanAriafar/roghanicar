//? Required
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

//? Components
import FormLogin from "../../components/Register/FormLogin";

//? Component
export default function LoginPage() {
    const router = useRouter();
    const navigateHandler = () => {
        router.replace("/register");
    };
    return (
        <>
            <Head>
                <title>ورود به اکانت | روغنی کار | فروش انواع روغن و فیلتر خودرو</title>
            </Head>

            <main
                className="
                flex min-h-screen flex-col items-center bg-gradient-to-tl
                from-[#FF4800] to-[#FE730D] lg:pt-20"
            >
                <div className="grid h-20 w-11/12 max-w-md grid-cols-[2fr_1fr_2fr] items-center justify-items-center text-white">
                    <button onClick={navigateHandler} className="text-sm font-bold text-orange-100 underline underline-offset-2">
                        ثـــبت نام
                    </button>
                    <Link href="/register">
                        <a className="text-sm font-bold text-orange-200">یا</a>
                    </Link>
                    <div className="relative top-[3px] w-fit font-black text-white">
                        <h2>قبلا ثبت نام کردم</h2>
                        <div className="relative bottom-2 h-2 w-full bg-white bg-opacity-30" />
                    </div>
                </div>
                <FormLogin />
            </main>
        </>
    );
}
