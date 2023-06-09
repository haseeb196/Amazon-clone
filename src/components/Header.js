import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header className="sticky top-0 z-50">
      {/* Top */}
      <div className="flex flex-grow items-center bg-amazon_blue p-1 py-2">
        <div
          onClick={() => router.push("/")}
          className="relative mt-2 flex  flex-grow  items-center sm:flex-grow-0"
        >
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            alt=""
            className="!mx-auto !max-h-[40px] !max-w-[150px] !flex-grow !cursor-pointer !object-contain"
          />
        </div>
        {/* search */}
        <div className="hidden h-10 flex-grow cursor-pointer items-center rounded-md bg-yellow-400 hover:bg-yellow-500 sm:flex">
          <input
            type="text"
            className="focus:outline-none h-full w-6 flex-shrink flex-grow rounded-l-md p-2 px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="mx-6 flex items-center space-x-6 whitespace-nowrap text-xs text-white">
          <div className="link" onClick={!session ? signIn : signOut}>
            <p>{session ? "Hello, " + session.user.name : "Hello Me"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link" onClick={() => router.push("/orders")}>
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="link relative flex items-center"
          >
            <span className="absolute right-0 top-0 h-4 w-4 rounded-full bg-yellow-400 text-center font-bold text-black md:right-10">
              {items?.reduce((total, current) => total + current.quantity, 0)}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="mt-2 hidden font-extrabold md:inline md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex items-center space-x-3 bg-amazon_blue-light p-2 pl-6 text-sm text-white">
        <p className="link flex items-center">
          <MenuIcon className="mr-1 h-6" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
