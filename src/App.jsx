"use client";
import "../src/App.css";
import Sidebar from "./component/sidebar";
import Dashbord from "./component/Dashbord/dashbord";

function App() {
  return (
    <div className="app-wrapper d-flex flex-column flex-lg-row h-100">
      {/* Sidebar Section */}
      <aside className="sidebar-container">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="main-content flex-grow-1 p-3 p-lg-4">
        <Dashbord />
      </main>
    </div>
  );
}

export default App;
