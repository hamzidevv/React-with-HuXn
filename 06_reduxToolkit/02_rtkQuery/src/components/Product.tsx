import { useGetProductByIdQuery } from "../app/service/dummyData";

const Product = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(1);
  console.log(data);

  if (isError) {
    return <h1>Ohhh noo we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <div>
    <h1>{data?.brand}</h1>
    <h2>{data?.category}</h2>
    <p>{data?.description}</p>
  </div>;
};

export default Product;
