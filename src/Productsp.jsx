import React, { use } from "react";
import ProductspCard from "./ProductspCard";

const Productsp = ({ modelPromise, carts, setCarts }) => {
  const products = use(modelPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 justify-items-center md:mx-10 lg:mx-20">
      {products.map((item) => (
        <ProductspCard
          key={item.id}
          Productsp={item}
          carts={carts}
          setCarts={setCarts}
        />
      ))}
    </div>
  );
};

export default Productsp;
