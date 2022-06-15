//? Styles
import "../styles/globals.css";
import "../styles/font.css";
import "../styles/index.css";

//? Framer motion
import { AnimateSharedLayout } from "framer-motion";

//? Provider
import CartProvider from "../providers/CartProvider";

//? Swiper
import "swiper/css/bundle";

//? react-hot-toast
import { Toaster } from "react-hot-toast";

//? Components
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <AnimateSharedLayout>
                <Layout>
                    <Toaster position="top-left" reverseOrder={false} />
                    <Component {...pageProps} />
                </Layout>
            </AnimateSharedLayout>
        </CartProvider>
    );
}

export default MyApp;
