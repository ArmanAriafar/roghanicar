//? Required
import Link from "next/link";
import { useEffect, useState } from "react";

//? Components
import FilterMobileSlider from "../Slider/FilterMobileSlider";
import FilterDesktopSlider from "../Slider/FilterDesktopSlider";

//? Icons
import { CgViewGrid } from "react-icons/cg";

export default function FilterSliderSection() {
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
        <section className="m-auto flex max-h-80 max-w-[280px] flex-col items-center justify-center lg:max-w-5xl">
            <div className="mt-8 flex items-center justify-center gap-x-1 lg:self-start">
                <span className="relative bottom-1 text-3xl text-orange-500">
                    <CgViewGrid />
                </span>
                <div className="w-fit">
                    <h6 className="font-thin text-orange-500">پرفروشترین ها | فیلتر</h6>
                    <div className="relative bottom-2 h-2 w-full bg-orange-500 opacity-20" />
                </div>
            </div>
            {screenWidth < 1024 ? <FilterMobileSlider /> : <FilterDesktopSlider />}
            <Link href="/products">
                <a className="m-auto mt-2 w-full text-left text-sm font-bold text-orange-500">مشاهده همه محصولات</a>
            </Link>
        </section>
    );
}
