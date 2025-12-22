import { Routes, Route } from "react-router-dom";   // use to define pages
// import page components
import SearchPage from "./pages/SearchPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";

function App() {
  return (
    <>

    {/* header section */}
      <div className="app-header"> 
        <h1>Find Your Place to Call Home</h1>
        <p>Discover properties that match your lifestyle, budget, and future plans.</p>
      </div>


      <div className="app">
        {/* all routes live here */}
        <Routes>
          {/* search page */}
          <Route path="/" element={<SearchPage />} />

          {/* Property details page with dynamic ID*/}
          <Route path="/property/:id" element={<PropertyDetailsPage />} />
        </Routes>
      </div>

      {/* footer content */}
      <div className="footer">
        <p>Find yours with confidence and clarity</p>
        <p>&copy; 2025 Estate Agent Property Search Platform</p>
      </div>
    </>
  );
}

export default App;
