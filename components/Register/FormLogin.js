//? Required
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";

//? Icons
import { BsFillPhoneVibrateFill, BsFillChatRightTextFill } from "react-icons/bs";

//? Phone
const INITIAL_PHONE = {
    phoneNum: "",
};

const VALIDATE_PHONE = yup.object().shape({
    phoneNum: yup
        .string()
        .min(10, "خطا: شماره وارد شده اشتباه است")
        .max(10, "خطا: شماره وارد شده اشتباه است")
        .required("خطا: لطفا شماره تلفن خود را وارد کنید"),
});

const SUBMIT_PHONE = (values) => {
    console.table(values);
};

//? Code
const INITIAL_CODE = {
    validCode: "",
};

const VALIDATE_CODE = yup.object().shape({
    validCode: yup
        .string()
        .min(6, "خطا: کد وارد شده اشتباه است")
        .max(6, "خطا: کد وارد شده اشتباه است")
        .required("خطا: لطفا کد پیامکد شده را وارد کنید"),
});

//? jsx
export default function FormLogin() {
    const [error, setError] = useState(null);

    const SUBMIT_CODE = (values) => {
        try {
            console.table(values);
            setError(null);
            router.replace("/products");
        } catch (error) {
            setError(error);
        }
    };

    //* to pass clients after login
    const router = useRouter();

    return (
        <motion.section
            key="login"
            initial="loginInitial"
            animate="loginAnimate"
            variants={{
                loginInitial: {
                    opacity: 0,
                },
                loginAnimate: {
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                    },
                },
            }}
            className="
            w-11/12 max-w-md rounded-3xl border-4 border-orange-500
            bg-white shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
        >
            <div className="flex flex-col items-center justify-center gap-y-8 p-4">
                <Formik initialValues={INITIAL_PHONE} validationSchema={VALIDATE_PHONE} onSubmit={SUBMIT_PHONE} validateOnMount>
                    {(formik) => {
                        return (
                            <Form className="flex w-full flex-col items-center justify-center">
                                <label htmlFor="phoneNum" className="self-start font-extrabold text-orange-500">
                                    شماره موبایل
                                </label>
                                <div
                                    className="
                                    mt-4 flex w-full flex-row-reverse items-center
                                    justify-center rounded-md bg-slate-100 p-1 py-2.5 text-slate-400"
                                >
                                    <BsFillPhoneVibrateFill className="w-[10%] -rotate-12 text-2xl" />
                                    <Field
                                        name="phoneNum"
                                        id="phoneNum"
                                        type="number"
                                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                                        dir="ltr"
                                        className="
                                        w-[90%] rounded-md border-none bg-inherit text-center font-serif font-bold 
                                        tracking-widest outline-none placeholder:font-sans placeholder:font-bold 
                                        placeholder:tracking-widest placeholder:text-slate-300"
                                    />
                                </div>
                                {ErrorMessage && (
                                    <p className="mt-2 text-sm font-bold text-red-500">
                                        <ErrorMessage name="phoneNum" />
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    disabled={!formik.isValid || formik.isSubmitting}
                                    className="
                                    mt-2 w-1/2 self-end rounded-md bg-orange-100 py-2
                                    font-bold text-orange-500 duration-200 disabled:bg-slate-50 disabled:text-slate-300"
                                >
                                    ارسال رمز
                                </button>
                            </Form>
                        );
                    }}
                </Formik>
                <Formik initialValues={INITIAL_CODE} validationSchema={VALIDATE_CODE} onSubmit={SUBMIT_CODE} validateOnMount>
                    {(formik) => {
                        return (
                            <Form className="flex w-full flex-col items-center justify-center">
                                <label htmlFor="validCode" className="self-start font-extrabold text-orange-500">
                                    رمز یکبار مصرف
                                </label>
                                <div
                                    className="
                                    mt-4 flex w-full flex-row-reverse items-center
                                    justify-center rounded-md bg-slate-100 p-1 py-2.5 text-slate-400"
                                >
                                    <BsFillChatRightTextFill className="w-[10%] text-xl" />
                                    <Field
                                        name="validCode"
                                        id="validCode"
                                        dir="ltr"
                                        type="number"
                                        placeholder="۱۲۳۴۵۶"
                                        className="
                                        w-[90%] rounded-md border-none bg-inherit text-center font-serif font-bold tracking-widest outline-none 
                                        placeholder:font-sans placeholder:font-bold placeholder:tracking-widest placeholder:text-slate-300"
                                    />
                                </div>
                                {ErrorMessage && (
                                    <p className="mt-2 text-sm font-bold text-red-500">
                                        <ErrorMessage name="validCode" />
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    disabled={!formik.isValid || formik.isSubmitting}
                                    className="
                                mt-2 w-1/2 self-end rounded-md bg-orange-100 py-2
                                font-bold text-orange-500 duration-200 disabled:bg-slate-50 disabled:text-slate-300"
                                >
                                    ورود به اکانت
                                </button>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </motion.section>
    );
}
