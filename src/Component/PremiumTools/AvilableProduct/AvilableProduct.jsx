import Card from "../../UI/Card";

const AvilableProduct = ({ products, setNumber, number }) => {
  console.log(products, "avilable product");
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 mt-10">
      {products.map((product, index) => {
        return (
          <Card
            product={product}
            number={number}
            setNumber={setNumber}
            key={index}
          ></Card>
        );
      })}
    </div>
  );
};

export default AvilableProduct;
