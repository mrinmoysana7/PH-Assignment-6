import { use, useState } from "react";
import AvilableProduct from "../AvilableProduct/AvilableProduct";
import SelectedCardProduct from "../SelectedCardProduct/SelectedCardProduct";

const Products = ({ productPromise, setNumber, number}) => {
//   console.log(productPromise);
  const products = use(productPromise);
  console.log(products);
  const [isSelectedType, setIsSelectedType] = useState("Products");
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <div className="container mx-auto space-y-4 mt-30">
      <div className="text-center space-y-4">
        <h2 className="font-extrabold text-5xl text-[#001931]">
          Premium Digital Tools
        </h2>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center  border border-[#F6F6F6] rounded-full p-1 w-max mx-auto">
        <button
          onClick={() => setIsSelectedType("Products")}
          className={`btn ${isSelectedType === "Products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""} border-none bg-transparent shadow-none rounded-full  font-bold`}
        >
          <p className={`${isSelectedType === "Products" ? "text-white" : "text-[#25065D]" }`}>Products</p> 
        </button>

        <button
          onClick={() => setIsSelectedType("Cart (0)")}
          className={`btn ${isSelectedType === "Cart (0)" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "bg-none"} border-none bg-transparent shadow-none rounded-full font-bold text-white`}
        >
          <p className={`${isSelectedType === "Cart (0)" ? "text-white" : "text-[#25065D]" }`}>Cart ({number})</p>
        </button>
      </div>
      {isSelectedType === "Products" 
      ?
      <AvilableProduct 
      setSelectedProducts={setSelectedProducts} 
      selectedProducts={selectedProducts} 
      number={number} 
      setNumber={setNumber}  
      products={products}>
      </AvilableProduct> 
      : 
      <SelectedCardProduct 
      selectedProducts={selectedProducts} 
      setNumber={setNumber} 
      number={number} 
      setSelectedProducts={setSelectedProducts} ></SelectedCardProduct>} 
    </div>
  );
};

export default Products;
