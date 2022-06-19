//! SSR
//? Required
import axios from "axios";
export const getServerSideProps = async (context) => {
    const { productId } = context.params;
    const { data } = await axios.get(
        `http://localhost:3000/api/products/${productId}`
    );
    return {
        props: {
            product: data,
        },
    };
};

//! Component
//? Required
import Head from "next/head";
import Link from "next/link";
import { useCart, useCartActions } from "../../providers/CartProvider";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

//? Icons
import { RiFileAddLine } from "react-icons/ri";

//? Check In Cart
import { checkInCart } from "../../utils/CheckInCart";

export default function ProductPage({ product }) {
    const router = useRouter();
    const dispatch = useCartActions();
    const { cart } = useCart();
    const addToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
        toast.success(`${product.name} با موفقیت به فاکتور افزوده شد`, {
            duration: 4000,
            style: {
                padding: "16px",
                color: "#f97316",
                fontFamily: "IRANYekan",
                fontWeight: 600,
            },
            iconTheme: {
                primary: "#f97316",
                secondary: "#FFFAEE",
            },
        });
    };
    const { image, name, price, volume, type, useFor, serialNumber, madeIn, brand } =
        product;
    return (
        <>
            <Head>
                <title>مشخصات و یا خرید {name} | روغنی کار</title>
            </Head>
            <main
                className="
                grid-rows-auto grid w-full items-center justify-items-center gap-y-4 
                py-4 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-20 lg:pt-40"
            >
                <div
                    className="
                    flex h-80 w-full max-w-xs items-center justify-center overflow-hidden 
                    rounded-2xl bg-slate-200 p-8 lg:aspect-square lg:h-96 lg:max-w-sm lg:justify-self-end"
                >
                    <img src={image} alt={name} title={name} className="h-full" />
                </div>
                <div
                    className="
                    flex w-fit max-w-xs flex-col items-start justify-center gap-y-2 
                    self-start lg:self-center lg:justify-self-start"
                >
                    <h1 className="self-center font-sans text-base font-thin leading-8 text-orange-500">
                        {name}
                    </h1>
                    <table className="w-full">
                        <tbody className="font-serif font-extrabold  leading-9 text-slate-500">
                            <tr>
                                <td className="font-semibold">برند:</td>
                                <td className="text-slate-300">+</td>
                                <td>{brand}</td>
                            </tr>
                            {type && (
                                <tr>
                                    <td className=" font-semibold">نوع:</td>
                                    <td className="text-slate-300">+</td>
                                    <td className="font-sans">{type}</td>
                                </tr>
                            )}

                            {volume && (
                                <tr>
                                    <td className="font-semibold">حجم:</td>
                                    <td className="text-slate-300">+</td>
                                    <td>
                                        {volume}{" "}
                                        <span className="text-xs">لیتر</span>
                                    </td>
                                </tr>
                            )}

                            <tr>
                                <td className="font-semibold">مناسب برای:</td>
                                <td className="text-slate-300">+</td>
                                <td>{useFor}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">شماره سریال:</td>
                                <td className="text-slate-300">+</td>
                                <td>{serialNumber}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">کشور سازنده:</td>
                                <td className="text-slate-300">+</td>
                                <td>{madeIn}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">با ارزش:</td>
                                <td className="text-slate-300">+</td>
                                <td>
                                    {price.toLocaleString()}
                                    <span className="text-xs"> تومان</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        className="
                        gradientMobile m-auto mt-2 flex w-full max-w-xs items-center 
                        justify-center gap-x-1 rounded-lg py-2 font-extrabold text-white"
                        onClick={() =>
                            checkInCart(cart, product)
                                ? router.push("/checkout")
                                : addToCart(product)
                        }
                    >
                        <RiFileAddLine className="relative bottom-[1px] text-2xl" />
                        {!checkInCart(cart, product)
                            ? "افزودن به فاکتور"
                            : "افزوده شد، مشاهده فاکتور"}
                    </button>
                </div>
            </main>
            <section className="mt-8 flex h-36 w-full items-center justify-center bg-brandsBg lg:mt-40">
                <Link href="/products">
                    <a
                        className="
                            w-fit rounded-md bg-white bg-opacity-5 py-2 px-8 text-base
                            font-extrabold text-orange-500 shadow-lg backdrop-blur-sm "
                    >
                        مشاهده دیگر محصولات
                    </a>
                </Link>
            </section>
        </>
    );
}
