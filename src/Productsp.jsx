import React, { use } from "react";
import ProductspCard from "./ProductspCard";

const Productsp = ({ modelPromise }) => {
  const products = use(modelPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 justify-items-center md:mx-10 lg:mx-20">
      {products.map((item) => (
        <ProductspCard key={item.id} Productsp={item} />
      ))}
    </div>
  );
};

export default Productsp;
