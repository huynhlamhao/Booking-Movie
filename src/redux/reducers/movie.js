import {
   SET_MOVIE,
   SET_MOVIE_DETAIL,
   SET_MOVIE_DETAIL_CAL,
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
         console.log("detailCal", state.detailCal);
         return { ...state };
      default:
         return state;
   }
};
export default reducer;
