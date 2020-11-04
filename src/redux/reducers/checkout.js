import { SET_CHECKOUT } from "../types/type";

let initialState = {
   checkoutInfo: {},
};
const reducer = (state = initialState, { type, payLoad }) => {
   switch (type) {
      case SET_CHECKOUT:
         state.checkoutInfo = payLoad;
         console.log("checkoutstate:", state.checkoutInfo);
         return { ...state };
      default:
         return state;
   }
};
export default reducer;
