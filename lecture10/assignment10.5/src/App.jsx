import { useState } from "react"


const App = () => {
  const [color, setColor] = useState("black");

  const boxStyles = {
    backgroundColor: `${color}`,
    width: "180px",
    height: "180px",
    textAlign: "center",
    lineHeight: "180px",
    borderRadius: "13px"
  }

  const containerStyles = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, Helvetica, sans-serif"
  }

  const getRgb = () => Math.floor(Math.random() * 256);
  
  const rgbToHex = (r, g, b) => {
    return ("#"+ [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join(""));
  }

  const handleColorChange = () => {
    const color = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb()
    };

    setColor(rgbToHex(color.r, color.g, color.b))
  }

  return (
    <div style={containerStyles}>
      <div style={boxStyles} onClick={handleColorChange}>{color}</div>
    </div>
  )
}

export default App
