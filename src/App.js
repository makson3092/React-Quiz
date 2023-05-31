import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/React-Quiz" element={<Header />} />
        <Route path="/quiz" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
