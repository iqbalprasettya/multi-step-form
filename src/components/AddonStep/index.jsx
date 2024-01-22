import React from "react";
import classes from "./style.module.scss";

const index = () => {
  return (
    <>
      <div className={classes["form"]}>
        <h1>Select Your Plan</h1>
        <p>You have the option of monthly or yearly billing</p>
        <div className={classes["addon"]}>
          <div className={classes["addon-item"]}>
            <div className={classes["addon-text"]}>
              <input type="checkbox" name="" id="" />
              <span>
                <h4>Online Service</h4>
                <p>Access to multiplayer games</p>
              </span>
            </div>
            <div className={classes["price"]}>
              <p>+10$/yr</p>
            </div>
          </div>
        </div>
        <div className={classes["addon"]}>
          <div className={classes["addon-item"]}>
            <div className={classes["addon-text"]}>
              <input type="checkbox" name="" id="" />
              <span>
                <h4>Larger storage</h4>
                <p>Extra 1TB of cloud save</p>
              </span>
            </div>
            <div className={classes["price"]}>
              <p>+20$/yr</p>
            </div>
          </div>
        </div>
        <div className={classes["addon"]}>
          <div className={classes["addon-item"]}>
            <div className={classes["addon-text"]}>
              <input type="checkbox" name="" id="" />
              <span>
                <h4>Customizable profile</h4>
                <p>Custom theme on your profile</p>
              </span>
            </div>
            <div className={classes["price"]}>
              <p>+20$/yr</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default index;
