import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx"
import { pokemonReducer } from "./reducers/pokemon.js";
import { Provider } from "react-redux";
import { featuring, logger } from "./middlewares/index.js";
import {applyMiddleware,
        compose, 
        legacy_createStore as createStore} from "redux";



const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

const composedEnhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger)
//    applyMiddleware(logger, featuring)  con esto renderizo a mi custom pokemon
  );
  
  const store = createStore(pokemonReducer, composedEnhancers);
  
root.render(
    <StrictMode>
        <Provider store={store}>
             <App />
        </Provider>
   
    </StrictMode>
);