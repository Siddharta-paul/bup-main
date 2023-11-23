import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { Home, Error, Auth } from "./Pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
