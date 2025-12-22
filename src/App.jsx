import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <h1>Find Your Place to Call Home</h1>
        <p>Discover properties that match your lifestyle, budget, and future plans.</p>
      </header>

      {/* MAIN CONTENT — ROUTES MUST ALWAYS RENDER */}
      <main className="app-content">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/property/:id" element={<PropertyDetailsPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2025 Estate Agent Property Search Platform</p>
      </footer>
    </div>
  );
}

export default App;
