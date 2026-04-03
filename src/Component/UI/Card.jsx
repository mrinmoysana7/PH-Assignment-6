import { Check } from "lucide-react";
import { useState } from "react";

const Card = ({ product, setNumber }) => {
  const [selected, setSelected] = useState(false);

  const handleAddToCart = () => {
    if (!selected) {
      setSelected(true);
      setNumber((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col px-5 ">
      <div className="flex-1 card lg:mx-5 bg-base-100  shadow-lg">
        <div className="card-body flex flex-col">
          <div className="flex-1">
            <div className="flex justify-between">
              <img src={product.image} alt="" />
              <div className="bg-[#E1E7FF] items-center flex  rounded-full w-max">
                <span className="badge badge-xs   badge-warning border-none bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent ">
                  {product.tag}
                </span>
              </div>
            </div>
            <div className="flex  justify-between">
              <h2 className="text-2xl font-bold py-4">{product.title}</h2>
              <span className="text-xl"></span>
            </div>
            <div>
              <p>{product.description}</p>
            </div>
            <div className="flex">
              <h2>${product.price}</h2>
              <p>/{product.billing}</p>
            </div>
            <div className="py-4">
              {product.features.map((feature, index) => {
                return (
                  <p key={index} feature={feature}>
                    {" "}
                    <div className="flex items-center gap-2">
                      <Check className="text-green-400" />
                      {feature}
                    </div>
                  </p>
                );
              })}
            </div>
            <div className="mt-6 ">
              <button
                onClick={handleAddToCart}
                className={`btn btn-primary btn-block rounded-full border-none w-full ${selected ? "bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}
              >
                {selected === true ? "Added To Cart" : "Buy Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
