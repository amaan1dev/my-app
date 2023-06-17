import {Home} from "./Pages/Home"
import { Search } from "./Pages/Search";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/search" element={<Search />} />
     </Routes>
    </div>
  );
}

export default App;
