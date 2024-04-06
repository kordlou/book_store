"use client";

import { Rating } from "@material-tailwind/react";

export default function Product() {
    return (
        <div className="mx-40">
            <div className="p-4 my-6 rounded bg-gray-100"></div>
            <div className="flex">
                <div className="w-1/4 flex justify-center border rounded p-4 ">
                    <img src="./en_book/theMidnightLibrary.webp"/>
                </div>
                <div className="w-3/4 flex gap-2">
                    <div className="w-2/3 px-4">
                        <div className="border-b pb-2 mb-2">
                            <div className="font-bold text-xl pb-2">The Midnight Library book by Matt Haig</div>
                            <div>
                                <div className="flex items-center gap-2 font-bold text-blue-gray-500">
                                    4.7
                                    <Rating value={4} readonly />
                                    <span className="font-medium text-blue-gray-500">
                                    Based on 134 Reviews
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <span className="font-bold">Attributes</span>
                            <ul className="list-disc text-sm px-4 py-2">
                                <li>Book size: Medium octavo</li>
                               <li>Book Cover Type: -</li>
                                <li>Author: Matt Haig</li>
                            </ul>

                        </div>
                    </div>
                    <div className="w-1/3 border rounded p-2">
                        <div className="bg-green-100 border rounded p-6">
                            <span>10000</span>
                            <span>تومان</span>
                        </div>
                        <div>
                            <div>
                                <span>فروشنده</span>
                            </div>
                            <div>
                                <div>
                                    <div>ارسال عادی</div>
                                    <div>ارسال اکسپرس</div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <button className="w-full bg-green-500 text-white rounded p-6">افزودن به سبد خرید</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
