import { ADD_TODO, COMPLETE, DELETE,SET_FILTER } from "./actionTypes";

const initialState=[];
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,{
                    id:Date.now(),
                    text:action.payload,
                    iscomplete:false,
                },
            ];
            case DELETE:
                return state=state.filter((el)=>el.id!==action.payload );
            case COMPLETE:
                return state.map((el) =>
                    el.id === action.payload ? { ...el, iscomplete: true } : el
                );
                case SET_FILTER:
                    return  state=state.filter((el)=>el.iscomplete!==false )
                    
                    
            default:
                return state;
    }
}