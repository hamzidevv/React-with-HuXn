import AddNewProduct from "./components/AddNewProduct"
import AllProducts from "./components/AllProducts"
import DeleteProduct from "./components/DeleteProduct"
import Product from "./components/Product"
import UpdateProduct from "./components/UpdateProduct"

const App = () => {
  return (
    <div>
      {/* <AllProducts /> */}
      {/* <Product /> */}
      {/* <AddNewProduct /> */}
      {/* <UpdateProduct productId={2} /> */}
      <DeleteProduct productId={2} />
    </div>
  )
}
export default App