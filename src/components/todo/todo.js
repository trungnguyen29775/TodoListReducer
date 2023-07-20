import './todo.css'
import { RxCross2 } from "react-icons/rx";
import store from './constant/constant'
import { useReducer } from 'react';
function Todo()
{
    
    const [todoList,dispatchTodoList] = useReducer(store.reducer,store.initState)
    console.log(todoList.value)
    const handelSubmit = ()=>
    {
        dispatchTodoList(store.ADD_ACTION)
    }
    const handleDelete = (e)=>
    {

        dispatchTodoList(store.DELETE_ACTION(e.target.parentNode.id))
    }


    return(
        <div className='todo-wraper'>
            <div className='todo-header-container'>
                <h1>Todo</h1>
            </div>
            <div className='todo-input-container'>
                <input value={todoList.value} onChange={e=>dispatchTodoList(store.ONCHANGE_ACTION(e.target.value))} type="text" placeholder='Add some thing you wanna do...'/>
                <button onClick={handelSubmit}>Add</button>
            </div>
            <div className='todo-list-container'>
                {
                    todoList.todoList?.map((item,index)=>
                    {
                        return(
                            <div id={index} key={index} className='todo-list-item-container'>
                            <span>{item}</span>
                            <div className='todo-list-item-icon-container' onClick={e=>handleDelete(e)}>
                                <RxCross2 style={{margin:"auto",fontWeight:600,fontSize:"20px"}}/>
                            </div>
                        </div>
                        )
                    })
                    
                    
                }
                
            </div>

            <span className='name-author'>Dev by trungnguyen</span>
        </div>
    )
}
export default Todo