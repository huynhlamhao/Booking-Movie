import {
   ADD_MOVIE,
   DELETE_MOVIE,
   SET_MOVIE,
   SET_MOVIE_DETAIL,
   SET_MOVIE_DETAIL_CAL,
   UPDATE_MOVIE,
} from "../types/type";

let initialState = {
   movieList: [],
   bannerList: [
      {
         TenPhim: "Hai Phượng",
         ChiTiet:
            "Bộ phim là hành trình nghẹt thở và căng thẳng của bà mẹ đơn thân Hai Phượng (Ngô Thanh Vân) khi phải đối đầu với cả 1 đường dây tội phạm bắt cóc và buôn bán nội tạng xuyên quốc gia để cứu đứa con gái bé bỏng Mai (Mai Cát Vi). ",
         HinhAnh:
            "https://s3img.vcdn.vn/123phim/2019/02/hai-phuong-sneakshow-15508021265617.jpg",
         TraiLer: "https://www.youtube.com/watch?v=THXPCF6UHh8",
      },
      {
         TenPhim: "Vu Quy Đại Náo",
         ChiTiet:
            "Bộ phim là hành trình nghẹt thở và căng thẳng của bà mẹ đơn thân Hai Phượng (Ngô Thanh Vân) khi phải đối đầu với cả 1 đường dây tội phạm bắt cóc và buôn bán nội tạng xuyên quốc gia để cứu đứa con gái bé bỏng Mai (Mai Cát Vi). ",
         HinhAnh:
            "https://s3img.vcdn.vn/123phim/2019/02/vu-quy-dai-nao-15508021506204.jpg",
         TraiLer: "https://youtu.be/SwwlFvOwkhA",
      },
      {
         TenPhim: "Atila Thiên Thần Chiến Binh",
         ChiTiet:
            "Bộ phim là hành trình nghẹt thở và căng thẳng của bà mẹ đơn thân Hai Phượng (Ngô Thanh Vân) khi phải đối đầu với cả 1 đường dây tội phạm bắt cóc và buôn bán nội tạng xuyên quốc gia để cứu đứa con gái bé bỏng Mai (Mai Cát Vi). ",
         HinhAnh:
            "https://s3img.vcdn.vn/123phim/2019/02/alita-thien-than-chien-binh-15504047654193.jpg",
         TraiLer: "https://youtu.be/SwwlFvOwkhA",
      },
      {
         TenPhim: "Vu Quy Đại Náo",
         ChiTiet:
            "Bộ phim là hành trình nghẹt thở và căng thẳng của bà mẹ đơn thân Hai Phượng (Ngô Thanh Vân) khi phải đối đầu với cả 1 đường dây tội phạm bắt cóc và buôn bán nội tạng xuyên quốc gia để cứu đứa con gái bé bỏng Mai (Mai Cát Vi). ",
         HinhAnh:
            "https://s3img.vcdn.vn/123phim/2019/02/vu-quy-dai-nao-15508021506204.jpg",
         TraiLer: "https://youtu.be/SwwlFvOwkhA",
      },
   ],
   detailItem: {},
   detailCal: [],
   selectedMovie: null,
};
const reducer = (state = initialState, { type, payLoad }) => {
   switch (type) {
      case SET_MOVIE:
         state.movieList = payLoad;
         state.detailItem = {};
         return { ...state };
      case SET_MOVIE_DETAIL:
         state.detailItem = payLoad;
         return { ...state };
      case SET_MOVIE_DETAIL_CAL:
         // console.log("payload", payLoad);
         let calFilter = [];
         if (state.detailItem.lichChieu) {
            calFilter = state.detailItem.lichChieu.filter((item) => {
               return (
                  item.thongTinRap.maHeThongRap === payLoad &&
                  item.ngayChieuGioChieu.substr(0, 10) === "2019-01-01"
               );
            });
         }
         state.detailCal = calFilter;
         // console.log("detailCal", state.detailCal);
         return { ...state };
      case "SELECTED_MOVIE":
         state.selectedMovie = payLoad;
         return { ...state };
      case ADD_MOVIE:
         const indexAddMovie = state.movieList.findIndex((item) => {
            return item.maPhim !== payLoad.maPhim;
         });
         let cloneMovie = [...state.movieList];
         if (indexAddMovie !== -1) {
            cloneMovie = [...cloneMovie, payLoad];
            state.movieList = cloneMovie;
         }
         return { ...state };
      case DELETE_MOVIE:
         const indexDeleteMovie = state.movieList.findIndex((item) => {
            return item.maPhim === payLoad;
         });
         let cloneMovieList = [...state.movieList];
         if (indexDeleteMovie !== -1) {
            cloneMovieList.splice(indexDeleteMovie, 1);
            [...state.movieList] = cloneMovieList;
         }
         return { ...state };
      case UPDATE_MOVIE:
         const indexUpdate = state.userListItem.findIndex(
            (item) => item.taiKhoan === payLoad.taiKhoan
         );
         let cloneMovieListUpdate = [...state.movieList];
         if (indexUpdate !== -1) {
            cloneMovieListUpdate[indexUpdate] = payLoad;
            state.movieList = cloneMovieListUpdate;
         }
         return { ...state };

      default:
         return state;
   }
};
export default reducer;
