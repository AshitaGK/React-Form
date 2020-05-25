import React from "react"

const style = {
    top: "0",
  padding: "10px 0",
  borderBottom: "3px solid transparent",
  display: "inline-block",
  cursor: "pointer",
  backgroundColor: "#fff",
  width: "50%",
  color: "#000",
  textAlign: "center",
  
}

const activeStyle = {
  ...style,
  color: "#AA94DE",
  borderBottom: "3px solid #AA94DE"
}

const CustomTab = ({ children, isActive }) => (
  <span style={isActive ? activeStyle : style}>{children}</span>
)

export default CustomTab;