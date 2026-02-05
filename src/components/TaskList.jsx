import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addTask,
    deleteTask,
    toggleComplete,
} from "../features/tasks/taskSlice";

const TaskList = () => {
    const [taskInput, setTaskInput] = useState("");
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);

    const handleAddTask = () => {
        if (taskInput.trim() !== "") {
            dispatch(addTask(taskInput));
            setTaskInput("");
        }
    };

    return (
        <div className="task-container">
            <h2 className="task-title">Task Builder App</h2>

            <div className="task-input-row">
                <input
                    className="task-input"
                    type="text"
                    placeholder="Enter task..."
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <button className="btn btn-add" onClick={handleAddTask}>
                    Add
                </button>
            </div>

            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className="task-item">

                        <div className="task-left">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => dispatch(toggleComplete(task.id))}
                            />

                            <span
                                className={`task-text ${task.completed ? "completed" : ""
                                    }`}
                            >
                                {task.title}
                            </span>
                        </div>

                        <button
                            className="btn btn-delete"
                            onClick={() => dispatch(deleteTask(task.id))}
                        >
                            Delete
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
