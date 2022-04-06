import { Provider } from "react-redux";
import generateStore from "./redux/store";
import RouterApp from "./views/Router";

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <div className="App">
        User Form
        <RouterApp />
      </div>
    </Provider>
  );
}

export default App;
