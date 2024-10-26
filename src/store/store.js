import { createStore , combineReducers} from "redux";

import themeReducer from "./themeReducer";
import cartReducer from "./cartReducer";
import languageReducer from './languageReducer'
 const rootReducer =combineReducers({
  
    theme:themeReducer,
    cart: cartReducer,
    lang: languageReducer
 })
 

 export const store = createStore(rootReducer)