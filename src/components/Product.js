import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import CurrencyFormat from "react-currency-format";
const Product = ({ id, title, price, description, category, image }) => {
  const [rating, setRating] = useState(2);
  const [hasPrime, setHasPrime] = useState();
  const max_rating = 5;
  const min_rating = 1;
  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (max_rating - min_rating + 1)) + min_rating
    );
    setHasPrime(Math.random() < 0.5);
  }, []);
  return (
    <div className="relative z-30 m-5 flex flex-col bg-white p-10">
      <p className="absolute right-2 top-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => {
            return <StarIcon key={i} className="h-5 text-yellow-500" />;
          })}
      </div>
      <p className="my-2 text-xs line-clamp-2">{description}</p>
      <div className="mb-5">
        <CurrencyFormat
          value={price}
          displayType="text"
          thousandSeparator={true}
          prefix="£"
        />
      </div>
      {hasPrime && (
        <div className="-mt-5 flex items-center space-x-2">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="button mt-auto">Add to Basket</button>
    </div>
  );
};

export default Product;
