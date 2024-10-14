
import React from "react";

import "./Task_Lists.css";

const Task_Lists = ({isOpen,  setIsOpen, taskLists, onToggle}) => {

    const HideSIdebar = ( ) => {

        if(isOpen) {
            setIsOpen(false);
        }
    }

    return (

        <div className="Task_List" style={{ left: isOpen ? 0 : '-80%' }}>

            <i className="fa-regular fa-circle-xmark" onClick={HideSIdebar}></i>

            <p className="yourtask">Your Tasks</p>


            {taskLists.map((task, index) => (

              <div className="task" key={index} onClick={() => onToggle(task)}>

                {/* <input type="radio" name="options"></input> */}


                <div className="TaskDivs">

                  <p className="TaskName" >{task.name}</p>

                  <p className="TaskDescription" >{task.description}</p>

                </div>

               

              </div>

          ))}

        </div>
    )
}

export default Task_Lists;
