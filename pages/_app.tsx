import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import { store, persistor } from "../store/store";
import { Provider } from "react-redux";
import "../styles/globals.scss";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
