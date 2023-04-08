import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";

const Checkout = () => {
  const items = useSelector(selectItems);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="mx-auto max-w-screen-2xl lg:flex">
        {/* left */}
        <div className="m-5 flex-grow shadow-sm">
          <Image
            src={"https://links.papareact.com/IKj"}
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col space-y-10 bg-white p-5">
            <h1 className="border-b pb-4 text-3xl">
              {items.length === 0
                ? "Your Amazon Basket is empty."
                : "Your Shopping Basket"}
            </h1>
            {items?.map(
              (
                {
                  rating,
                  id,
                  title,
                  price,
                  description,
                  category,
                  image,
                  hasPrime,
                },
                i
              ) => (
                <CheckoutProduct
                  key={i}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  hasPrime={hasPrime}
                  rating={rating}
                />
              )
            )}
          </div>
        </div>
        {/* Right */}
        <div></div>
      </main>
    </div>
  );
};

export default Checkout;
