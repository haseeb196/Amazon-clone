import React from "react";

const OrderImage = ({ image, quantity }) => {
  return (
    <>
      <img
        src={image}
        key={image}
        alt=""
        className="h-20 object-contain sm:h-32"
      />
      <p className="flex gap-1 self-end">
        <span>x</span>
        {quantity}
      </p>
    </>
  );
};

export default OrderImage;
