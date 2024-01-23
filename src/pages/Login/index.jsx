import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./style.module.scss";

import FormStep from "../../components/FormStep";
import PlanStep from "../../components/Plan";
import AddonStep from "../../components/AddonStep";
import CheckoutStep from "../../components/Checkout";
import FinishStep from "../../components/FinishStep";

import { setStep } from "./action";

const index = () => {
  const dispatch = useDispatch();
  

  const currentStep = useSelector((state) => state.loginReducers.step)

  console.log(currentStep, '<< CUR STEP')

  const stepHanlder = () => {
    if (currentStep === 5) {
      dispatch(setStep(1));
    } else {
      dispatch(setStep(currentStep + 1));
    }
  };

  function setContentPages() {
    // setIndicator(i);

    switch (currentStep) {
      case 1:
        return <FormStep />;
        break;
      case 2:
        return <PlanStep />;
        break;
      case 3:
        return <AddonStep />;
        break;
      case 4:
        return <CheckoutStep />;
        break;
      default:
        return <FinishStep />;
        break;
    }
  }

  useState(() => {
    setContentPages(1);
  }, []);

  return (
    <>
      <div className={classes["container"]}>
        <div className={classes["login"]}>
          <div className={classes["login-step"]}>
            <div className={classes["step"]}>
              <span className={classes["indicator"] + " " + (currentStep === 1 ? classes["active"] : "")}>1</span>
              <span>
                <p>STEP 1</p>
                <h3>Your Info</h3>
              </span>
            </div>
            <div className={classes["step"]}>
              <span className={classes["indicator"] + " " + (currentStep === 2 ? classes["active"] : "")}>2</span>
              <span>
                <p>STEP 2</p>
                <h3>Select Plan</h3>
              </span>
            </div>
            <div className={classes["step"]}>
              <span className={classes["indicator"] + " " + (currentStep === 3 ? classes["active"] : "")}>3</span>
              <span>
                <p>STEP 3</p>
                <h3>Add-Ons</h3>
              </span>
            </div>
            <div className={classes["step"]}>
              <span className={classes["indicator"] + " " + (currentStep > 3 ? classes["active"] : "")}>4</span>
              <span>
                <p>STEP 4</p>
                <h3>Summary</h3>
              </span>
            </div>
          </div>
          <div className={classes["login-form"]}>
            <div className={classes["form-body"]}>
              {setContentPages()}
            </div>
            {currentStep < 5 && (
              <div className={(currentStep === 1 ? classes["btn-submite"] : classes["btn-submit"] )}>
                {currentStep > 1 && (
                  <button type="submit" className={classes["prev-btn"]} onClick={() => dispatch(setStep(currentStep - 1))}>
                    Go Back
                  </button>
                )}
                <button type="submit" className={classes["next-btn"]} onClick={stepHanlder}>
                  {currentStep < 4 ? "Next Step" : "Confirm"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
