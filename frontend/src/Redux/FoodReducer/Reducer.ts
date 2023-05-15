
import { POST_EXERCISE_SUCCESSFULL } from "../ExerciseReducer/actionTypes";
import{ FOOD_FAILURE, FOOD_REQUEST, FOOD_SUCCESSFULL } from "./actionTypes"
interface MyObject {
    isError: boolean;
    isloading: boolean;
    data: any[]; 
  }
const init:MyObject = {
    isError:false,
    isloading:false,
    data:[]
}

export interface user{
    _id:string
   name : string,
   Energy : number,
   Protien : number,
   Fat : number,
   Netcarbs : number,
   type? : string
   quantity:number
}
export interface type{
   type : string,
   payload ?: Array<user>
}

export const Reducer = (state=init,{type,payload}:type) => {
    switch(type){
        case FOOD_REQUEST:
            return { ...state, isloading: true,isError:false};
            case FOOD_FAILURE:
            return { ...state, isloading: false,isError:true };
        case FOOD_SUCCESSFULL:
            return { ...state, isloading: false, data: payload };
            case POST_EXERCISE_SUCCESSFULL:
                return { ...state, isloading: false};
         default: return state
   }
  
}


