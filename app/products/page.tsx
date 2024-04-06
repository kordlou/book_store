"use client";

import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Switch,
    Checkbox,
    Input,
    Slider
} from "@material-tailwind/react";

import {
    BarsArrowDownIcon
} from "@heroicons/react/24/outline";

import Product from "../components/product";

export default function Products() {
    const books = [
        {
            name: "Ikigai book by Francesc Miralles Hector Garcia",
            price: 18.5,
            discount: 20,
            image: "ikigai.webp"
        },
        {
            name: "The Midnight Library book by Matt Haig",
            price: 20,
            discount: 10,
            image: "theMidnightLibrary.webp"
        },
        {
            name: "The First to Die at the End book by Adam Silvera",
            price: 30,
            discount: 45,
            image: "theFirsttoDieattheEnd.jpg"
        },
        {
            name: "It Starts with Us book by Colleen Hoover",
            price: 50.5,
            discount: 15,
            image: "itStartswithUs.jpg"
        },
        {
            name: "Minecraft book by Jason Fry",
            price: 25,
            discount: 10,
            image: "minecraft.jpg"
        },
        {
            name: "Clean Code by Robert C. Martin",
            price: 70.5,
            discount: 60,
            image: "cleanCode.jpg"
        }
    ];

    function Icon({ id, open }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`${id === open ? "rotate-180" : ""} h-4 w-4 transition-transform`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        );
    }

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);


    return(<div className="flex gap-4 mx-40 mt-8">
        <div className="w-1/4 border rounded-lg p-4">
            <div className="pb-2 border-b font-bold text-lg">
                Filters
            </div>
            <div>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader className="text-md" onClick={() => handleOpen(1)}>Brand</AccordionHeader>
                    <AccordionBody>
                        <div className="flex items-center">
                            <Checkbox color="teal" />
                            Penguin Random House
                        </div>
                        <div className="flex items-center">
                            <Checkbox color="teal" />
                            Harper Collins
                        </div>
                        <div className="flex items-center">
                            <Checkbox color="teal" />
                            Quirk books
                        </div>
                        <div className="flex items-center">
                            <Checkbox color="teal" />
                            Macmillan
                        </div>
                        <div className="flex items-center">
                            <Checkbox color="teal" />
                            Chronicle Books
                        </div>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader className="text-md" onClick={() => handleOpen(2)}>Price range</AccordionHeader>
                    <AccordionBody>
                        <div>
                            <div className="w-full flex items-center gap-2">
                                <div className="w-1/2">
                                    {/*<Input
                                    className="!border !border-gray-300 focus:!border-gray-900"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    containerProps={{ className: "min-w-[100px]" }}
                                />*/}
                                    <span>From</span>
                                    <input className="border rounded p-2 w-full" />
                                </div>
                                <div className="w-1/2">
                                    <span>To</span>
                                    <input className="border rounded p-2 w-full" />
                                </div>
                            </div>
                            <div className="pt-8">
                                <Slider color="teal" defaultValue={50} />
                            </div>
                        </div>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader className="text-md" onClick={() => handleOpen(3)}>Paper type</AccordionHeader>
                    <AccordionBody>
                        <div className="flex items-center">
                            <Checkbox color="teal" />
                            Bond Paper
                        </div>
                        <div className="flex items-center">
                            <Checkbox color="teal" />
                            Tracing Paper
                        </div>
                        <div className="flex items-center">
                            <Checkbox color="teal" />
                            Cardstock
                        </div>
                        <div className="flex items-center">
                            <Checkbox color="teal" />
                            Inkjet Paper
                        </div>
                        <div className="flex items-center">
                            <Checkbox color="teal" />
                            Matte Paper
                        </div>
                        <div className="flex items-center">
                            <Checkbox color="teal" />
                            Parchment paper
                        </div>
                    </AccordionBody>
                </Accordion>
                <div className="flex items-center justify-between py-4">
                    <div className="font-bold text-blue-gray-800">
                        Available
                    </div>
                    <div>
                        <Switch color="teal" defaultChecked />
                    </div>
                </div>
                <div className="flex items-center justify-between py-4">
                    <div className="font-bold text-blue-gray-800">
                        Discounted
                    </div>
                    <div>
                        <Switch color="teal" />
                    </div>
                </div>
            </div>
        </div>
        <div className="w-3/4">
            <div className="flex items-center justify-between border-b border-gray-300 pb-2 mb-4 text-gray-600 text-sm">
                <div className="flex flex-row items-center gap-x-4 grow">
                    <div className="flex gap-1">
                        <BarsArrowDownIcon className="w-5"/>
                        <span className="font-bold">Ordering:</span>
                    </div>
                    <span>Bestselling</span>
                    <span>Most visited</span>
                    <span>The newest</span>
                    <span>Cheapest</span>
                    <span>The most expensive</span>
                </div>
                <div>6 goods</div>
            </div>
            <div className="grid grid-cols-5 gap-6">
                {books.map(book => {
                    return(<Product book={book} />)
                })}
            </div>
        </div>
    </div>)
}