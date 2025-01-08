import React from 'react';
import { ImageCarousel } from './ImageCarousel';
import localFont from 'next/font/local';

const montague = localFont({ src: "../fonts/argentum-sans/ArgentumSans-Light.ttf" });
export default function Hero() {
    return (
        <main id="about" className={"w-screen mb-12"}>
            <div>
                <ImageCarousel />
            </div>
            <div className={"w-[90vw] md:max-w-[28rem] lg:max-w-[49rem] mt-12 mx-auto text-center"}>
                <p className={`${montague.className}`}>
                    <span >Newton and David Flowers</span> is a sustainable premier floral design
                    company based in Lagos, Nigeria, with over 30 years experience
                    specializing in fresh cut flowers for homes, offices and all special
                    occasions like birthdays, weddings e.t.c.
                    We have a passion for creating breathtaking floral arrangements and
                    cutting edge designs whereby the company has established itself as a
                    leader in the industry.
                    Newton and David with a wealth of experience and a keen eye for
                    detail have built a team of skilled floral designers with a passion
                    for excellence.

                </p>
            </div>
        </main>
    )
}
