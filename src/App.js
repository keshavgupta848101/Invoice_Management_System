import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import _store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import RoutesFile from "./RoutesFile";
const { persistor, Store } = _store();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={Store}>
          <PersistGate persistor={persistor}>
            <RoutesFile />
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

// loading={<SpinLayout />}

export default App;
