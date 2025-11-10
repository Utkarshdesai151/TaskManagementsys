import React from "react";
import DateIcon from "../../assets/Schedule/Date.svg";
import Ic1 from "../../assets/Schedule/Ic1.svg";
import "./schedule.css";
import CallBar from "../Callbar";
import Message from "../Message/Message";
import Dots1 from '../../assets/Tasks/Threedots1.svg';
import Rightarrow from '../../assets/Tasks/Leftslidearrow.svg';
import Leftarrow from "../../assets/Tasks/Rightslidearrow.svg"
import { useRef } from "react";

function Todayschedule() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -100 : 100,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="container p-3 bg-custom-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="mb-0">Today's Schedule</p>
        <div className="d-flex bg-black gap-1 px-3 py-2 rounded-2 align-items-center">
          <img src={Ic1} alt="icon" width="15" height="15" className="me-2" />
          <img src={DateIcon} alt="date" width="15" height="15" />
        </div>
      </div>

      <div className="d-flex justify-content-between py-3">
        <div>
          <p className="text-custom-blue mb-1">30-minute call with Client</p>
          <p className="mb-0">Project Discovery Call</p>
        </div>
        <p className="mb-3 text-custom-blue">+ Invite</p>
      </div>
      <CallBar />
      <hr></hr>
      <Message />
      <div className="d-flex justify-content-between py-3">
        <div>
          <p className="">New Task</p>
        </div>
        <img className="mb-2" src={Dots1} />
      </div>

      <div className="task-title">
        <p>Task Title</p>
        <form>
          <input
            title="create new"
            type="text"
            className="input"
            placeholder="Create new"
          />
        </form>

        <div className="emoji-slider-wrapper">
          <button className="arrow-btn left" onClick={() => scroll("left")}>
            <img src={Rightarrow} alt="" />
          </button>
          <div className="emoji-slider" ref={sliderRef}>
            <div className="emoji-track">
              <span>🎉</span><span>😍</span><span>😁</span><span>🔥</span><span>😘</span><span>😉</span><span>😎</span><span>👩</span><span>🙄</span>
            </div>
          </div>
          <button className="arrow-btn right" onClick={() => scroll("right")}><img src={Leftarrow} /></button>
        </div>
      </div>

      <div className="add-collabrative-team mx-2 my-3">
        <p>Add Collaborators </p>
        <div className="team d-flex gap-2 text-center ">
          <div className="team1">
            <p className="py-3">
              Angela
            </p>
          </div>
          <div className="team2">
            <p>
              Chris
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todayschedule;
