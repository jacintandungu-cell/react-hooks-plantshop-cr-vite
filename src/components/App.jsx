import React, { useState, useEffect } from "react";
import PlantPage from "./PlantPage.jsx";

// Main App component - manages plant state and fetch operations
function App() {
  const [plants, setPlants] = useState([]);

  // Fetch all plants on component mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Handle adding a new plant via POST request to backend
  const handleAddPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((savedPlant) => {
        setPlants((prev) => [...prev, savedPlant]);
      });
  };

  return <PlantPage plants={plants} onAddPlant={handleAddPlant} />;
}

export default App;
