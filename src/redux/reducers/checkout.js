import { SET_CHECKOUT, SET_SELECTED_CHAIR } from "../types/type";

let initialState = {
   checkoutInfo: {},
   selectedChair: [],
};
const reducer = (state = initialState, { type, payLoad }) => {
   switch (type) {
      case SET_CHECKOUT:
         state.checkoutInfo = payLoad;
         console.log("checkoutstate:", state.checkoutInfo);
         return { ...state };
      case SET_SELECTED_CHAIR:
         const cloneSelectedChair = [...state.selectedChair];

         const index = cloneSelectedChair.findIndex((item) => {
            return item.maGhe === payLoad.maGhe;
         });

         if (index !== -1) {
            cloneSelectedChair.splice(index, 1);
         } else {
            cloneSelectedChair.push(payLoad);
         }
         state.selectedChair = cloneSelectedChair;
         console.log(state.selectedChair);
         return { ...state };
      default:
         return state;
   }
};
export default reducer;
