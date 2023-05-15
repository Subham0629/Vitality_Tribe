import React from 'react'

import{
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESSFULL,
    LOGOUT_USER,
    UPDATE_SUCCESSFULL
} from "./actionTypes"

const init = {
    isError:false,
    isloading:false,
    isAuth : JSON.parse(localStorage.getItem("isAuth")!)||false,
    token : localStorage.getItem("token")||"",
    user : JSON.parse(localStorage.getItem("user")!)||[]
}

export interface user{
   email : string,
   pass : string
}

export interface type{
   type : string,
   payload ?: any
}

export const Reducer = (state=init,{type,payload}:type) => {
    console.log(payload);
    switch(type){
        case LOGIN_REQUEST : return{
          ...state,
          isLoading : true
        }
        case LOGIN_SUCCESSFULL : return{
          ...state,
          isLoading : false,
          isAuth : true,
          token : payload[0],
          user : payload[1]
        }
        case LOGIN_FAILURE : return{
            ...state,
            isLoading : false,
            isError : true
          }
         case LOGOUT_USER : return{
            ...state,
            isAuth : false,
            token : ""
         }
         case UPDATE_SUCCESSFULL : return{
          ...state,
          isLoading : false,
          isAuth : true,
          user : payload
        }
         default: return state
   }
  
}


