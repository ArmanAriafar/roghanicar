//? Required
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

//? Components
import FormPhoneNumber from "../../components/Register/FormPhoneNumber";
import FormPersonalInfo from "../../components/Register/FormPersonalInfo";

//? Component
export default function RegisterPage() {
    //* use for change comp from phone to personal
    const [isSubmitted, setIsSubmitted] = useState(false);

    //* use to pass phoneNumber
    const [phoneNumber, setPhoneNumber] = useState("");

    const router = useRouter();
    const navigateHandler = () => {
        router.replace("/login");
    };
    return (
        <>
            <Head>
                <title>ثبت نام | روغنی کار | فروش انواع روغن و فیلتر خودرو</title>
            </Head>
            <main
                className="
                flex min-h-screen w-full flex-col items-center justify-start 
                bg-gradient-to-tl from-[#FF4800] to-[#FE730D] lg:pt-20"
            >
                <div className="grid h-20 w-11/12 max-w-md grid-cols-[2fr_1fr_2fr] items-center justify-items-center text-white">
                    <div className="relative top-[3px] w-fit font-black text-white">
                        <h2>ثـــبت نام</h2>
                        <div className="relative bottom-2 h-2 w-full bg-white bg-opacity-30" />
                    </div>
                    <button onClick={navigateHandler} className="text-sm font-bold text-orange-200">
                        یا
                    </button>
                    <button onClick={navigateHandler} className="text-sm font-bold text-orange-100 underline underline-offset-2">
                        قبلا ثبت نام کردم
                    </button>
                </div>
                {!isSubmitted ? (
                    <FormPhoneNumber setIsSubmitted={setIsSubmitted} setPhoneNumber={setPhoneNumber} />
                ) : (
                    <FormPersonalInfo phoneNumber={phoneNumber} />
                )}
            </main>
        </>
    );
}
