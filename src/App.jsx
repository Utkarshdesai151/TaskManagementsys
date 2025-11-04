"use client";
import "../src/App.css";
import Sidebar from "./component/sidebar";
import Dashbord from "./component/Dashbord/dashbord";

function App() {
  return (
    <div className="app-wrapper">
      <div className="d-flex flex-row h-100">
        {/* Sidebar Section */}
        <aside className="sidebar-container">
          <Sidebar />
        </aside>

        {/* Main Content Section */}
        <main className="main-content flex-grow-1">
          <Dashbord />
        </main>
      </div>
    </div>
  );
}

export default App;
