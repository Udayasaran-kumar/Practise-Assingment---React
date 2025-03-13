import { FETCH_FAILURE, FETCH_LOADING, FETCH_SUCCESS } from "./actionTypes";
import axios from 'axios';
export const fetchLoading=()=>({
    type:FETCH_LOADING,
});

export const fetchSuccess = (posts)=>({
    type:FETCH_SUCCESS,
    payload:posts,
});

export const fetchFailure = (error)  =>({
    type:FETCH_FAILURE,
    payload:error,
});

export const fetchData =()=>{
return async (dispatch) => {
dispatch(fetchLoading());
try {
    const res =await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch(fetchSuccess(res.data));
} catch (error) {
    dispatch(fetchFailure(error.message));
}
};
};