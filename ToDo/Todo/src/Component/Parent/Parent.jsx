

import React, { useState, useEffect } from "react";

import "./Parent.css"

import Landing_Page from "../Landing_Page/Landing_page.jsx"

import Todo_Editor from "../Todo_Editor/Todo_Editor.jsx"

import Task_Lists from "../Task_Lists/Task_Lists.jsx"

const Parent = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [taskLists, setTaskLists] = useState([])

    const [isEditorOpen, setIsEditorOpen] = useState(false);

    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {

        const savedTasks = localStorage.getItem("tasks");

        if (savedTasks) {

            try {
                const parsedTasks = JSON.parse(savedTasks);
                if (Array.isArray(parsedTasks)) {
                    setTaskLists(parsedTasks);
                }
            } catch (e) {
                console.error("Error parsing tasks from local storage", e);
            }
        }
    }, []); // This runs only on the initial render (component mount)

    // Save tasks to local storage whenever taskLists changes
    useEffect(() => {

        if (taskLists.length > 0) {

            localStorage.setItem("tasks", JSON.stringify(taskLists));
        }
        
    }, [taskLists]);


    const toggleSidebar = () => {

        if(!isOpen){
            setIsOpen(true)
        }
    }


    const addNewTask = (name, description) => {

        setTaskLists((prev) => [...prev, { name, description }]);

    };

    const openEditor = (task) => {

        setSelectedTask(task); 

        setIsEditorOpen(true);

        setIsOpen(false); // Ensure sidebar closes when the editor opens
    };



    const saveTask = (name, description) => {

        setTaskLists(prev => prev.map(task => task.name === selectedTask.name ? { name, description } : task ));

        closeEditor();

    };


    const closeEditor = () => {
        
        setIsEditorOpen(false);

        
    }

    return(

        <div className="parent">

            <Task_Lists isOpen={isOpen} setIsOpen={setIsOpen} taskLists={taskLists} onToggle={openEditor}  />

            {isEditorOpen ? 

                (
                    <Todo_Editor isEditorOpen={isEditorOpen} onToggle={closeEditor}  selectedTask={selectedTask} saveTask={saveTask}/>
                ) 
                
                :
                
                (
                    <Landing_Page onToggle={toggleSidebar} addNewTask={addNewTask} />
                )
            
            }

            
        </div>
    )
}


export default Parent;