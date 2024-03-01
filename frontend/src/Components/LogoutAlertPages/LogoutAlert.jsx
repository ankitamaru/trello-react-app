import React from "react";
import style from "./LogoutAlert.module.css";
import { useDispatch } from "react-redux";
import { setLogOut } from "../../Redux/User/UserSlice";
import { setUserLogoutfalse } from "../../Redux/Board/BoardSlice";


const LogoutAlert = () => {
  const dispatch = useDispatch();
  const handleLogoutUser = () => {
    dispatch(setLogOut());
    dispatch(setUserLogoutfalse());
  };

  const handleCancelLogoutUser = () => {
    dispatch(setUserLogoutfalse());
  };
  return (
    <section className={style.logout_alert_container}>
      <div className={style.logout_alert_section}>
        <div className={style.info}>
          <span>Are you sure you want to logout?</span>
        </div>
        <div className={style.button}>
          <button onClick={() => handleLogoutUser()} className={style.logout}>
            Yes, logout
          </button>
          <button
            onClick={() => handleCancelLogoutUser()}
            className={style.cancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoutAlert;
