import Userpannel from "../userpannel"
import './dashbord.css'
import Star from '../../assets/Cards/Star.svg'
import Newtask from '../../assets/Cards/NewTask.svg'
import Projectdone from '../../assets/Cards/Projectdone.svg'
import GlowLineChart from "../Charts/Glowlinecharts"
import Graphline1 from "../../assets/Cards/Graph1.svg";
import Graphline2 from "../../assets/Cards/Graph2.svg";
import Graphline3 from "../../assets/Cards/Graph3.svg";
import TaskChart from "../Taskchart.js/taskchart"
import Tasklist from "../Tasklist/Tasklist"
import Todayschedule from "../schedule/schedule"
export default function Dashbord() {
    const TaskTrackData = [
        { id: 1, img: Star, graphimg: Graphline1, title: "Task Complated", projectdetails: <>10+ more <br /> from last week</> },
        { id: 2, img: Newtask, graphimg: Graphline2, title: "New Task", projectdetails: <>5+ more <br /> from last week</> },
        { id: 3, img: Projectdone, graphimg: Graphline3, title: "Project Done", projectdetails: <>2+ more <br /> from last week</> },
    ]

    return (
        <div className="main-user container">
            <div className="userpannel-section mb-3 flex-grow-1">
                <Userpannel />
            </div>
            <div className="container justify-content-centerpx-2 align-items-center">
                <div className="row row-cols-2">
                    <div className="col-9">
                        <section className="task-section px-4 py-4">
                            <div className="row row-cols-3 gap-3 flex">
                                {TaskTrackData.map((task) => (
                                    <div className="col task-card">
                                        <div className="task-card-head ">
                                            <img src={task.img} />
                                            <p>{task.title}</p>
                                        </div>
                                        <div className="bb d-flex">
                                            <img src={task.graphimg} alt="" />
                                            <p className="">{task.projectdetails}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="my-3 mx-1">
                            <TaskChart />
                        </section>
                        
                        <section className="my-4 mx-4">
                            <Tasklist/>
                        </section>
                    </div>
                    <div className="col-3 ">
                        <Todayschedule/>
                    </div>
                </div>
            </div>
        </div>
    )
}