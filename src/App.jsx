"use client";
import "../src/App.css";
import Sidebar from "./component/sidebar";
import Dashbord from "./component/Dashbord/dashbord";
import Timeline from "./component/Timeline/timeline";
import Task from "./component/Task/task";
import { Routes,Route } from "react-router-dom";
import Messagecomp from "./component/Messagecomp/Messagecomp";

function App() {
  return (
    <div className="app-wrapper d-flex flex-column flex-lg-row h-100">
      {/* Sidebar Section */}
      <aside className="sidebar-container">
        <Sidebar />
      </aside>


      {/* Main Content */}
      <main className="main-content flex-grow-1 p-3 p-lg-4">
        <Routes>
           <Route path="/" element={<Dashbord/>}/>
           <Route path="/timeline" element={<Timeline/>}/>
           <Route path="/task" element={<Task/>}/> 
           <Route path="/messagecomp" element={<Messagecomp/>}/>  
        </Routes>
      </main>
    </div>
  );
}

export default App;
