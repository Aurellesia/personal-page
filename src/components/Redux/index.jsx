import store from "app/store";
import { Provider } from "react-redux";
import Counter from "./counterRedux/Counter";

const Redux = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default Redux;
