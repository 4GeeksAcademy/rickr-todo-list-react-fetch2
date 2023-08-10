import React, { useState } from "react";
import TodoHeader from "./todoHeader";
import TodoBody from "./todoBody";
import TodoFooter from "./todoFooter";

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [newTask, setNewTask] = useState("");
	const [counter, setCounter] = useState(0);

	return (
		<>
			<div className="todoapp">
				<TodoHeader  
                    todos={todos}
                    setTodos={setTodos}
                    newTask={newTask}
                    setNewTask={setNewTask}
                    counter={counter}
                    setCounter={setCounter}
                />
				<TodoBody 
                    todos={todos} 
                    setTodos={setTodos}
                    setCounter={setCounter}
                />
				<TodoFooter 
                    todos={todos}
                />
			</div>
		</>
	);    
};

export default Todo;
