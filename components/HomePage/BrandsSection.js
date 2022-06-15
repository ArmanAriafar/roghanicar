//? Required
import Link from "next/link";
import Image from "next/image";

//? JSX
export default function BrandsContainer() {
    return (
        <section className="m-auto mt-6 mb-10 flex max-w-sm flex-col items-center justify-center lg:max-w-5xl">
            <div className="flex items-center justify-center text-orange-500 lg:self-start">
                <div className="w-fit">
                    <h6 className="text-lg font-thin text-orange-500">برندها و یا شرکت‌های سازنده</h6>
                    <div className="relative bottom-3 h-2 w-full bg-orange-500 opacity-30" />
                </div>
            </div>
            <div className="grid w-11/12 grid-cols-2 items-center justify-items-center gap-y-4 lg:w-full lg:grid-cols-6">
                <Link href="/products">
                    <a>
                        <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                            <Image src="/images/behran.png" alt="behran | بهران" title="بهران" width={125} height={125} />
                        </article>
                    </a>
                </Link>
                <Link href="/products">
                    <a>
                        <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                            <Image src="/images/caspian.png" alt="Caspian | کاسپین" title="کاسپین" width={125} height={73} />
                        </article>
                    </a>
                </Link>
                <Link href="/products">
                    <a>
                        <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                            <Image src="/images/castrol.png" alt="Castrol | کاسترول" title="کاسترول" width={125} height={42} />
                        </article>
                    </a>
                </Link>
                <Link href="/products">
                    <a>
                        <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                            <Image src="/images/elf.png" alt="Elf | الف" title="الف" width={114} height={58} />
                        </article>
                    </a>
                </Link>
                <Link href="/products">
                    <a>
                        <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                            <Image src="/images/iranol.png" alt="Iranol | ایرانول" title="ایرانول" width={123} height={62} />
                        </article>
                    </a>
                </Link>
                <Link href="/products">
                    <a>
                        <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                            <Image src="/images/mobil.png" alt="mobil | موبیل" title="موبیل" width={121} height={50} />
                        </article>
                    </a>
                </Link>
                <Link href="/products">
                    <a>
                        <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                            <Image src="/images/motosel.png" alt="Motosel | موتوسل" title="موتوسل" width={128} height={58} />
                        </article>
                    </a>
                </Link>
                <Link href="/products">
                    <a>
                        <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                            <Image
                                src="/images/naftePars.png"
                                alt="NaftePars | نفته پارس"
                                title="نفت پارس"
                                width={107}
                                height={103}
                            />
                        </article>
                    </a>
                </Link>
                <Link href="/products">
                    <a>
                        <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                            <Image
                                src="/images/profiCar.png"
                                alt="ProfiCar | پروفی کار"
                                title="پروفی کار"
                                width={130}
                                height={68}
                            />
                        </article>
                    </a>
                </Link>
                <Link href="/products">
                    <a>
                        <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                            <Image src="/images/serkan.png" alt="Serkan | سرکان" title="سرکان" width={107} height={107} />
                        </article>
                    </a>
                </Link>
                <Link href="/products">
                    <a>
                        <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                            <Image src="/images/speedy.png" alt="Speedy | اسپیدی" title="اپسیدی" width={112} height={47} />
                        </article>
                    </a>
                </Link>
                <Link href="/products">
                    <a>
                        <article className="flex h-36 w-36 items-center justify-center rounded-lg shadow-lg duration-200 hover:shadow-none">
                            <Image src="/images/total.png" alt="Total | توتال" title="توتال" width={113} height={113} />
                        </article>
                    </a>
                </Link>
            </div>
        </section>
    );
}
