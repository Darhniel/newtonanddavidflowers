import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import localFont from 'next/font/local';

const argumentum = localFont({ src: "../fonts/argentum-sans/ArgentumSans-SemiBold.ttf" })
const argumentumRegular = localFont({ src: "../fonts/argentum-sans/ArgentumSans-Light.ttf" })

export default function Footer() {
    return (
        <footer id="footer" className={"bg-[#E5E4E2] py-12"}>
            <div className={"flex justify-between flex-col items-center w-[90vw] mx-auto gap-12 xl:flex-row"}>
                <div className={"flex flex-col items-center gap-16"}>
                    <Link href={"/"}>
                        <Image
                            src={"/logo.png"}
                            alt=''
                            width={80}
                            height={35}
                        />
                    </Link>
                    <nav className={"flex"}>
                        <SocialIcon
                            network={"facebook"}
                            url={"https://www.facebook.com/NewtonandDavid"}
                            bgColor={"transparent"}
                        />
                        <SocialIcon
                            network={"twitter"}
                            url={"https://twitter.com/newtonanddavid?lang=en"}
                            bgColor={"transparent"}
                        />
                        <SocialIcon
                            network={"instagram"}
                            url={"https://www.instagram.com/newtonanddavidflowers/?hl=en"}
                            bgColor={"transparent"}
                        />
                    </nav>
                </div>

                <div className={"flex items-center gap-4 flex-col xl:flex-row"}>
                    <div>
                        <h3 className={`${argumentum.className} font-semibold text-center mb-4 text-3xl`}>Ikeja GRA</h3>
                        <p className={`${argumentumRegular.className} text-center`}>
                            27 Oduduwa Way GRA, Ikeja,
                            Lagos State, Nigeria.
                        </p>
                        <Link href="tel:+2348074373812" className={`${argumentumRegular.className} block hover:underline w-fit mx-auto`}>
                            +234-807-437-3812
                        </Link>
                        <Link href="tel:+2348074373868" className={`${argumentumRegular.className} block hover:underline w-fit mx-auto`}>
                            +234-807-437-3868
                        </Link>
                        <Link href="mailto:newtonanddavidflowers@gmail.com" className={`${argumentumRegular.className} block hover:underline w-fit mx-auto`}>
                            newtonanddavidflowers@gmail.com
                        </Link>
                    </div>
                    <div>
                        <h3 className={`${argumentum.className} font-semibold text-center mb-4 text-3xl`}>
                            Victoria Island
                        </h3>
                        <p className={`${argumentumRegular.className} text-center`}>
                            Elpina Plaza | Plot 642c Akin Adesola Street, Victoria Island, Lagos
                        </p>
                        <Link href="tel:+2347036091228" className={`${argumentumRegular.className} block hover:underline w-fit mx-auto`}>
                            +234-70-3609-1228
                        </Link>
                        <Link href="tel:+2347030059833" className={`${argumentumRegular.className} block hover:underline w-fit mx-auto`}>
                            +234-70-3005-9833
                        </Link>
                        <Link href="mailto:newtonanddavidflowers@gmail.com" className={`${argumentumRegular.className} block hover:underline w-fit mx-auto`}>
                            newtonanddavidflowers@gmail.com
                        </Link>
                    </div>
                    <div>
                        <h3 className={`${argumentum.className} font-semibold text-center mb-4 text-3xl`}>Abuja</h3>
                        <p className={`${argumentumRegular.className} text-center`}>
                            Ceddi Plaza | 264 Tafawa Balewa, CBD, Abuja
                        </p>
                        <Link href="tel:+2348077574320" className={`${argumentumRegular.className} block hover:underline w-fit mx-auto`}>
                            +234-80-7757-4320
                        </Link>
                        <Link href="tel:+2348023830211" className={`${argumentumRegular.className} block hover:underline w-fit mx-auto`}>
                            +234-70-3005-9833
                        </Link>
                        <Link href="mailto:newtonanddavidflowers@gmail.com" className={`${argumentumRegular.className} block hover:underline w-fit mx-auto`}>
                            newtonanddavidflowers@gmail.com
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
