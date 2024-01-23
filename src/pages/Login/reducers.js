import { produce } from "immer";

import { SET_USER_DATA, SET_PLAN, SET_ADDON, SET_CATEGORY, SET_STEP } from "./constant";

export const initialState = {
  userData: null,
  plan: null,
  addon: null,
  category: null,
  step: 1,
};

const loginReducers = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_USER_DATA:
        return (draft.userData = action.userData);
        break;
      case SET_PLAN:
        return (draft.plan = action.plan);
        break;

      case SET_ADDON:
        return (draft.addon = action.addon);
        break;

      case SET_CATEGORY:
        return (draft.category = action.category);
        break;

      case SET_STEP:
        draft.step = action.step;
        break;

      default:
        break;
    }
  });

export default loginReducers;
