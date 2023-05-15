import {
    DASHBOARD_FAILURE,
    DASHBOARD_REQUEST,
    GET_DASHBOARD_PRODUCT_SUCCESS
  } from "./actionTypes" 

const initialObj = {
    isLoading : false,
    isError : false,
    dashboard : JSON.parse(localStorage.getItem("dashboardproducts")!)||[]
}

export interface user{
    email : string,
    pass : string
 }
 
 export interface type{
    type : string,
    payload ?: string
 }

  export const Reducer = (state = initialObj,{type,payload}:type)=>{
    switch(type){
     case DASHBOARD_REQUEST : return {
        ...state,
        isLoading : true
     }
     case GET_DASHBOARD_PRODUCT_SUCCESS : return {
        ...state,
        isLoading : false,
        dashboard : payload
     }
     case DASHBOARD_REQUEST : return {
        ...state,
        isLoading : false,
        isErrorr : true
     }
     default: return state
    }
  }