export default function FormStepper({ active }) {
    return (
        <header
            className="
                grid w-full grid-cols-2 items-center justify-items-center rounded-t-3xl 
                bg-white py-4 text-[15px] font-bold text-slate-300 shadow-lg shadow-slate-200"
        >
            <h5 className={active === "phone" ? "font-extrabold text-orange-500" : ""}>۱. شماره موبایل</h5>
            <h5 className={active === "personal" ? "font-extrabold text-orange-500" : ""}>۲. مشخصات فردی</h5>
        </header>
    );
}
