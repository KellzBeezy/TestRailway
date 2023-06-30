import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import PostsReducer from "./reducers/PostsReducer";
import thunk from "redux-thunk";
import { AuthReducer } from "./reducers/AuthReducer";
import todoReducers from "./reducers/Reducers";
import companyReducer from "./reducers/companyReducer";
import driverReducer from "./reducers/driverReducer";
import machinesReducer from "./reducers/machineReducer";
// import slideBarReducer from "./reducers/slideBarReducers";
import adminReducer from "./reducers/adminReducer";
import locationReducer from "./reducers/locationReducer";
import contractsReducer from "./reducers/contractsReducer";
import jobReducer from "./reducers/jobReducer";
import requestReducer from "./reducers/requestReducer";
import machineTypeReducer from "./reducers/machineTypesReducer";
//import { reducer as reduxFormReducer } from 'redux-form';
const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  drivers: driverReducer,
  machines: machinesReducer,
  companies: companyReducer,
  admins: adminReducer,
  locations: locationReducer,
  contracts: contractsReducer,
  jobs: jobReducer,
  requests: requestReducer,
  machineTypes: machineTypeReducer,
  posts: PostsReducer,
  auth: AuthReducer,
  todoReducers,
  //form: reduxFormReducer,
});

//const store = createStore(rootReducers);

export const store = createStore(reducers, composeEnhancers(middleware));
