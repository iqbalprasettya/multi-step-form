import React from "react";
import classes from "./style.module.scss";

import Icon1 from "../../assets/images/icon-thank-you.svg";

const index = () => {
  return (
    <>
      <div className={classes["form"]}>
        <div className={classes["finish"]}>
          <img src={Icon1} alt="" />
          <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
      </div>
    </>
  );
};

export default index;
