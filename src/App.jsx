"use client";
import "../src/App.css";
import Sidebar from "./component/sidebar";

function App() {
  return (
    <div className="app-container d-flex">
      {/* ---- Sidebar (Fixed Left) ---- */}
      <Sidebar />

      {/* ---- Main Content Area ---- */}
      <div className="main-content flex-grow-1 d-flex">
        <div className="container-fluid">
          <div className="row g-3 p-3">
            <div className="col-md-7 border ">
              <div className="text-white">
                hello
              </div>
            </div>
            <div className="col-md-4 border ">
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
