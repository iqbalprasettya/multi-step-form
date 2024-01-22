import React from "react";

import classes from "./style.module.scss";

import FormStep from "../../components/FormStep";
import PlanStep from "../../components/Plan";
import AddonStep from "../../components/AddonStep";
import CheckoutStep from "../../components/Checkout";
import FinishStep from "../../components/FinishStep";

const index = () => {
  return (
    <>
      <div className={classes["container"]}>
        <div className={classes["login"]}>
          <div className={classes["login-step"]}>
            <div className={classes["step"]}>
              <span>1</span>
              <span>
                <p>STEP 1</p>
                <h3>Your Info</h3>
              </span>
            </div>
            <div className={classes["step"]}>
              <span>2</span>
              <span>
                <p>STEP 2</p>
                <h3>Select Plan</h3>
              </span>
            </div>
            <div className={classes["step"]}>
              <span>3</span>
              <span>
                <p>STEP 3</p>
                <h3>Add-Ons</h3>
              </span>
            </div>
            <div className={classes["step"]}>
              <span>4</span>
              <span>
                <p>STEP 4</p>
                <h3>Summary</h3>
              </span>
            </div>
          </div>
          <div className={classes["login-form"]}>
            <div className={classes["form-body"]}>
              <FormStep />
              {/* <PlanStep /> */}
              {/* <AddonStep /> */}
              {/* <CheckoutStep /> */}
              {/* <FinishStep /> */}


            </div>
            <div className={classes["btn-submit"]}>

              <button type="submit" className={classes["prev-btn"]}>Go Back</button>
              <button type="submit" className={classes["next-btn"]}>Next Step</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
