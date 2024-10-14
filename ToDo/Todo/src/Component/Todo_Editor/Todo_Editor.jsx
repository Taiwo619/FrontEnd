

import React, {useState} from "react";

import "./Todo_Editor.css"

const Todo_Editor = ({isEditorOpen,  selectedTask, saveTask}) => {

    const [newTodo_Name, setnewTodo_Name] = useState(selectedTask ? selectedTask.name : "");

    const [newTodo_Description, setnewTodo_Description] = useState(selectedTask ? selectedTask.description : "");


    React.useEffect(() => {

        if (selectedTask) {

            setnewTodo_Name(selectedTask.name);
            setnewTodo_Description(selectedTask.description);

        }

    }, [selectedTask]);


    

    return (
        
        isEditorOpen && (

                <div className="Editor">

                <div className="Editor-Div">

                <input 
                        type="text"
                        className="Title"
                        value={newTodo_Name}
                        onChange={(e) => setnewTodo_Name(e.target.value)}
                    />


                <i  className="fa-regular fa-floppy-disk" onClick={() => { saveTask(newTodo_Name, newTodo_Description); }}></i>

                </div>

                
                
                <div className="Description-Div">

                    <textarea
                    className="Description" 
                    placeholder="Add Note"
                    value={newTodo_Description}
                    onChange={(e) => setnewTodo_Description(e.target.value)}
                    />

                </div>

                {/* <div className="Editors-Menus-Div"></div> */}

            </div>
            
        )

        

        
    )
}

export default  Todo_Editor