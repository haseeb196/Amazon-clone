import moment from "moment";
import React from "react";
import { NumericFormat } from "react-number-format";

const Order = ({ id, amount, amountShipping, items, timestamp, images }) => {
  return (
    <div className="relative rounded-md border">
      <div className="flex items-center space-x-10 bg-gray-100 p-5 text-sm text-gray-600">
        <div>
          <p className="text-xs font-bold">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            {" "}
            <NumericFormat
              value={amount}
              displayType="text"
              thousandSeparator={true}
              prefix="£"
            />{" "}
            - Next Day{" "}
            <NumericFormat
              value={amountShipping}
              displayType="text"
              thousandSeparator={true}
              prefix="£"
            />
          </p>
        </div>
        <p className="flex-1 self-end whitespace-nowrap text-right text-sm text-blue-500 sm:text-xl">
          {items.length} items
        </p>
        <p className="absolute right-2 top-2 w-40 truncate whitespace-nowrap text-xs lg:w-72">
          ORDER # {id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <img src={image} alt="" className="h-20 object-contain sm:h-32" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
