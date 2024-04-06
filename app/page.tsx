"use client";

import { Button } from "@material-tailwind/react";

import {
  ArrowRightIcon,
  ArrowLeftIcon
} from "@heroicons/react/24/outline";

import Slider from "./components/slider";
import Product from "./components/product";
import Timer from "./components/timer";

export default function Home() {

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

  return(<div>
    <Slider />

    <div className="w-full h-[14rem] bg-gray-100 absolute z-[-10]"></div>
    <div className="grid gap-y-4 mx-40">
      <div className="mb-20">

        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-bold text-[#3e8e89]">Special sale</div>
          <div className="flex gap-2">
            <div>
              <Timer />
            </div>
            <Button variant="text" className="border border-[#3e8e89] p-1 rounded">
              <ArrowLeftIcon className="w-5 text-[#3e8e89]" />
            </Button>
            <Button variant="text" className="border border-[#3e8e89] p-1 rounded">
              <ArrowRightIcon className="w-5 text-[#3e8e89]" />
            </Button>
          </div>
        </div>
        <div className="flex gap-8 justify-around">
          {books.map(book => {
            return(<Product book={book} />)
          })}
        </div>
      </div>

      <div className="w-full h-32 flex bg-[#3e8e89] rounded-lg px-4 mb-14">
        <div className="w-2/3 p-4 text-center text-white">
          <div className="text-3xl font-bold">February Featured Reads</div>
          <div>Celebrate Black history by diving into these titles and authors.</div>
          <div><a href="#" className="underline">View All</a> </div>
        </div>
        <div className="w-1/3 flex gap-4">
          <img src={"en_book/image1.webp"}  className="w-28 relative mt-[-25px] mb-auto rounded-lg"/>
          <img src={"en_book/image2.webp"}  className="w-28 relative mt-[-25px] mb-auto rounded-lg"/>
          <img src={"en_book/image3.webp"}  className="w-28 relative mt-[-25px] mb-auto rounded-lg"/>
        </div>
      </div>

      <div className="pb-10 border-b-2">

        <div className="flex justify-between py-4">
          <div className="text-xl font-bold text-[#3e8e89]">New Books</div>
          <div className="flex gap-2">
            <div className="border border-[#3e8e89] text-[#3e8e89] p-1 rounded">
              View all
            </div>
            <Button variant="text" className="border border-[#3e8e89] text-[#3e8e89] p-1 rounded">
              <ArrowLeftIcon className="w-5" />
            </Button>
            <Button variant="text" className="border border-[#3e8e89] text-[#3e8e89] p-1 rounded">
              <ArrowRightIcon className="w-5" />
            </Button>
          </div>
        </div>
        <div className="flex gap-8 justify-around">
          {books.map(book => {
            return(<Product book={book} />)
          })}
        </div>
      </div>

      <div className="mb-10">

        <div className="flex justify-between py-4">
          <div className="text-xl font-bold text-[#3e8e89]">Best Sellers of the Week</div>
          <div className="flex gap-2">
            <div className="border border-[#3e8e89] text-[#3e8e89] p-1 rounded">
              View all
            </div>
            <Button variant="text" className="border border-[#3e8e89] text-[#3e8e89] p-1 rounded">
              <ArrowLeftIcon className="w-5" />
            </Button>
            <Button variant="text" className="border border-[#3e8e89] text-[#3e8e89] p-1 rounded">
              <ArrowRightIcon className="w-5" />
            </Button>
          </div>
        </div>
        <div className="flex gap-8 justify-around">
          {books.map(book => {
            return(<Product book={book} />)
          })}
        </div>
      </div>

      {/*<div className="h-28 bg-[url('/book/banner.jpg')] flex items-center justify-center rounded">
        <span className="text-white text-3xl">Read more, know more!</span>
      </div>*/}

      <div className="h-28 bg-gray-300 flex items-center gap-4 justify-center rounded-lg">
        <span className="text-[#3e8e89] text-3xl font-bold">DISCOVER MORE KIDS' BOOKS</span>
        <Button variant="filled" className="bg-[#3e8e89]">Shop All Kids Books</Button>
      </div>

      <div className="pb-10">
        <div className="flex justify-between py-4">
          <div className="text-xl font-bold text-[#3e8e89]">Selected publishers</div>
          <div className="flex gap-2">
            <div className="border border-[#3e8e89] text-[#3e8e89] p-1 rounded">
              View all
            </div>
            <Button variant="text" className="border border-[#3e8e89] text-[#3e8e89] p-1 rounded">
              <ArrowLeftIcon className="w-5" />
            </Button>
            <Button variant="text" className="border border-[#3e8e89] text-[#3e8e89] p-1 rounded">
              <ArrowRightIcon className="w-5" />
            </Button>
          </div>
        </div>
        <div className="w-full py-4 flex items-center justify-between">
          <div className="w-28 p-4 rounded border">
            <img src="./publishers/PenguinRandomHouse.png" />
            {/*<div className="text-center text-sm">Penguin Random House</div>*/}
          </div>
          <div className="w-28 p-4 rounded border">
            <img src="./publishers/HarperCollins.jpg" />
            {/*<div className="text-center text-sm">نشر آفرنگ</div>*/}
          </div>
          <div className="w-28 p-4 rounded border">
            <img src="./publishers/Quirk-books.jpg" />
            {/*<div className="text-center text-sm line-clamp-1">نشر نوین کتاب گویا</div>*/}
          </div>
          <div className="w-28 p-4 rounded border">
            <img src="./publishers/macmillan.jpg" />
            {/*<div className="text-center text-sm">نشر آدر</div>*/}
          </div>
          <div className="w-28 p-4 rounded border">
            <img src="./publishers/Chronicle.jpg" />
            {/*<div className="text-center text-sm">نشر یوشا</div>*/}
          </div>
          <div className="w-28 p-4 rounded border">
            <img src="./publishers/Holiday.jpg" />
            {/*<div className="text-center text-sm">نشر شنایا</div>*/}
          </div>
          <div className="w-28 p-4 rounded border">
            <img src="./publishers/Simon.png" />
            {/*<div className="text-center text-sm line-clamp-1">نشر پیک دبیران</div>*/}
          </div>
          <div className="w-28 p-4 rounded border">
            <img src="./publishers/Houghton.png" />
            {/*<div className="text-center text-sm line-clamp-1">نشر پیک دبیران</div>*/}
          </div>
        </div>
      </div>

    </div>
  </div>)
}
