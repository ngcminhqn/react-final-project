import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/routers";
import Loading from "./components/Loading";

const App = () => {
  return (
    <Provider store={store}>
      {/* <AuthProvider> */}
      <RouterProvider router={router} fallbackElement={<Loading />} />
      {/* </AuthProvider> */}
    </Provider>
  );
};

export default App;
