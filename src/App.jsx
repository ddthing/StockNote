import React, { useState } from "react";
import sectors from "./data/sectors";
import SectorList from "./components/SectorList";
import SectorDetail from "./components/SectorDetail";

export default function App() {
  const [selectedSector, setSelectedSector] = useState(null);

  return (
    <div className="container">
      {!selectedSector ? (
        <SectorList sectors={sectors} onSelect={setSelectedSector} />
      ) : (
        <SectorDetail sector={selectedSector} onBack={() => setSelectedSector(null)} />
      )}
    </div>
  );
}
