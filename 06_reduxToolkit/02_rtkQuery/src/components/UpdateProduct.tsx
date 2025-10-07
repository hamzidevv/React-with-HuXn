import { useUpdateProductMutation } from "../app/service/dummyData";

const UpdateProduct = ({ productId }: { productId: number }) => {
  const [updatedProduct, { data, isError, isLoading }] =
    useUpdateProductMutation();

  if (isError) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Title Updated",
        description: "Description Updated",
      };

      await updatedProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (err) {
      console.error("Error updating product: ", err);
    }
  };

  return (
    <div>
      <h1>
        {data?.id} {data ? "-" : ""} {data?.title}
      </h1>
      <h2>{data?.category}</h2>
      <p>{data?.description}</p>
      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
