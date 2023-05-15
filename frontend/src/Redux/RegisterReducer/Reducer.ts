import React from 'react'

import{
    REGISTER_REQUEST,
    REGISTER_FAILURE,
    REGISTER_SUCCESSFULL
} from "./actionTypes"

const init = {
    isError:false,
    isloading:false,
}

export interface user{
   firstname : string,
   lastname : string,
   email : string,
   pass : string
}

export interface type{
   type : string,
   payload ?: Array<user>
}

export const Reducer = (state=init,{type,payload}:type) => {
    console.log(type);
    switch(type){
        case REGISTER_REQUEST : return{
          ...state,
          isLoading : true
        }
        case REGISTER_SUCCESSFULL : return{
          ...state,
          isLoading : false,
        }
        case REGISTER_FAILURE : return{
            ...state,
            isLoading : false,
            isError : true
          }
         default: return state
   }
  
}


