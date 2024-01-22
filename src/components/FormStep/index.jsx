import React from "react";
import classes from "./style.module.scss";


const index = () => {
  return (
    <>
      <div className={classes["form"]}>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <div className={classes["name"]}>
          <label>Name</label>
          <input type="text" name="name" id="" placeholder="e.g Stephen King" />
        </div>
        <div className={classes["email"]}>
          <label>Email Address</label>
          <input type="email" name="email" id="" placeholder="e.g stephenking@lorem.com" />
        </div>
        <div className={classes["phone"]}>
          <label>Phone Number</label>
          <input type="text" name="" id="" placeholder="e.g +1 234 567 890" />
        </div>
      </div>
    </>
  );
};

export default index;
