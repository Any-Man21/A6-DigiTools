import { Check } from "lucide-react";
import { useState } from "react";

const ProductspCard = ({ Productsp }) => {
  const { name, description, price, period, tag, features, icon } = Productsp;

  const [bought, setBought] = useState(false);

  const handleBuy = () => {
    setBought(true);
  };

  return (
    <div className="card w-full max-w-sm bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center justify-center bg-[#fdfcff] w-16 h-16 rounded-3xl border border-gray-100 shadow-sm p-3">
          <img
            src={icon}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {tag && (
          <div className="badge badge-warning badge-outline px-4 py-3 rounded-full font-medium text-xs capitalize">
            {tag}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 mb-8">
        <h2 className="text-2xl font-extrabold text-[#111827] leading-tight">
          {name}
        </h2>
        <p className="text-sm text-[#6b7280] leading-relaxed min-h-18">
          {description}
        </p>
        <div className="flex items-end gap-1.5 mt-2">
          <span className="text-4xl font-extrabold text-[#111827]">
            ${price}
          </span>
          <span className="text-sm font-medium text-[#6b7280] pb-1">
            /{period}
          </span>
        </div>
      </div>

      <ul className="space-y-4 mb-10 text-sm grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="text-green-500 mt-1" size={18} />

            <span className="text-[#6b7280] font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="card-actions mt-auto">
        <button
          onClick={handleBuy}
          className="btn btn-primary w-full rounded-full border-none bg-[#6b30ea] hover:bg-[#5a24d1] text-white font-bold capitalize"
        >
          {bought ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductspCard;
