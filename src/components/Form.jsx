import { useState } from "react"

const Form=(props)=>{
    const {updateTodoList}=props;
    // const [todo,setTodo]=useState([]);
    const [inputTodo, setInputTodo] = useState("");
    function insertingTodo(e)
    {
        e.preventDefault();
        // const newTodo=[...todo,inputTodo];
        // setTodo(newTodo);
        // setInputTodo(" ");
        // updateTodoStatus(newTodo);
        //new code 
        console.log(inputTodo);
        updateTodoList((prevState)=>{
            console.log(...prevState);
            console.log([...prevState]);
            return [...prevState,inputTodo];
        });
        setInputTodo(" ");

    }
    return(
    <form className="form" onSubmit={insertingTodo}>
        <input type="text" onChange={(e)=>{
            // setInputTodo(e.target.val);
            const val=e.target.value;
            setInputTodo(val)}} value={inputTodo}/>
        
        <button type="submit">
          <span>Add</span>
        </button>
    </form>    
    )
};
export default Form;

