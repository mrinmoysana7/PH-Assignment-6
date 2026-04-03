import Card from "../../UI/Card";

const AvilableProduct = ({ products, setNumber, number, setSelectedProducts, selectedProducts }) => {
  console.log(products, "avilable product");
  return (
    <div className="container mx-auto gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5s mt-10">
      {products.map((product, index) => {
        return (
          <Card
            product={product}
            number={number}
            setNumber={setNumber}
            setSelectedProducts={setSelectedProducts}
            selectedProducts={selectedProducts}
            key={index}
          ></Card>
        );
      })}
    </div>
  );
};

export default AvilableProduct;
