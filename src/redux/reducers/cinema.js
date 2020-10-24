const {
   SET_CINEMA,
   SET_CINEMA_LIST,
   SET_CINEMA_SHOWTIME,
} = require("../types/type");

let initialState = {
   listCinemas: [],
   cinema: [],
   showTime: [],
};
const reducer = (state = initialState, { type, payLoad }) => {
   switch (type) {
      case SET_CINEMA:
         state.listCinemas = payLoad;
         return { ...state };
      case SET_CINEMA_LIST:
         state.cinema = payLoad;
         console.log(state.cinema[0]);
         return { ...state };
      case SET_CINEMA_SHOWTIME:
         console.log("payload", payLoad);
         // console.log("show", state.showTime);
         return;
      default:
         return state;
   }
};
export default reducer;
