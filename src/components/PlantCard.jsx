import React, { useState } from "react";

// Plant card component - displays plant details with local stock toggle
function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(plant.inStock !== false);

  // Toggle stock status locally (non-persisting)
  const handleStockToggle = () => {
    setInStock((prev) => !prev);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;