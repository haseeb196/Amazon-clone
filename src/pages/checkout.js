import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";
import { NumericFormat } from "react-number-format";

const Checkout = () => {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
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
            className="!max-h-[250px] !max-w-[1020px]  !flex-grow  !object-contain"
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
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  <NumericFormat
                    value={total}
                    displayType="text"
                    thousandSeparator={true}
                    prefix="£"
                  />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "cursor-not-allowed border-gray-200 from-gray-300 to-gray-500 text-gray-300"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;