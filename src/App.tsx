import { Provider } from "react-redux";
import Template from "./Template";
import { store } from "./auth/store";
import Home from "./app/pages/home";

function App() {
  return (
    <Provider store={store}>
      <Template>{/* ROUTES */}
        <Home/>
      </Template>
    </Provider>
  );
}

export default App;
