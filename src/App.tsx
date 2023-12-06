import { Provider } from "react-redux";
import Template from "./Template";
import { store } from "./auth/store";

function App() {


  return (
    <Provider store={store}>
      <Template>{/* ROUTES */}</Template>
    </Provider>
  );
}

export default App;
