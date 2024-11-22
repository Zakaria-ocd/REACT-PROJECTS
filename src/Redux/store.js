import { legacy_createStore } from "redux";
import { productReducer } from "./reducers/productReducer";


const store=legacy_createStore(productReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store