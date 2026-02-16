import {useState, useEffect} from 'react';

import H1 from './headers/H1.js';

/*
function uid() {
    return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
} //генерация уникального индификатора

export default function App () {
    const savedTasks = window.localStorage.getItem("tasks")

    const [tasks, setTasks] = useState(savedTasks ? JSON.parse(savedTasks) : []);
    const [text, setText] = useState("");

    function addNewTask(event) {
        event.preventDefault();
        /**
         * {id: 212644, text: "задача 1", status: 1}
         */
        /*const newTasks = [
            ...tasks,
            {id: uid(), text: text, status: 0}
        ];

        setTasks(newTasks);

        setText("");

    }

    function changeStatus(taskId) {
        const newTasks = tasks.map((task) => {
            if(task.id == taskId) {
                task.status = !task.status;
            }

            return task;
        });

        setTasks(newTasks);

    }

    function deleteTask(taskId) {
        if(confirm('Вы действительно хотите удалить задачу?')) {
            const newTasks = tasks.filter((task) => {
                return task.id != taskId;
            });
    
            setTasks(newTasks);
        }
    }

    useEffect(() => {
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return(
        <>
            <H1 headerText={"ToDo"} />
            <form className="form" onSubmit={addNewTask}>
                <input type="text" placeholder="Новая задача..." value={text} onChange = { (event) => setText(event.target.value) } />
                <button id="btn" type="submit">Добавить</button>
            </form>
            {
                tasks.length > 0 ? 
                (<ul className="list">
                    {
                        tasks.map(function(task) { 
                            return(
                                <li className="item" key={task.id}>
                                    <input type="checkbox" checked={task.status} value="1" onChange={ () => {changeStatus(task.id)}} />
                                    <span className={task.status ? "done" : null}>{task.text}</span>
                                    <button onClick={() => {deleteTask(task.id)}} >&#10006;</button>
                                </li>
                                )
                            }
                        )
                    }
                </ul>) : "Список задач пустой"
            }
            
        </>
    );
}*/