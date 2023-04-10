import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MinusSmIcon, PlusSmIcon, StarIcon } from "@heroicons/react/solid";

import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  decreaseQuantity,
  increaseQuantity,
  selectItems,
} from "../slices/basketSlice";
import { NumericFormat } from "react-number-format";

const Product = ({ id, title, price, description, category, image }) => {
  const [rating, setRating] = useState(2);
  const items = useSelector(selectItems);
  const [hasPrime, setHasPrime] = useState();
  const dispatch = useDispatch();
  const max_rating = 5;
  const min_rating = 1;
  const data = [...items?.filter((x) => x.id === id)];
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    if (data[0]?.quantity > 0) {
      setQuantity(data[0]?.quantity);
    }
  }, [data]);
  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (max_rating - min_rating + 1)) + min_rating
    );
    setHasPrime(Math.random() < 0.5);
  }, []);
  const Increasequantity = () => {
    setQuantity((prev) => prev + 1);
    dispatch(increaseQuantity({ id: id }));
  };
  const Decreasequantity = () => {
    setQuantity((prev) => prev - 1);
    dispatch(decreaseQuantity({ id: id }));
  };
  const addItemsToBasket = () => {
    setQuantity(1);
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
      quantity: 1,
    };
    dispatch(addToBasket(product));
  };
  return (
    <div className="relative z-30 m-5 flex flex-col bg-white p-10">
      <p className="absolute right-2 top-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        height={200}
        width={200}
        alt=""
        className="!mx-auto !max-h-[200px]  !max-w-[200px] !flex-grow !object-contain"
      />
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
        <NumericFormat
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
      {quantity > 0 ? (
        <div className="mt-auto flex items-center justify-between">
          <MinusSmIcon className="w-7 border p-1" onClick={Decreasequantity} />
          {quantity}
          <PlusSmIcon className="w-7 border p-1" onClick={Increasequantity} />
        </div>
      ) : (
        <>
          <button onClick={addItemsToBasket} className="button mt-auto">
            Add to Basket
          </button>
        </>
      )}
    </div>
  );
};
export default Product;
