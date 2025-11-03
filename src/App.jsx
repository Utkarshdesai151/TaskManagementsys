"use client";
import "../src/App.css";
import Sidebar from "./component/sidebar";
import Userpannel from "./component/userpannel";
import Dashbord from "./component/Dashbord/dashbord";
function App() {
  return (
    <div>
       <div className="app-container d-flex">
      <div className="sidebar-container">
        <Sidebar />
      </div>

      <div className="main-container flex-grow-1">
        {/* <div className="userpannel-section mb-3">
          <Userpannel />
        </div> */} 
        <div className="dashboard-section h-100">
          <Dashbord />
        </div>
      </div>
    </div>
    </div>

  );
}

export default App;
