

import "./Landing_Page.css"

import React, {useState} from "react"

const Landing_Page = ({onToggle, addNewTask}) => {

    const [taskName, setTaskName] = useState("Your Task Name")

    const [taskDescription, setTaskDescription] = useState("Your Task Note")

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const [isDialogClose, setIsDialogClose] = useState(false)

    

   
   
    const handleAddTask = () => {

        setIsDialogOpen(true)
        setIsDialogClose(false)

    }

    const handleCloseDialog = () => {
        
        setIsDialogClose(true)
        setIsDialogOpen(false)
    }

    const handleSaveTask = () => {

        addNewTask(taskName, taskDescription)
        setTaskName("")
        setTaskDescription("")
        setIsDialogClose(true)
    }

    return(

        <div className="Landing_Page">

            <i aria-label="Toggle Sidebar" onClick={onToggle} className="fa-solid fa-bars">

            </i>


            <div className="Landing_Div">

                <p className="Landing-page-title">Organize your work and Life <br/>with <span>to-do</span>
                </p>

                <button onClick={handleAddTask} className="Add-Task">Add Task</button>

            </div>


            {isDialogOpen && (

                <div className= {`write-task ${isDialogClose ? "close" : "open"}`} style={{display: "flex"}}>

                    <div className="task-grp">

                        <label for="Task Name" >Task Name</label>

                        <input
                          
                          type="text"
                          placeholder="Enter your task name"
                          value={taskName}
                          onChange={(e) => setTaskName(e.target.value)}
                        />

                      </div>


                      <div className="task-grp">


                        <label for="Task Name" >Note</label>

                        <input
                          className="discription"
                          type="text"
                          placeholder="Add Your Note"
                          value={taskDescription}
                          onChange={(e) => setTaskDescription(e.target.value)}
                        />

                      </div>

                      <div className="task-btns">

                        <button onClick={handleSaveTask} className="save-btn">Save</button>
                        <button onClick={handleCloseDialog} className= "cancel-btn" >Cancel</button>
                          
                      </div>

                </div>

            )}


        </div>
    )


}

export default Landing_Page