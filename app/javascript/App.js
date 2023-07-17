import { Provider } from "react-redux";
import store from "./redux/store";
import ReactDOM from "react-dom";
import Greeting from "./modules/Greeting";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Greeting />
      </React.StrictMode>
    </Provider>
  );
}
// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
