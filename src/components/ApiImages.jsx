import axios from "axios";
import { useState } from "react";

export default function ApiImages() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  function fetchAPi() {
    setLoading(true);
    axios.get("https://dummyjson.com/products").then((res) => {
      setLoading(false);
      console.log(res.data.products);
      setProducts(res.data.products);
    });
  }
  return (
    <>
      <button className="btn" onClick={fetchAPi}>
        FETCH API
      </button>
      <hr className="m-3" />
      <div className="text-3xl"> api products</div>
      {loading ? (
        <div className="bold text-3xl text-center">LOADING......</div>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 mt-4 p-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((el) => (
          <div>
            <img src={el.images[2]} alt="" />
            {el.title}
          </div>
        ))}
      </div>
    </>
  );
}
