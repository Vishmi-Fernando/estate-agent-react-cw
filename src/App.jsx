import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";

function App() {
  return (
    <>
      <div className="app-header">
        <h1>🏠 Estate Agent Property Search</h1>
        <p>Find your perfect home</p>
      </div>

      <div className="app">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/property/:id" element={<PropertyDetailsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
