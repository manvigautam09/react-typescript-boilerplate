import store from "../../store";
import AppRoutes from "../../routes";
import { Provider } from "react-redux";

const AppBoot = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default AppBoot;
