import React from "react";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  increaseQuantity,
  decreaseQuantity,
} from "../slices/basketSlice";
import Image from "next/image";
import { MinusSmIcon, PlusSmIcon, StarIcon } from "@heroicons/react/solid";
import { NumericFormat } from "react-number-format";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
  rating,
  quantity,
}) => {
  const Increasequantity = () => {
    dispatch(increaseQuantity({ id: id }));
  };
  const Decreasequantity = () => {
    dispatch(decreaseQuantity({ id: id }));
  };
  const product = {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    hasPrime,
  };
  const dispatch = useDispatch();
  const addItemsToBasket = () => {
    dispatch(addToBasket(product));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        width={200}
        height={200}
        alt=""
        className="!mx-auto !max-h-[200px] !w-full !max-w-[200px] !flex-grow !object-contain"
      />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <StarIcon key={i} className="h-5 text-yellow-500" />;
            })}
        </div>
        <p className="my-2 text-xs line-clamp-3">{description}</p>
        <NumericFormat
          value={price}
          displayType="text"
          thousandSeparator={true}
          prefix="£"
        />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* Right add/remove buttons */}

      <div className="my-auto flex items-center justify-between space-x-4">
        <MinusSmIcon className="w-7 border p-1" onClick={Decreasequantity} />
        {quantity}
        <PlusSmIcon className="w-7 border p-1" onClick={Increasequantity} />
      </div>
    </div>
  );
};

export default CheckoutProduct;
