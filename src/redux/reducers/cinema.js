const {
   SET_CINEMA,
   SET_CINEMA_LIST,
   SET_CINEMA_SHOWTIME,
} = require("../types/type");

let initialState = {
   listCinemas: [],
   cinema: [],
   showTime: [], //tìm vị trí của danh sach phim rồi push vào
};
const reducer = (state = initialState, { type, payLoad }) => {
   switch (type) {
      case SET_CINEMA:
         state.listCinemas = payLoad;
         return { ...state };
      case SET_CINEMA_LIST:
         console.log("payload", payLoad);
         state.cinema = payLoad;
         state.showTime = payLoad[0].lstCumRap[0].danhSachPhim;
         return { ...state };
      case SET_CINEMA_SHOWTIME:
         const index = state.cinema[0].lstCumRap.findIndex((item) => {
            return item.maCumRap === payLoad;
         });
         // if (state.showTime.length > 0) {
         //    state.showTime.splice(0, 1);
         // }
         let show = [];
         if (index !== -1) {
            let movieList = state.cinema[0].lstCumRap[index].danhSachPhim;
            show = movieList;
            state.showTime = show;
            return { ...state };
         } else {
            return { ...state };
         }

      default:
         return state;
   }
};
export default reducer;
