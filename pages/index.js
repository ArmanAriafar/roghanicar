//? Required
import Head from "next/head";
import { motion } from "framer-motion";

//? Components
import BrandsSection from "../components/HomePage/BrandsSection";
import AboutUsSection from "../components/HomePage/AboutUsSection";
import Dotted from "../components/HomePage/Dotted";
import FilterSliderSection from "../components/HomePage/FilterSliderSection";
import OilSliderSection from "../components/HomePage/OilSliderSection";
import HomeHeaderSection from "../components/HomePage/HomeHeaderSection";

//? jsx
export default function HomePage() {
    return (
        <>
            <motion.div
                key="homePage"
                initial="homeInitial"
                animate="homeAnimate"
                exit="homeExit"
                variants={{
                    homeInitial: {
                        opacity: 0,
                    },
                    homeAnimate: {
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                        },
                    },
                }}
            >
                <Head>
                    <title>روغنی کار | فروش انواع روغن و فیلتر خوردو</title>
                    <meta
                        name="description"
                        content="روغن موتور | روغن گیربکس | ضد یخ | روغن ترمز | روغن هیدرولیک | آب رادیاتور | فیلتر هوا | فیلتر روغن | فیلتر هوا کابین | فیلتر سوخت"
                    />
                </Head>
                <HomeHeaderSection />
                <main>
                    <OilSliderSection />
                    <Dotted />
                    <FilterSliderSection />
                    <Dotted />
                    <BrandsSection />
                    <Dotted />
                    <AboutUsSection />
                </main>
            </motion.div>
        </>
    );
}
