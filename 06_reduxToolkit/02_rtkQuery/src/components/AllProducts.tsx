import { useGetAllProductsQuery } from "../app/service/dummyData";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();
  console.log(data);

  if (isError) {
    return <h1>Ohhh noo we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>All Products</h1>
      {data?.products.map((product: any) => (
        <>
          <h2 key={product.id}>
            {product.id} - {product.title}
          </h2>
          <p>{product.description}</p>
        </>
      ))}
    </div>
  );
};

export default AllProducts;
