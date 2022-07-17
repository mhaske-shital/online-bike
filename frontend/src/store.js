import { createStore, applyMiddleware, combineReducers } from "redux"

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { adminUserDataReducer, deleteDataReducer, findPostDataReducer, getAllBikeReducer, loginReducer, postDataReducer, singleBikeReducer, updateDataReducer, userloginReducer } from "./reducer/bike-reducer"

const rootReducer = combineReducers({
    userBike: getAllBikeReducer,
    singleBike: singleBikeReducer,
    // login: loginReducer,
    userLogin: userloginReducer,
    postdata: postDataReducer,
    findpostdata: findPostDataReducer,
    allUsers: adminUserDataReducer,
    deletedData: deleteDataReducer,
    updatedData:updateDataReducer
})

const userInfoFromLocalStore = localStorage.getItem("loginUser")
    ? JSON.parse(localStorage.getItem("loginUser"))  
    : undefined;
  
const intial = {
    userLogin:{
        userloginRedux:userInfoFromLocalStore
      }
  }  
const store = createStore(rootReducer, intial, composeWithDevTools(applyMiddleware(thunk)))

export default store;