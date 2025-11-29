import React from "react";

export default function SectorList({ sectors, onSelect }) {
  return (
    <div>
      <h2>산업 섹터 리스트</h2>

      {sectors.map((s) => (
        <div
          key={s.id}
          className="sector-item"
          onClick={() => onSelect(s)}
        >
          {s.name}
        </div>
      ))}
    </div>
  );
}
