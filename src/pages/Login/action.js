import { SET_USER_DATA, SET_PLAN, SET_ADDON, SET_CATEGORY, SET_STEP } from "./constant";

// export const setUserData = (userData) => ({
//   type: SET_USER_DATA,
//   userData,
// });

// export const setPlanData = (planData) => {
//   type: SET_PLAN, planData;
// };

// export const setAddonData = (addonData) => {
//   type: SET_ADDON, addonData;
// };

// export const setCategoryData = (categoryData) => {
//   type: SET_CATEGORY, categoryData;
// };

// export const setStep = (step) => {
//   type: SET_STEP, step;
// };

export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  userData
})
export const setPlanData = (planData) => ({
  type: SET_PLAN,
  planData
})
export const setAddonData = (addonData) => ({
  type: SET_ADDON,
  userData
})
export const setCategoryData = (categoryData) => ({
  type: SET_CATEGORY,
  categoryData
})
export const setStep = (step) => ({
  type: SET_STEP,
  step,
});
