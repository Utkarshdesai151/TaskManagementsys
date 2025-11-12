"use client";
import React from "react";
import Userpannel from "../userpannel";
import "./taskbord.css";
import Addi from '../../assets/Timeline/Add.svg'
import { FaPlus } from "react-icons/fa";

const uiux = [
    {
        id: 1,
        addi: Addi,
        title: "UX Research",
        color: "#4C6EF5",
        iconBg: "#4C6EF5",
        members: [],
        subtasks: [],
    },
];
const Information = [
    {
        id: 1,
        addi: Addi,
        title: "information Arch",
        color: "#4C6EF5",
        iconBg: "#4C6EF5",
        members: [],
        subtasks: [],
    }
]

const Design = [
    {
        id: 1,
        addi: Addi,
        title: "Design Phase",
        color: "#4C6EF5",
        iconBg: "#4C6EF5",
        members: [],
        subtasks: [],
    }
]

const prototype = [
    {
        id: 1,
        addi: Addi,
        title: "Prototyping",
        color: "#4C6EF5",
        iconBg: "#4C6EF5",
        members: [],
        subtasks: [],
    }
]

const Devloping =[
    {
        id: 1,
        addi: Addi,
        title: "Devloping",
        color: "#4C6EF5",
        iconBg: "#4C6EF5",
        members: [],
        subtasks: [],
    }
]
export default function TaskBoard() {
    return (
        <div>
            <div className="task-board-container">
                {uiux.map((uiux) => (
                    <div className="card1">
                        <div className="ui-ux-card">
                            <div className="ui-content align-items-center gap-2">
                                <div className="d-flex align-items-center" data-coreui-toggle="collapse" data-coreui-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    <img src={uiux.addi} className="img-fluid" width="30" height="30" alt="Add" />
                                    <p className="px-2 my-3">{uiux.title}</p>
                                </div>
                                <div className="collapse " id="collapseExample">
                                    <div className=" card-body">
                                        Ui task soon....
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
                {Information.map((info) => (
                    <div className="card1">
                        <div className="ui-ux-card">
                            <div className="ui-content align-items-center gap-2">
                                <div className="d-flex align-items-center" data-coreui-toggle="collapse" data-coreui-target="#infocollapse" aria-expanded="false" aria-controls="infocollapse">

                                    <img src={info.addi} className="img-fluid" width="30" height="30" alt="Add" />
                                    <p className="px-2 my-3">{info.title}</p>
                                </div>
                                <div className="collapse " id="infocollapse">
                                    <div className=" card-body">
                                        Information task soon....
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {Design.map((Des) => (
                    <div className="card1">
                        <div className="ui-ux-card">
                            <div className="ui-content align-items-center gap-2">
                                <div className="d-flex align-items-center" data-coreui-toggle="collapse" data-coreui-target="#Descollapse" aria-expanded="false" aria-controls="Descollapse">
                                    <img src={Des.addi} className="img-fluid" width="30" height="30" alt="Add" />
                                    <p className="px-2 my-3">{Des.title}</p>
                                </div>
                                <div className="collapse " id="Descollapse">
                                    <div className="card-body px-2">
                                        <p className="text-white">Build Wireframe</p>
                                        <p className="text-white"> User Interface Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {prototype.map((proto) => (
                    <div className="card1">
                        <div className="ui-ux-card">
                            <div className="ui-content align-items-center gap-2">
                                <div className="d-flex align-items-center" data-coreui-toggle="collapse" data-coreui-target="#Protocollapse" aria-expanded="false" aria-controls="Protocollapse">
                                    <img src={proto.addi} className="img-fluid" width="30" height="30" alt="Add" />
                                    <p className="px-2 my-3">{proto.title}</p>
                                </div>
                                <div className="collapse " id="Protocollapse">
                                    <div className="card-body px-2">
                                        <p className="text-white">Build Wireframe</p>
                                        <p className="text-white"> User Interface Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {Devloping.map((Dev) => (
                    <div className="card1">
                        <div className="ui-ux-card">
                            <div className="ui-content align-items-center gap-2">
                                <div className="d-flex align-items-center" data-coreui-toggle="collapse" data-coreui-target="#Devcollapse" aria-expanded="false" aria-controls="Devcollapse">
                                    <img src={Dev.addi} className="img-fluid" width="30" height="30" alt="Add" />
                                    <p className="px-2 my-3">{Dev.title}</p>
                                </div>
                                <div className="collapse " id="Devcollapse">
                                    <div className="card-body px-2">
                                        <p className="text-white">Build Wireframe</p>
                                        <p className="text-white"> User Interface Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
