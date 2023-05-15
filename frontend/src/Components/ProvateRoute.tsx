import React from 'react'
import {FC} from "react"
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface login {
  isError:boolean,
  isloading:boolean,
  isAuth : boolean,
  token : string,
}

interface store {
  LoginReducer : login
}

const PrivateRoute = ({children}:any) => {
  const location=useLocation()
  const {token,isAuth} = useSelector((store:store)=>store.LoginReducer)
  if(!isAuth){
    return <Navigate to="/login" state={location.pathname} replace={true} />
  }
  return children
}

export default PrivateRoute