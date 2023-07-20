
const initState ={
    value:"",
    todoList:[]
}


const ADD_ACTION=
{

        type:"add"
        
}


const ONCHANGE_ACTION=(payload)=>
{
    return{

        type:"onChange",
        payload
    }
}
const DELETE_ACTION=(payload)=>
{
    return{

        type:"delete",
        payload
    }
}
const reducer = (state,action)=>
{
    console.log(action.type)
    switch(action.type)
    {
        case "add":
            {
                if(state.value)
                    return {
                        value:"",
                        todoList:[...state.todoList,state.value]
                    }
                else
                    return state
            }
        case "onChange":
                return {
                    
                    ...state,
                    value:action.payload
                }
        case "delete":
            {
                
                return{
                    ...state,
                    todoList:state.todoList.slice(0,action.payload).concat(state.todoList.slice(action.payload+1,state.todoList.length))
                }
            }
        default:
            throw new Error('Invalid Action')
    }
}
const store = 

{
    initState:initState,
    ADD_ACTION:ADD_ACTION,
    DELETE_ACTION:DELETE_ACTION,
    ONCHANGE_ACTION:ONCHANGE_ACTION,
    reducer:reducer
    
}
export default store