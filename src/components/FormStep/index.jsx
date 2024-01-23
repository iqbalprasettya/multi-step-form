import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./style.module.scss";

import { setUserData } from "../../pages/Login/action";

const index = () => {
  const [dataInfo, setDataInfo] = useState({ name: "", email: "", phone: "" });

  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.loginReducers.userData);

  // const onSubmit = () => {
  //   dispatch(setUserData({ ...personalInfo, name: dataInfo?.name }));
  //   dispatch(setUserData({ ...personalInfo, email: dataInfo?.email }));
  //   dispatch(setUserData({ ...personalInfo, phone: dataInfo?.phone }));
  // };

  // useEffect(() => {
  //   dispatch(setUserData({ ...personalInfo, name: dataInfo?.name }));

  //   dispatch(setUserData({ ...personalInfo, email: dataInfo?.email }));

  //   dispatch(setUserData({ ...personalInfo, phone: dataInfo?.phone }));
  // }, [dataInfo]);

  // useEffect(() => {
  //   if (personalInfo) {
  //     setDataInfo(personalInfo);
  //   }
  // }, []);

  return (
    <>
      <div className={classes["form"]}>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <div className={classes["name"]}>
          <label>Name</label>
          <input value={dataInfo.name} onChange={(e) => setDataInfo((prevVal) => ({ ...prevVal, name: e.target.value }))} type="text" name="name" id="" placeholder="e.g Stephen King" />
        </div>
        <div className={classes["email"]}>
          <label>Email Address</label>
          <input value={dataInfo.email} onChange={(e) => setDataInfo((prevVal) => ({ ...prevVal, email: e.target.value }))} type="email" name="email" id="" placeholder="e.g stephenking@lorem.com" />
        </div>
        <div className={classes["phone"]}>
          <label>Phone Number</label>
          <input value={dataInfo.phone} onChange={(e) => setDataInfo((prevVal) => ({ ...prevVal, phone: e.target.value }))} type="text" name="" id="" placeholder="e.g +1 234 567 890" />
        </div>
      </div>
    </>
  );
};

export default index;
