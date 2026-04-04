import { toast } from "react-toastify";

const SelectedCardProduct = ({ selectedProducts, setSelectedProducts, setNumber }) => {

   const handleDeleteItems = (product) => {
    const filteredProduct = selectedProducts.filter(selectedPlayer => selectedPlayer.title != product.title);
    toast.success('Product removed from cart successfully!');
    setSelectedProducts(filteredProduct);
    setNumber(prev => prev - 1);
   }

   const resetAllCartProducts = () => {
      if(selectedProducts.length === 0) {
        toast.error('You already removed products from cart!');
        return;
      }

      toast.success('All products removed from cart successfully!');
      setSelectedProducts([]);
      setNumber(0);
      
   }

  return (
    <div className="px-5"> 
        <div className="container shadow-lg md:mx-auto p-5  md:p-10 border border-gray-100 rounded-2xl">
        <h2 className="font-bold text-2xl mb-6">Your Cart</h2>
        {selectedProducts.length === 0 ? (
             <div>
                <h2 className="text-center text-3xl font-bold py-10">Your Cart is Empty</h2>
            </div> 
        ) : (
            <>
            {selectedProducts.map((product, index) => {
        return (
          <div key={index} className="flex shadow-md justify-between items-center mb-4 bg-[#F9FAFC]  rounded-lg p-5">
            
            <div className="left-side-content flex items-center gap-4">
              <div className="bg-white p-4 rounded-[70px]">
                <img src={product.image} alt="" ></img>
              </div>
              <div className="flex flex-col -space-y-3">
                <h2 className="md:text-2xl font-semibold md:font-bold py-4">{product.title}</h2> 
                <h2 className="text-[#627382]">${product.price}</h2>
              </div>
            </div>
            <div className="right-side-content">
              <button onClick={() => handleDeleteItems(product)} className="btn text-[red] bg-transparent shadow-none border-none">
                Delete
              </button>
            </div>
            
          </div> 
        );
      })};
            </>
         )
        }
      
      <div className="flex my-6 justify-between">
        <p className="text-[#627382]">Total</p>
        <h2 className="font-bold text-2xl">${selectedProducts.reduce((total, product) => total + product.price, 0)}</h2>
      </div>
    <button 
      onClick={resetAllCartProducts} 
      className="btn py-7 w-full btn-ghost rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      Proceed to Checkout
    </button>
    </div>
    </div>
  );
};

export default SelectedCardProduct;
