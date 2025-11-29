import React from "react";

export default function SectorDetail({ sector, onBack }) {
  return (
    <div className="sector-detail">
      <button
        onClick={onBack}
        style={{
          marginBottom: "20px",
          padding: "10px 16px",
          border: "none",
          background: "#333",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        ← 뒤로가기
      </button>

      <h2>{sector.name}</h2>
      <p style={{ lineHeight: "1.6" }}>{sector.description}</p>

      {sector.details && (
        <div style={{ marginTop: "15px", fontSize: "0.95rem" }}>
          {sector.details}
        </div>
      )}
    </div>
  );
}
