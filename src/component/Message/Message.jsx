import User1 from '../../assets/Users/User1.svg'
import User2 from '../../assets/Users/User2.svg'
import User3 from '../../assets/Users/User3.svg'
import React from "react";
import "./Message.css";

function Message() {
    const UserMessage = [
        { id: 1, userimg: User1, username: "Chris Morich", message: "Hi Angelina! How are You?", time: "2 min ago" },
        { id: 2, userimg: User2, username: "Charmie", message: "Do you need that design?.", time: "2 min ago" },
        { id: 3, userimg: User3, username: "Jason Mandala", message: "What is the price of hourly...", time: "2 min ago" },
    ];

    return (
        <div>
            <p className="fw-semibold mb-2">Message</p>
            <div>
                {UserMessage.map((user) => (
                    <div key={user.id} className="user-message mb-3">
                        <div className='d-flex gap-3 align-items-center '>
                            <img src={user.userimg} alt="user" width="40" height="40" className="user-img" />
                            <p className="fw-semibold fs-5  mb-0">{user.username}</p>
                        </div>
                        <div className='d-flex'>
                            <p className="text-gray small mb-0">{user.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Message;
