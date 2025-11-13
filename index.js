//This program is a task tracker made to run in CLI enviroment. Read README.md to more information.

import fs from "fs";

//Gets args, tasks and count the size of tasks
const args = process.argv.slice(2);
const tasks = [];
const countTasks = tasks.length;

function isIdValid(id)
{
    //Change id to it's index value
    id -= 2;

    //Check if it's a valid id
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

    //Check if the id is valid
    if(!isIdValid(id))
        return 2;

    //Remove the task based on its ID in the tasks array
    tasks.splice(id - 2, 1);

    //Reorganize the tasks array
    tasks.forEach((task, index) => 
    {
        task.id = index + 1;
    })
}

function updateTasks(taskEdit, id)
{
    
    //Check if the new description is valid
    if (typeof taskEdit !== "string")
    {
        console.log("Descrição inválida");
        return 3;
    }

    //Check if the id is valid
    if(!isIdValid(id))
        return 2;
    
    tasks[id - 2].description = taskEdit;
    tasks[id - 2].updatedAt = new Date().toLocaleString();
}

function listTasks(status)
{
    //Check if status is valid
    const validStatus = 
    {
        "todo": true,
        "done": true,
        "in-progress": true,
    }

    if (!validStatus[status])
    {
        console.log("Invalid Status: Please provide a valid one.")
        return 4;
    }

    //Print the information
    console.log("ID\tTarefa\tStatus\tData de Criação\tData de Atualização\n")

    //Print each task based on it's choosen status
    tasks.forEach((task) => 
    {

        if (task.status != status && status !== undefined)
            return

        const msg =
        task.id + "\t" + 
        task.description + "\t" + 
        task.status + "\t" + 
        task.createdAt + "\t" + 
        task.updatedAt;

        console.log(msg);
    })
}

//Check if there is function argument
if (!args[0])
{
    console.log("Usage error: node index.js {add|remove|update|list} {id} {argument}")
    process.exit(1);
}