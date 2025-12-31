import { useState } from "react";
import API from "./api";

interface Props {
  refresh: () => void;
  product?: any;
}

export default function ProductForm({ refresh, product }: Props) {
  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || "");
  const [quantity, setQuantity] = useState(product?.quantity || "");

  const submit = async () => {
    if (!name || !price || !quantity) {
      alert("Fill all fields");
      return;
    }

    if (product) {
      await API.put(`/${product._id}`, { name, price, quantity });
    } else {
      await API.post("/", { name, price, quantity });
    }

    setName("");
    setPrice("");
    setQuantity("");
    refresh();
  };

  return (
    <div className="form">
      <input
        placeholder="Product name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Qty"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />
      <button onClick={submit}>
        {product ? "Update" : "Add"}
      </button>
    </div>
  );
}
