import "./Offers.css";
import { useState } from "react";

export const products = [
  { title: "Hoodie", price: 21.99 },
  { title: "Sneakers", price: 34.99 },
  { title: "Tee", price: 12.99 },
];

const Offers = () => {
  const [items] = useState(products);

  return (
    <div className="offers" data-testid="offers">
      <h3>Latest Offers</h3>
      <div className="offer">
        {items.map((item) => (
          <div key={item.title} data-testid="items_offers">
            <img src="https://placehold.co/350x200" alt="product" />
            <h4 data-testid="items_offers_title">{item.title}</h4>
            <p data-testid="items_offers_price">€{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Offers;
