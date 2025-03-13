import { ADD_TODO,COMPLETE,DELETE,SET_FILTER } from "./actionTypes";
export const addtodo=(text)=>({
    type:ADD_TODO,
    payload:text,
});
export const deletetodo=(id)=>({
    type:DELETE,
    payload:id,
});
export const complete=(id)=>({
    type:COMPLETE,
    payload:id,
});
export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});
