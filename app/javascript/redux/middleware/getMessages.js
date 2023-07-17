import axios from "axios";

const getMessages = () => (dispatch) => {
  dispatch({ type: "messages/FETCH_MESSAGES" });
  axios
    .get("http://127.0.0.1:3000/api/messages")
    .then((result) => dispatch({ type: "messages/FETCH_SUCCESS", payload: result.data }))
    .catch((error) => dispatch({ type: "messages/FETCH_ERROR", payload: error }));
};

export default getMessages;
