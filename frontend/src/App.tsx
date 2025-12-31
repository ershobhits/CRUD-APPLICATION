import { useEffect, useState } from "react";
import API from "./api";
import ProductForm from "./ProductForm";

function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [edit, setEdit] = useState<any>(null);

  const fetchProducts = async () => {
    const res = await API.get("/");
    setProducts(res.data);
    setEdit(null);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const del = async (id: string) => {
    await API.delete(`/${id}`);
    fetchProducts();
  };

  return (
    <div className="container">
      <h1>PRODUCT DETAILS</h1>

      <ProductForm refresh={fetchProducts} product={edit} />

      {products.map(p => (
        <div className="product" key={p._id}>
          <div className="product-info">
            <b>{p.name}</b><br />
            ₹{p.price} | Qty: {p.quantity}
          </div>

          <div className="actions">
            <button className="edit" onClick={() => setEdit(p)}>
              Edit
            </button>
            <button className="delete" onClick={() => del(p._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
