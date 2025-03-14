import { FETCH_FAILURE, FETCH_LOADING, FETCH_SUCCESS } from "./actionTypes";

export const initialState={
posts:[],
loading:true,
error:"",
};

export const reducer = (state=initialState, action)=>{
switch(action.type){
    case FETCH_LOADING:
        return{
            posts:[],
            loading:true,
            error:"",
        };
    case FETCH_SUCCESS:
        return {
            ...state,
            posts:action.payload,
            loading:false,
            error:"",
        };
    case FETCH_FAILURE:
        return{
            ...state,
            loading:false,
            error:action.payload,
        };    
    default:
        return state;
}
};