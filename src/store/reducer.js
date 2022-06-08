 import { COUNTER_DECREMEMT ,COUNTER_INCREMENT,COUNTER_DIVIDE,COUNTER_MULTIPLY } from "./action.types";
 
export const reducer = (state , {type , payload}) => {
   
   
     switch(type){

         case COUNTER_INCREMENT: {
             state.count = state.count + (+payload);
             return { ...state };
         }
         case COUNTER_DECREMEMT:{
            state.count = state.count - payload;
             return { ...state }
         }
         case COUNTER_MULTIPLY: {
             state.count = state.count * payload;
             return { ...state }
         }
         case COUNTER_DIVIDE: {
            state.count = state.count / payload;
            return { ...state }
        }
         default: {
             return state;
         }
     }
}