import React from "react";
import classes from "./style.module.scss";

import Icon1 from "../../assets/images/icon-arcade.svg";
import Icon2 from "../../assets/images/icon-advanced.svg";
import Icon3 from "../../assets/images/icon-pro.svg";

import { FormControlLabel, styled, Switch } from "@mui/material";

const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(({ theme }) => ({
  width: 42,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(22px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#02295a" : "#02295a",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#02295a",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#02295a" : "#02295a",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const index = () => {
  return (
    <>
      <div className={classes["form"]}>
        <h1>Select Your Plan</h1>
        <p>You have the option of monthly or yearly billing</p>
        <div className={classes["plan"]}>
          <div className={classes["plan-item"]}>
            <div className={classes["plan-image"]}>
              <img src={Icon1} alt="" />
            </div>
            <div className={classes["plan-text"]}>
              <h4>Arcade</h4>
              <p>$9/mo</p>
            </div>
          </div>
          <div className={classes["plan-item"]}>
            <div className={classes["plan-image"]}>
              <img src={Icon2} alt="" />
            </div>
            <div className={classes["plan-text"]}>
              <h4>Advance</h4>
              <p>$12/mo</p>
            </div>
          </div>
          <div className={classes["plan-item"]}>
            <div className={classes["plan-image"]}>
              <img src={Icon3} alt="" />
            </div>
            <div className={classes["plan-text"]}>
              <h4>Pro</h4>
              <p>$15/mo</p>
            </div>
          </div>
        </div>
        <div className={classes["toggle"]}>
          <label className={classes["monthly"]}>Monthly</label>
          <FormControlLabel className={classes["switch-year"]} control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
          <label className={classes["yearly"]}>Yearly</label>
        </div>
      </div>
    </>
  );
};

export default index;
