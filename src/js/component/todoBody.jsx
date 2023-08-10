import React, { useEffect } from "react";

const TodoBody = ({todos, setTodos, setCounter}) => {

    // const deleteTask = (selectedTodoId) => {
	// 	let updatedTodos = todos.filter(todo => todo.id != selectedTodoId)
	// 	setTodos(updatedTodos);
	// }
    
    let renderTasks = todos.map(todo => {
		return (
			<li className="list-item" key={todo.id}>
				<label>{todo.label}</label>
				<button 
					className="delete-task" 
					onClick={() => deleteTask(todo.id)}
                > X </button>
			</li>
		);
	})

    useEffect(() => {
        fetch('https://playground.4geeks.com/apis/fake/todos/user/rickr')
        .then(response => response.json())
        .then(data => {
            setTodos(data);
            if (data[0].label === "example task") {
                setCounter(data.length);
            } else {
                setCounter(data.length + 1);
            }
        })
    }, [])


    return (
        <>
            <section className="main">
                <ul className="todo-list">
                    {todos.length !== 0 ? renderTasks : "No tasks, add a task."}
                </ul>					
            </section>
        </>
    );
};

export default TodoBody;