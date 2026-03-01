import { useEffect, useState } from "react";
import "./Products.css";
import Loader from "../Loader/Loader";
import { BASE_URL } from "../../const";

const Products = ({ isUserLoggedIn, isLoading }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("Component Mounted");
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products`);
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.log("error");
      }
    };
    fetchProducts();
    //FETCH THE LIST OF PRODUCTES
  }, []);
  if (isLoading) {
    return <Loader component={"Products"} />;
  }
  if (isUserLoggedIn) {
    return (
      <div className="content">
        <h3>Hoodies</h3>
        <div className="products">
          {products?.Hoodies?.map((p) => (
            <div key={p.id}>
              <img src={p.image} alt="product" />
              <p style={{ textAlign: "center" }}>{p.name}</p>
            </div>
          ))}
        </div>
        <h3>Tees</h3>
        <div className="products">
          {products?.Tees?.map((p) => (
            <div key={p.id}>
              <img src={p.image} alt="product" />
              <p style={{ textAlign: "center" }}>{p.name}</p>
            </div>
          ))}
        </div>
        <h3>Sneakers</h3>
        <div className="products">
          {products?.Sneakers?.map((p) => (
            <div key={p.id}>
              <img src={p.image} alt="product" />
              <p style={{ textAlign: "center" }}>{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="content" style={{ textAlign: "center" }}>
        Please Login To See Products
      </div>
    );
  }
};

export default Products;
