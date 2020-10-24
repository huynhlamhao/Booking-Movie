import axios from "axios";

const createConnector = () => {
   const config = {};
   //    const token = localStorage.getItem("t");
   //    if (token) {
   //       config.header = { Authorizon: "Beaber" + token };
   //    }
   return axios.create(config);
};
const connector = createConnector();
export default connector;
