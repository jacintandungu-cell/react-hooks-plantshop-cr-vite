import React, { useState } from "react";

// PlantCard component - displays individual plant with local stock toggle
function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(plant.inStock);

  // Toggle stock status (non-persisting)
  const handleToggleStock = () => {
    setInStock((prev) => !prev);
  };

  return (
    <li className="card" data-testid="plant-item">
      {plant.image && <img src={plant.image} alt={plant.name} />}
      <h3>{plant.name}</h3>
      <p>Price: ${plant.price}</p>
      <button
        onClick={handleToggleStock}
        style={{
          backgroundColor: inStock ? "green" : "red",
          color: "white",
          padding: "8px 12px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
