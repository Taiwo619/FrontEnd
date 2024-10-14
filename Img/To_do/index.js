
////// theme toggler

const toggle_icon = document.getElementById("theme-icon")


function theme_toggler(){

    if (document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        toggle_icon.src = "dark.png";
        localStorage.setItem("theme", "light");

    }

    else{
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        toggle_icon.src = "light.png";
        localStorage.setItem("theme", "dark");

    }
}



// Load the saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        toggle_icon.src = savedTheme === "dark" ? "light.png" : "dark.png";
    }
});





////// Time Greeting

const TimeGreeting = document.getElementById("Greeting");

const d = new Date();

const time = d.getHours();

if(time >= 0 && time < 12){

    TimeGreeting.innerHTML = "Good Morning";

}

else if( time >= 12 && time < 16){
    TimeGreeting.innerHTML = "Good Afternoon";
} 

else{
    TimeGreeting.innerHTML = "Good Evening";
}




////// write a task dialog

const add_task = document.getElementById("add-task");

const task_dialog_box = document.getElementById("add-task-dialogue");

const cancel_btn = document.getElementById("cancel-btn");

add_task.addEventListener("click", () => {

    if (!task_dialog_box.classList.contains("open")){
        task_dialog_box.style.display = "flex";
        task_dialog_box.classList.add("open");
        task_dialog_box.classList.remove("close");
    }


});


cancel_btn.addEventListener("click", () => {

    if(task_dialog_box.classList.contains("open")){
        task_dialog_box.classList.add("close");
        task_dialog_box.classList.remove("open");
    }


}); 




////// append and save btn

const save_btn = document.getElementById("save-btn");	


save_btn.addEventListener("click", () =>{
    
    const parent_container = document.getElementById("main-container");

    const Task_Description = document.getElementById("Task-Description").value;

    const Task_Name = document.getElementById("TaskName").value;
        


    if(Task_Description == "" || Task_Name == ""){

        alert("please fill in the description");
        return;

    }


    else{

        ///// create a child conatiner, add class and append to parent

        const child_container = document.createElement("div");
        child_container.classList.add("child-container");
        parent_container.appendChild(child_container);
       


        //create text divs and add class and append to child

        const text_divs = document.createElement("div");
        text_divs.classList.add("text-divs");
        child_container.appendChild(text_divs);
        


        //// create Main texts and append to child

        const Main_task = document.createElement("p");
        Main_task.textContent = Task_Name.trim();
        Main_task.classList.add("Main-task");
        text_divs.appendChild(Main_task);


        //// create sub texts and do same thing

        const Sub_task = document.createElement("p");
        Sub_task.textContent = Task_Description.trim();
        Sub_task.classList.add("Sub-task");
        text_divs.appendChild(Sub_task);




        //// create icondiv

        const icon_container = document.createElement("div");
        icon_container.classList.add("icon-divs");
        child_container.appendChild(icon_container);



        //// create edit icons

        const edit_icon = document.createElement("button");
        edit_icon.classList.add("edit");
        edit_icon.innerHTML = "Edit";
        icon_container.appendChild(edit_icon);
        edit_icon.addEventListener("click", () => editTask(Main_task, Sub_task));



        //create delete button


        const delete_icon = document.createElement("button");
        delete_icon.classList.add("Delete");
        delete_icon.innerHTML = "Delete";
        icon_container.appendChild(delete_icon);
        delete_icon.addEventListener("click", () => deleteTask(child_container));
    

        //// clear dispaly after creation

        document.getElementById("TaskName").value = "";
        document.getElementById("Task-Description").value = "";


        if (!task_dialog_box.classList.contains("open")){
            task_dialog_box.style.display = "flex";
            task_dialog_box.classList.add("open");
            task_dialog_box.classList.remove("close");
        }

        else{
            task_dialog_box.classList.add("close");
            task_dialog_box.classList.remove("open");
        }

         saveTask();


    }

    

}); 



///// callbacl edit function
function editTask(mainTaskElement, subTaskElement){

    const newTaskName = prompt("Edit task name:", mainTaskElement.textContent);
    const newTaskDescription = prompt("Edit task description:", subTaskElement.textContent);
    if (newTaskName !== null) mainTaskElement.textContent = newTaskName;
    if (newTaskDescription !== null) subTaskElement.textContent = newTaskDescription;
};




// callback Function to handle deleting a task
function deleteTask(taskContainer) {
    taskContainer.remove();
}





function saveTask(){

    // Save data to local storage

    const taskData = {
        taskName: Task_Name,
        taskDescription: Task_Description,
    };
    
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    existingTasks.push(taskData);
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

}



// Load tasks from local storage when the page loads
window.addEventListener("load", () => {

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    existingTasks.forEach((taskData) => {

        const { taskName, taskDescription } = taskData;
        const parent_container = document.getElementById("main-container");


        // Create elements and display taskName and taskDescription as needed
        // For example:

        ///// create a child conatiner, add class and append to parent

        const child_container = document.createElement("div");
        child_container.classList.add("child-container");
        parent_container.appendChild(child_container);
    


        //create text divs and add class and append to child

        const text_divs = document.createElement("div");
        text_divs.classList.add("text-divs");
        child_container.appendChild(text_divs);
        


        //// create Main texts and append to child

        const Main_task = document.createElement("p");
        Main_task.textContent = taskName;
        Main_task.classList.add("Main-task");
        text_divs.appendChild(Main_task);



        //// create sub texts and do same thing

        const Sub_task = document.createElement("p");
        Sub_task.textContent = taskDescription;
        Sub_task.classList.add("Sub-task");
        text_divs.appendChild(Sub_task);




        //// create icondiv

        const icon_container = document.createElement("div");
        icon_container.classList.add("icon-divs");
        child_container.appendChild(icon_container);



        //// create edit icons

        const edit_icon = document.createElement("button");
        edit_icon.classList.add("edit");
        edit_icon.innerHTML = "Edit";
        icon_container.appendChild(edit_icon);
        edit_icon.addEventListener("click", () => editTask(Main_task, Sub_task));



        //create delete button


        const delete_icon = document.createElement("button");
        delete_icon.classList.add("Delete");
        delete_icon.innerHTML = "Delete";
        icon_container.appendChild(delete_icon);
        delete_icon.addEventListener("click", () => deleteTask(child_container));
    
    });
});


















