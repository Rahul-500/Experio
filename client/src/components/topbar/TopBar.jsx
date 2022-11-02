import { useContext } from "react";
import { Link } from "react-router-dom";
import {Typography, Avatar} from '@material-ui/core';
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"


  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (<>
          <Avatar alt={user?.username}  style={{fontFamily: 'monospace', color: 'white', backgroundColor: "rgb(247, 67, 97)", marginRight: '5px'}}>{user?.username.charAt(0)}</Avatar>
          <Typography className="userName" variant="h5" style={{fontFamily: 'monospace', color: 'black', display: 'flex', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', marginRight: '5px'}}>{user?.username}</Typography> </>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
