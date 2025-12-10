import { useState } from "react";
import darkDimensionImg from "../assets/dark_dimension.jpeg";
import meteorStrikeImg from "../assets/meteor_strike.jpeg";
import fireMasterImg from "../assets/fire_master.jpeg";
import grassyWallImg from "../assets/grassy_wall.jpeg";
import nightWallImg from "../assets/night_wall.jpeg";
import gooLakeImg from "../assets/goo_lake.jpeg";
 
const faces = [
  "METEOR_STRIKE",
  "FIRE_MASTER",
  "DARK_DIMENSION",
  "GRASSY_WALL",
  "NIGHT_WALL",
  "GOO_LAKE",
];
 
export function DiceMasterApp() {
  const [face, setFace] = useState<string | null>(null);
 
  const images: Record<string, { src: string; alt: string }> = {
    METEOR_STRIKE: { src: meteorStrikeImg, alt: "Meteor Strike" },
    FIRE_MASTER: { src: fireMasterImg, alt: "Fire Master" },
    DARK_DIMENSION: { src: darkDimensionImg, alt: "Dark Dimension" },
    GRASSY_WALL: { src: grassyWallImg, alt: "Grassy Wall" },
    NIGHT_WALL: { src: nightWallImg, alt: "Night Wall" },
    GOO_LAKE: { src: gooLakeImg, alt: "Goo Lake" }
  };
 
  const imageStyle: React.CSSProperties = {
    width: 280,
    marginTop: 16,
    borderRadius: 10,
    boxShadow: "0 8px 24px rgba(0,0,0,0.22)",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };
 
  const roll = () => {
    const idx = Math.floor(Math.random() * 6);
    setFace(faces[idx]);
  };
 
  const container: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 24,
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  };
 
  const card: React.CSSProperties = {
    minWidth: 260,
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
    textAlign: "center",
    background: "linear-gradient(180deg,#0f172a,#0b1220)",
    color: "#fff",
  };
 
  const btn: React.CSSProperties = {
    padding: "10px 18px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    background: "#10b981",
    color: "#071023",
    fontWeight: 700,
    letterSpacing: 0.3,
  };
 
  const faceLabel: React.CSSProperties = {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 600,
    color: "#a7f3d0",
  };
 
  return (
    <div style={container}>
      <div style={card}>
        <h2 style={{ margin: 0 }}>Welcome to Dice Master (Martin Master Edition!)</h2>
        <p style={{ marginTop: 8, opacity: 0.85 }}>Press roll to reveal a random face.</p>
 
        <button onClick={roll} style={btn} aria-label="roll">
          Roll
        </button>
 
        {face && <div style={faceLabel}>Result: {face.replace(/_/g, " ").toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}</div>}
 
        {face && images[face] && (
          <img src={images[face].src} alt={images[face].alt} loading="lazy" style={imageStyle} />
        )}
      </div>
    </div>
  );
}
 
export default DiceMasterApp;