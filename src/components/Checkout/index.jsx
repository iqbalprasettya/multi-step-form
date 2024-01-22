import React from "react";
import classes from "./style.module.scss";

import Icon1 from "../../assets/images/icon-arcade.svg";
import Icon2 from "../../assets/images/icon-advanced.svg";
import Icon3 from "../../assets/images/icon-pro.svg";

const index = () => {
  return (
    <>
      <div className={classes["form"]}>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
        <div className={classes["summary"]}>
          <div className={classes["summary-item"]}>
            <span>
              <h4>Arcade (Monthly)</h4>
              <p>Change</p>
            </span>
            <span>
              <p className={classes["price"]}>$9/mo</p>
            </span>
          </div>
          <div className={classes["summary-item"]}>
            <span>
              <p>Online service</p>
            </span>
            <span>
              <p className={classes["price"]}>$1/mo</p>
            </span>
          </div>
          <div className={classes["summary-item"]}>
            <span>
              <p>Larger storage</p>
            </span>
            <span>
              <p className={classes["price"]}>$2/mo</p>
            </span>
          </div>
        </div>
        <div className={classes["summary-total"]}>
          <p>Total (per month)</p>
          <div className={classes["price"]}>
            +$12/mo
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
