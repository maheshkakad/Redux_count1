import { COUNTER_DECREMEMT ,COUNTER_INCREMENT,COUNTER_MULTIPLY,COUNTER_DIVIDE} from "./action.types"

export const Add = (value) => ({ type: COUNTER_INCREMENT , payload:value })
export const Remove = (value) => ({type: COUNTER_DECREMEMT , payload:value})

export const Multiply = (value) => ({ type: COUNTER_MULTIPLY , payload:value })
export const Divide = (value) => ({type: COUNTER_DIVIDE , payload:value})