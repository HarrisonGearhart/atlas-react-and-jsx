import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// A simple Greeting component
function Greeting() {
  return <p>Hello Atlas</p>;
}

// The main App component
function App() {
  return <Greeting />;
}
// Render the App component to the root element
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
