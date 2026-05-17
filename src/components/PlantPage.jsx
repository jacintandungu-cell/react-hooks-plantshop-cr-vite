import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm.jsx";
import Search from "./Search.jsx";
import PlantList from "./PlantList.jsx";
import Header from "./Header.jsx";

// PlantPage component - manages search state and filters plants
function PlantPage({ plants, onAddPlant }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <PlantList plants={filteredPlants} />
    </div>
  );
}

export default PlantPage;