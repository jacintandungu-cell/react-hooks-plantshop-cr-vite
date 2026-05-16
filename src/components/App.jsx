import React, { useState, useEffect } from "react";
import PlantCard from "./components/PlantCard.jsx";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newPlantName, setNewPlantName] = useState("");
  const [newPlantPrice, setNewPlantPrice] = useState("");

  // Fetch plants on startup
  useEffect(() => {
    fetch("http://localhost:3001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Error fetching plants:", err));
  }, []);

  // Add new plant
  const handleAddPlant = (e) => {
    e.preventDefault();
    const newPlant = {
      id: plants.length + 1,
      name: newPlantName,
      price: newPlantPrice,
      outOfStock: false,
    };
    setPlants([...plants, newPlant]);
    setNewPlantName("");
    setNewPlantPrice("");
  };

  // Mark plant as sold out (non-persisting)
  const markOutOfStock = (id) => {
    setPlants((prev) =>
      prev.map((plant) =>
        plant.id === id ? { ...plant, outOfStock: true } : plant
      )
    );
  };

  // Filter plants by search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>
          Plantsy <span className="logo" role="img">🌱</span>
        </h1>
      </header>

      {/* Search input */}
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Add plant form */}
      <form onSubmit={handleAddPlant}>
        <input
          type="text"
          placeholder="Plant name"
          value={newPlantName}
          onChange={(e) => setNewPlantName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Plant price"
          value={newPlantPrice}
          onChange={(e) => setNewPlantPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>

      {/* Plant list */}
      <ul className="cards">
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            markOutOfStock={markOutOfStock}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
