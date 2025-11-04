import UserPanel from '../assets/userpannel/Vector.svg';
import './userpannel.css';
import Notification from '../assets/Notification.svg';
import UsersIcon from '../assets/Users.svg'
import Downarr from '../assets/Downarrow.svg'

export default function Userpannel() {
  return (
    <div className="user-main">
      <div className="container">
        <div className="row d-flex align-items-center ">
          <div className="col-md-3">
          </div>

          <div className="col-md-5 d-flex justify-content-end">
            <div className="userpannel-container ">
              <form className="d-flex my-4">
                <input type="search" placeholder="Search..." />
                <button type="submit">🔍</button>
              </form>
            </div>
          </div>

          <div className="col-md-4 d-flex align-items-center justify-content-end my-4">
            <div className="user-detail">
              <h1 className="h6 mb-0">
                <div className="row d-flex align-items-center justify-content-center">
                  <div className="col-md-4"><img src={Notification} alt="" /></div>
                  <div className="col-md-4">
                    <img src={UsersIcon} />
                  </div>
                  <div className="col-md-4">
                    <img src={Downarr} alt="" />
                  </div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}