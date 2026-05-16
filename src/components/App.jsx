import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// Main app component - fetches plants from backend and manages plant state
function App() {
  const [plants, setPlants] = useState([]);

  // Fetch all plants from backend on component mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Handle adding a new plant via POST request to backend
  const handleAddPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((savedPlant) => {
        setPlants((prev) => [...prev, savedPlant]);
      })
      .catch((error) => console.error("Error adding plant:", error));
  };

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onAddPlant={handleAddPlant} />
    </div>
  );
}

export default App;