"use client"
import { useState, useEffect } from "react";
import Image from 'next/image';

const ImagesCarousel = () => {
    const images = [
        "/gallery-1.jpg",
        "/gallery-2.jpg",
        "/gallery-3.jpg",
        "/gallery-4.jpg",
        "/flower-4.JPG",
        "/flower-5.JPG",
        "/flower-6.JPG",
        "/flower-7.JPG",
        "/flower-8.JPG",
        "/flower-12.JPG",
        "/flower-13.JPG",
        "/flower-14.JPG",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 4; // Display 4 images at a time
    const numDots = Math.ceil(images.length / itemsPerView);

    useEffect(() => {
        setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === numDots - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
    }, [numDots]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-[90vw] mx-auto px-4">
            {/* Image Container */}
            <div className="overflow-hidden">
                <div
                    className="flex gap-4 transition-transform duration-500 "
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`Slide ${index + 1}`}
                            width={275}
                            height={275}
                            className="w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] flex-shrink-0"
                            priority
                            unoptimized
                            loader={({ src }) => src}
                        />
                    ))}
                </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center space-x-3 mt-4 absolute bottom-0  w-[86vw] mx-auto">
                {Array.from({ length: numDots }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

const ImageCarousel = () => {
    const images = [
        "/hero-1.jpg",
        "/hero-2.jpg",
        "/hero-3.jpg",
        "/hero-4.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically move to the next slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Image Container */}
            <>
                <div
                    className="flex transition-transform duration-500 "
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <Image
                                key={index}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                width={1080}
                                height={700}
                                className="w-full h-full object-cover"
                                priority
                                unoptimized
                                loader={({ src }) => src}
                            />
                        </div>
                    ))}
                </div>
            </>

            {/* Dots Navigation */}
            <div className="flex justify-center space-x-3 mt-4 absolute left-[45%] bottom-6">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export { ImageCarousel, ImagesCarousel };