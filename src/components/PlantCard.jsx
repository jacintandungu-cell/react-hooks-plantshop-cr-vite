import React from "react";

export default function PlantCard({ plant, markOutOfStock }) {
  return (
    <li className="card">
      <h3>{plant.name}</h3>
      <p>Price: {plant.price}</p>
      {plant.outOfStock ? (
        <span style={{ color: "red" }}>Sold Out</span>
      ) : (
        <button onClick={() => markOutOfStock(plant.id)}>Mark as Sold Out</button>
      )}
    </li>
  );
}
