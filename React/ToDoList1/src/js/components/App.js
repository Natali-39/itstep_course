import {useState} from 'react';

import H1 from './headers/H1.js';

function uid() {
    return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
} //генерация уникального индификатора

export default function App () {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");

    function addNewTask(event) {
        event.preventDefault();
        /**
         * {id: 212644, text: "задача 1", status: 1}
         */
        const newTasks = [
            ...tasks,
            {id: uid(), text: text, status: 0}
        ];

        setTasks(newTasks);

    }

    return(
        <>
        <H1 headerText={"ToDo"} />
        <form action="form" onSubmit={addNewTask}>
            <input type="text" placeholder="Новая задача..." onChange = { (event) => setText(event.target.value) } />
            <button id="btn" type="submit">Добавить</button>
        </form>
        <ul class="list">
            {
                tasks.map(function(task) { 
                    return(
                        <li class="item">
                            <input type="checkbox" checked value="1" />
                            <span class="done">Задача 1</span>
                            <button>&#10006;</button>
                        </li>
                        )
                    }
                )
            }
        </ul>
    </>
    );
}