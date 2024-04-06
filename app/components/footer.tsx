"use client";

import { Input, Button } from "@material-tailwind/react";

export default function Footer() {
    return (
        <div>
            <div className="w-full bg-gray-200 mt-4 py-8">
                <div className="mx-40">
                    <div className="flex items-center pb-8 border-b border-gray-400">
                        <div>
                            <span>Join Our Newsletter</span>
                            <div className="w-96 flex gap-2">
                                <Input label="Enter your email address..." className="bg-white" />
                                <Button variant="filled" className="bg-green-800">Subscribe</Button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="grid grid-cols-4 pt-8">
                        <div>
                            <h1 className="font-bold text-[16px] mb-4">Who We Are</h1>
                            <div className="grid grid-rows-3">
                                <a>About Us</a>
                                <a>Our Pricing</a>
                                <a>Location</a>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-[16px] mb-4">Help</h1>
                            <div className="grid grid-rows-3">
                                <a>Orders</a>
                                <a>Shipping</a>
                                <a>Loyalty</a>
                                <a>FAQs</a>
                                <a>Contact Us</a>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-[16px] mb-4">My Account</h1>
                            <div className="grid grid-rows-3">
                                <a>Profile</a>
                                <a>My Rewards</a>
                                <a>Past Orders</a>
                                <a>My Gift Cards</a>
                                <a>Wishlist</a>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-[16px] mb-4">Featured</h1>
                            <div className="grid grid-rows-3">
                                <a>Book Outlet Rewards</a>
                                <a>Refer A Friend</a>
                                <a>Gift Cards</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-400 p-4 text-center">
                Copyright © 2024. Online Book Shop. All Rights Reserved
            </div>
        </div>
    )
}
