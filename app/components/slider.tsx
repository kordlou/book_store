"use client";

import { Carousel } from "@material-tailwind/react";

export default function Slider() {
    return(<div>
        <Carousel transition={{ duration: 2 }} autoplay={true} autoplayDelay={4000} loop={true}>
            <img
                src="./book/slide1.webp"
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src="./book/slide2.webp"
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src="./book/slide3.webp"
                alt="image 3"
                className="h-full w-full object-cover"
            />
        </Carousel>
    </div>)
}
