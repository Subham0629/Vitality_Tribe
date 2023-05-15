
import { ADD_TO_COMMUNITY_SUCCESSFUL, COMMUNITY_FAILURE, COMMUNITY_REQUEST, COMMUNITY_SUCCESSFULL,GET_SINGLE_COMMUNITY_PRODUCT } from "./actionTypes"
interface MyObject {
    isError: boolean;
    isloading: boolean;
    data: any[];
    userData: any;
    compareData : any;
}
const init: MyObject = {
    isError: false,
    isloading: false,
    data: [],
    userData: JSON.parse(localStorage.getItem("userdetails")!) || {},
    compareData: JSON.parse(localStorage.getItem("comparedetails")!) || {},
}

export interface user {
    userID: string,
    user: string,
    name: string,
    Energy: number,
    time: number,
    Fat: number,
    Netcarbs: number,
    Protien: number,
    caloriesburnt: number,
    caloriesremaining: number,
    caloriesconsumed: number,
}
export interface type {
    type: string,
    payload?: Array<user>
}

export const Reducer = (state = init, { type, payload }: type) => {
    console.log(type,payload)
    switch (type) {
        case COMMUNITY_REQUEST:
            return { ...state, isloading: true, isError: false };
        case COMMUNITY_FAILURE:
            return { ...state, isloading: false, isError: true };
        case COMMUNITY_SUCCESSFULL:
            return { ...state, isloading: false, data: payload };
        case ADD_TO_COMMUNITY_SUCCESSFUL : return{
            ...state,
            isloading: false,
            userData : payload
        }
        case GET_SINGLE_COMMUNITY_PRODUCT : return{
            ...state,
            isloading: false,
            compareData : payload
        }
        default: return state
    }

}


