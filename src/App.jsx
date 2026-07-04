import { useState, useEffect } from "react";
import Splash from "./components/Splash";
import Home from "./pages/Home";
import "./styles/style.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return loading ? <Splash /> : <Home />;
}