import React from "react";

const TodoHeader = ({todos, setTodos, newTask, setNewTask, counter, setCounter}) => {
    
    const addTask = () => {
		console.log("Creating new task: ", newTask);
		
		let newTodoObject = {
			done: false,
            id: counter,
			label: newTask
		}
		let newTodos = [...todos, newTodoObject];
		setTodos(newTodos)
		setCounter(counter + 1);
        assignNewTask(newTodos);
	}

    function assignNewTask(todoList) {
        fetch('https://playground.4geeks.com/apis/fake/todos/user/rickr', {
            method: 'PUT',
            body: JSON.stringify(todoList),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if(!response.ok) throw Error(res.statusText);
            return response.json();
        })
        .then(response => {
            console.log('Success:', response)
        })
        .catch(error => console.log(error))
    }


    const checkTextbox = () => {
        let textBox = document.querySelector(".new-todo");
        if (textBox.value === "") {
            alert("Please add a task.");
        }
        else {
            addTask();
        }
    }

    return (
        <>
            <header className="header">
                <h1>todos</h1>
                <input 
                    type="text" 
                    className="new-todo"
                    placeholder="What needs to be done?"
                    onChange={event => setNewTask(event.target.value)}
                    value={newTask}
                />
                <button 
                    className="add-task"
                    onClick={checkTextbox}
                >Add Task</button>
            </header>
        </>
    );
};

export default TodoHeader;
