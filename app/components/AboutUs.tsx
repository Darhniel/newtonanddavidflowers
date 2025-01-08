import React from 'react';
import {ImagesCarousel} from './ImageCarousel';
import localFont from 'next/font/local';

const argumentum = localFont({src: "../fonts/argentum-sans/ArgentumSans-SemiBold.ttf"})
const argumentumItalic = localFont({src: "../fonts/argentum-sans/ArgentumSans-LightItalic.ttf"})

export default function AboutUs() {
    return (
        <>
            <div className={"flex flex-col gap-6 justify-between w-[90vw] mx-auto mb-12 md:flex-row md:gap-0"}>
                <div className={"text-center max-w-[24rem]"}>
                    <h2 className={`${argumentum.className} uppercase font-semibold text-2xl mb-2`}>our style</h2>
                    <p className={`${argumentumItalic.className}`}>
                        Newton and David flower is renowned for its unique sophisticated style that blends traditional elegance with modern flair. Our designs are inspired by nature, art, architecture and we ensure that every arrangement is a masterpiece.
                    </p>
                </div>
                <div className={`text-center max-w-[24rem]`}>
                    <h2 className={`${argumentum.className} uppercase font-semibold text-2xl mb-2`}>our services</h2>
                    <p className={`${argumentumItalic.className}`}>
                        Elevate any corporate space or event with our customized floral arrangements, tailored for corporate functions, social gatherings and home decor. Let our designs bring elegance and charm to your special moments.
                    </p>
                </div>
                <div className={"text-center max-w-[24rem]"}>
                    <h2 className={`${argumentum.className} uppercase font-semibold text-2xl mb-2`}>why us?</h2>
                    <ul>
                        <li className={`${argumentumItalic.className} mb-6`}>Attention to detail</li>
                        <li className={`${argumentumItalic.className} mb-6`}>Creativity and innovation</li>
                        <li className={`${argumentumItalic.className} mb-6`}>Exceptional service</li>
                    </ul>
                </div>
            </div>
            <h2 id="gallery" className={`${argumentum.className} text-center text-5xl font-bold underline mb-12`}>Gallery</h2>
            <div className={"flex items-center justify-center mb-12"}>
                <ImagesCarousel />
            </div>
        </>
    )
}
