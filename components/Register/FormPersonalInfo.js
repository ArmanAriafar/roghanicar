//? Required
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";

//? Components
import FormStepper from "./FormStepper";

//? Icons
import { FaAddressCard, FaUserAlt } from "react-icons/fa";

//? Form
const INITIAL_VALUES = {
    fullName: "",
    nationalCode: "",
};

const VALIDATE_VALUES = yup.object().shape({
    fullName: yup.string().required("خطا: لطفا نام کامل خود را وارد کنید"),
    nationalCode: yup.string().max(10, "خطا: کد ملی وارد شده اشتباه است").required("خطا: لطفا کد ملی خود را وارد کنید"),
});

//? Component
export default function FormPersonalInfo({ phoneNumber }) {
    const [error, setError] = useState(null);

    //* pass to products after login
    const router = useRouter();

    const SUBMIT_VALUES = (values) => {
        try {
            const submitValues = { ...values, ...phoneNumber };
            console.table(submitValues);
            router.replace("/products");
            setError(null);
        } catch (error) {
            console.log(error);
            setError(error);
        }
    };
    return (
        <motion.section
            layoutId="form"
            className="
                w-11/12 max-w-md rounded-3xl border-4 border-orange-500
                bg-white shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
        >
            <FormStepper active={"personal"} />
            <div className="flex flex-col items-center justify-center gap-y-8 p-4">
                <Formik
                    initialValues={INITIAL_VALUES}
                    validationSchema={VALIDATE_VALUES}
                    onSubmit={SUBMIT_VALUES}
                    validateOnMount
                >
                    {(formik) => {
                        return (
                            <Form className="flex w-full flex-col items-center justify-center gap-y-2">
                                <label htmlFor="fullName" className="self-start font-extrabold text-orange-500">
                                    نام و نام خانوادگی:
                                </label>
                                <div
                                    className="
                                            mt-1 flex w-full flex-row-reverse items-center
                                            justify-center rounded-md bg-slate-100 p-1 py-2.5 text-slate-400"
                                >
                                    <FaUserAlt className="w-[10%] text-2xl" />
                                    <Field
                                        name="fullName"
                                        id="fullName"
                                        type="text"
                                        placeholder="مثلا: بهرام رادان"
                                        className="
                                                w-[90%] rounded-md border-none bg-inherit text-center font-serif font-bold 
                                                outline-none placeholder:font-sans placeholder:font-bold 
                                                placeholder:text-slate-300"
                                    />
                                </div>
                                {ErrorMessage && (
                                    <p className="mt-2 text-sm font-bold text-red-500">
                                        <ErrorMessage name="fullName" />
                                    </p>
                                )}
                                <label htmlFor="nationalCode" className="self-start font-extrabold text-orange-500">
                                    کد ملی:
                                </label>
                                <div
                                    className="
                                            mt-1 flex w-full flex-row-reverse items-center
                                            justify-center rounded-md bg-slate-100 p-1 py-2.5 text-slate-400"
                                >
                                    <FaAddressCard className="w-[10%] text-2xl" />
                                    <Field
                                        name="nationalCode"
                                        id="nationalCode"
                                        type="number"
                                        placeholder="1234567890"
                                        dir="ltr"
                                        className="
                                                w-[90%] rounded-md border-none bg-inherit text-center font-serif font-bold 
                                                tracking-widest outline-none placeholder:font-serif placeholder:font-bold 
                                                placeholder:tracking-widest placeholder:text-slate-300"
                                    />
                                </div>
                                {ErrorMessage && (
                                    <p className="mt-2 text-sm font-bold text-red-500">
                                        <ErrorMessage name="nationalCode" />
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    disabled={!formik.isValid || formik.isSubmitting}
                                    className="
                                    mt-2 w-full self-end rounded-md bg-orange-100 py-2
                                    font-bold text-orange-500 duration-200 disabled:bg-slate-50 disabled:text-slate-300"
                                >
                                    ثبت نام
                                </button>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </motion.section>
    );
}
