import { useState } from "react";
import Form from './Form'
import List from './List'
const Header=()=>{
    const [updatedTodoList, updateTodoList] = useState([]);
    // function updateTodoStatus(todo){
    //   updateTodo(todo);
    // }
    return(
        <div className="container">
            <div className="heading">
            <h1>To-Do List</h1>
            </div>   
            {/* <Form updateTodoStatus={updateTodoStatus}/> */}
            <Form updateTodoList={updateTodoList}/>
            {/* <List todo={updatedTodo} /> */}
            <List todo={updatedTodoList} />
        </div> 
    );
}

export default Header;