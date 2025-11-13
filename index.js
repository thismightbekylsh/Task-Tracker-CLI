//This program is a task tracker made to run in CLI enviroment. Read README.md to more information.

import fs from "fs";

const args = process.argv.slice(2);
const tasks = [];
const countTasks = tasks.length;

function isIdValid(id)
{
    if (!Number.isInteger(id) || id < 0 || id >= countTasks)
    {
        console.log("ID inválido.");
        return false;
    }
        
    return true;
}

function addTask(task)
{
    //Create a object for a new task
    const newTask = 
    {
        id: countTasks + 1,
        description: task,
        status: "todo",
        createdAt: new Date().toLocaleString(),
        updatedAt: "Never updated",
    }

    //Add the task to the main tasks array
    tasks.push(newTask);
}

function removeTask(id)
{   
    //Set the id to the array index value
    id--;

    //Check if the id is valid
    if(!isIdValid(id))
        return 2;

    //Remove the task based on its ID in the tasks array
    tasks.splice(id, 1);

    //Reorganize the tasks array
    tasks.forEach((task, index) => 
    {
        task.id = index + 1;
    })
}

function updateTasks(taskEdit, id)
{

    id--;
    //Check if the new description is valid
    if (typeof taskEdit !== "string")
    {
        console.log("Descrição inválida");
        return 3;
    }

    //Check if the id is valid
    if(!isIdValid(id))
        return 2;
    
    tasks[id].description = taskEdit;
    tasks[id].updatedAt = new Date().toLocaleString();
}

function listTasks()
{

}

//Check if there is function argument
if (!args[0])
{
    console.log("Usage error: node index.js {add|remove|update|list} {id} {argument}")
    process.exit(1);
}

