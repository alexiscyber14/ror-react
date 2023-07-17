import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMessages from "../redux/middleware/getMessages";
const Greeting = () => {
  const { messages, loading, status } = useSelector((store) => store.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessages());
  }, []);
  return (
    <React.StrictMode>
      {messages.content}
    </React.StrictMode>
  );
};

export default Greeting;
