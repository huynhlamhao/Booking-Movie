import {
   ADD_USER,
   DELETE_USER,
   SET_USERLIST,
   UPDATE_USER,
} from "../types/type";

let initialState = {
   userList: {},
   userListItem: [],
   selectedUser: null,
};
const reducer = (state = initialState, { type, payLoad }) => {
   switch (type) {
      case SET_USERLIST:
         state.userList = payLoad;
         state.userListItem = payLoad.items;

         return { ...state };
      case "SELECTED_USER":
         state.selectedUser = payLoad;
         return { ...state };
      case UPDATE_USER:
         const indexUpdate = state.userListItem.findIndex(
            (item) => item.taiKhoan === payLoad.taiKhoan
         );
         let cloneUserListItem = [...state.userListItem];
         if (indexUpdate !== -1) {
            cloneUserListItem[indexUpdate] = payLoad;
            state.userListItem = cloneUserListItem;
         }
         return { ...state };
      case DELETE_USER:
         const index = state.userListItem.findIndex((item) => {
            return item.taiKhoan === payLoad;
         });
         let cloneUserList = [...state.userListItem];
         console.log("clone0", cloneUserList);
         if (index !== -1) {
            cloneUserList.splice(index, 1);
            [...state.userListItem] = cloneUserList;
         }

         return { ...state };
      case ADD_USER:
         const indexAddUser = state.userListItem.findIndex((item) => {
            return item.taiKhoan !== payLoad.taiKhoan;
         });
         let cloneUserListItemAdd = [...state.userListItem];
         if (indexAddUser !== -1) {
            cloneUserListItemAdd = [...cloneUserListItemAdd, payLoad];
            state.userListItem = cloneUserListItemAdd;
         }
         return { ...state };

      default:
         return state;
   }
};
export default reducer;
