//? Required
import Link from "next/link";
import { useEffect, useState } from "react";

//? Components
import OilMobileSlider from "../Slider/OilMobileSlider";

//? Icons
import { RiOilFill } from "react-icons/ri";
import OilDesktopSlider from "../Slider/OilDesktopSlider";

export default function OilSliderSection() {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const screenResolution = () => {
            const screenWidth = screen.width;
            return screenWidth;
        };
        const screenWidth = screenResolution();
        setScreenWidth(screenWidth);
    }, []);

    return (
        <section
            className="
                flex flex-col justify-center items-center max-h-72 max-w-[280px] m-auto
                lg:max-w-5xl"
        >
            <div className="flex items-center justify-center gap-x-1 lg:self-start">
                <span className="text-2xl text-orange-500 relative bottom-1 ">
                    <RiOilFill />
                </span>
                <div className="w-fit">
                    <h6 className="text-orange-500 font-thin">پرفروشترین ها | روغــن</h6>
                    <div className="bg-orange-500 opacity-20 h-3 w-full relative bottom-3" />
                </div>
            </div>
            {screenWidth < 1024 ? <OilMobileSlider /> : <OilDesktopSlider />}
            <Link href="/products">
                <a className="font-bold text-orange-500 text-left w-full m-auto text-sm mt-2">مشاهده همه محصولات</a>
            </Link>
        </section>
    );
}
