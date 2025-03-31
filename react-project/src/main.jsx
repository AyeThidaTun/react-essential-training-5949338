import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
const [first, second] =["tiger", "rabbit"];
console.log(second);
createRoot(document.getElementById("root")).render(<App />);
