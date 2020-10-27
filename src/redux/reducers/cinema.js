const {
   SET_CINEMA,
   SET_CINEMA_LIST,
   SET_CINEMA_SHOWTIME,
} = require("../types/type");

let initialState = {
   listCinemas: [],
   cinema: [],
   showTime: [], //tìm vị trí của danh sach phim rồi push vào
   cinemaSystemLogo: [
      {
         maHeThong: "BHDStar",
         img:
            "https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-3-2-15379527367766.jpg",
      },
      {
         maHeThong: "CGV",
         img:
            "https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg",
      },
      {
         maHeThong: "CineStar",
         img:
            "https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg",
      },
      {
         maHeThong: "Galaxy",
         img:
            "https://s3img.vcdn.vn/123phim/2018/09/galaxy-nguyen-du-15379626329832.jpg",
      },
      {
         maHeThong: "LotteCinima",
         img:
            "https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-go-vap-15383873960955.jpg",
      },
      {
         maHeThong: "MegaGS",
         img:
            "https://s3img.vcdn.vn/123phim/2018/09/mega-gs-cao-thang-15380164745357.jpg",
      },
   ],
};
const reducer = (state = initialState, { type, payLoad }) => {
   switch (type) {
      case SET_CINEMA:
         state.listCinemas = payLoad;
         return { ...state };
      case SET_CINEMA_LIST:
         // console.log("payload", payLoad);
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
