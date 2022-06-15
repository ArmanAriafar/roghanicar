//? Required
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { data } from "../../data/db";

//? Components
import ProductsHeaderSection from "../../components/ProductsPage/ProductsHeaderSection";
import ProductListSection from "../../components/ProductsPage/ProductListSection";
import ProductMobileArticle from "../../components/ProductsPage/ProductMobileArticle";
import ProductDesktopArticle from "../../components/ProductsPage/ProductDesktopArticle";

//? JSX
export default function ProductPage() {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const screenResolution = () => {
            const screenWidth = screen.width;
            return screenWidth;
        };
        const screenWidth = screenResolution();
        setScreenWidth(screenWidth);
    }, []);

    const productListHandler = () => {
        const productList = data.map((product, key) => {
            if (screenWidth < 1024) {
                return (
                    <Link href={`/products/${product.id}`} key={key}>
                        <a>
                            <ProductMobileArticle
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        </a>
                    </Link>
                );
            } else {
                return (
                    <Link href={`/products/${product.id}`} key={key}>
                        <a>
                            <ProductDesktopArticle
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        </a>
                    </Link>
                );
            }
        });
        return productList;
    };

    const productList = productListHandler();

    return (
        <>
            <Head>
                <title>محصولات | فروش انواع روغن و فیلتر خوردو | روغنی‌کار</title>
                <meta
                    name="description"
                    content="لیست انواع محصولات روغن و فیلتر خودرو | سرکان - الف - پروفی کار - اسپیدی - موتوسل - توتال - موبیل - بهران - نفت پارس - کاسترول - ایرانول - کاسپین - ارو - تام - پرفلکس"
                />
            </Head>
            <AnimatePresence>
                <motion.div
                    key="productsPage"
                    initial="productsInitial"
                    animate="productsAnimate"
                    exit="productsExit"
                    variants={{
                        productsInitial: {
                            opacity: 0,
                        },
                        productsAnimate: {
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                            },
                        },
                        productsExit: {
                            opacity: 0,
                            transition: {
                                duration: 0.5,
                            },
                        },
                    }}
                >
                    <ProductsHeaderSection />
                    <main>
                        <ProductListSection />
                        <section className="m-auto mb-8 grid max-w-[350px] grid-cols-2 items-center justify-items-center gap-y-4 lg:mt-8 lg:max-w-5xl lg:grid-cols-3">
                            {productList}
                        </section>
                    </main>
                </motion.div>
            </AnimatePresence>
        </>
    );
}
