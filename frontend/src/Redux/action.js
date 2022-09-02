import * as actionType from "./actionType"

export const switch_page=(payload)=>{
    return {type:actionType.Switch_page,payload}
}

export const setTodo=(payload)=>{
    return {type:actionType.set_todo,payload}
}