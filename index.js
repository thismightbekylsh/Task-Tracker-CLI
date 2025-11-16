//This program is a task tracker made to run in CLI enviroment. Read README.md to more information.
/*
Error 1 - Invalid or missing id
Error 2 - Invalid or missing description
Error 3 - Invalid status
Error 4 - Missing or invalid option
Error 5 - Data saving error
*/

import fs, { readFile, readFileSync } from "fs";

//Create a variable for JSON file path
const jsonFilePath = "data.json";

//Check if json file is created
if(!fs.existsSync(jsonFilePath))
{
    console.log("JSON file not found. Creating a new one");
    fs.writeFileSync("data.json", "[]", (err) => {
        if (err)
        {
            console.error('Error writing JSON file:', err);
        }
        else 
        {
            console.log('JSON file created successfully: data.json');
        }
    })
}

//Gets args, tasks data and count the size of tasks
const args = process.argv.slice(2);

const objData = readFileSync(jsonFilePath, "utf-8");
const tasks = JSON.parse(objData);

const countTasks = tasks.length;

function isIdValid(id)
{
    //Change id to it's index value
    id -= 1;

    //Check if it's a invalid id
    if (!Number.isInteger(id) || id < 0 || id >= countTasks)
    {
        return false;
    }
    
    //Return true if it's valid
    return true;
}

function isStatusValid(status)
{
    //Valid status values
    const validStatus = 
    {
        undefined: true,
        "todo": true,
        "done": true,
        "in-progress": true,
    }

    //Return true of false based on the status value
    return validStatus[status];
}

function addTask(task)
{
    //Check if there is a description
    if(task === undefined)
    {
        console.log("Description missing, correct use: node index.js add {description}.");
        process.exit(2);
    }

    //Check if the description is valid
    if (typeof task !== "string")
    {
        console.log("Invalid Description: Please provide a valid one.");
        process.exit(2);
    }

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

    //Message if it was sucessfull and return true
    console.log("Task sucessfully added.");
    return true;
}

function removeTask(id)
{
    //Check if the id is valid
    if(!isIdValid(id))
    {
        console.log("Invalid ID: Please provide a valid one.");
        process.exit(1);
    }

    //Remove the task based on its ID in the tasks array
    tasks.splice(id - 1, 1);

    //Reorganize the tasks array
    tasks.forEach((task, index) => 
    {
        task.id = index + 1;
    })

    //Message if it was sucessfull and return true
    console.log("Task sucessfully removed.");
    return true;
}

function updateTasks(id, taskEdit)
{
    //Check if the new description is valid
    if (typeof taskEdit !== "string")
    {
        console.log("Invalid Description: Please provide a valid one.");
        process.exit(2);
    }

    //Check if the id is valid
    if(!isIdValid(id))
    {   
        console.log("Invalid ID: Please provide a valid one.");
        process.exit(1);
    }

    //Changes the task description and the update date
    tasks[id - 1].description = taskEdit;
    tasks[id - 1].updatedAt = new Date().toLocaleString();

    //Message if it was sucessfull and return true
    console.log("Task sucessfully updated.");
    return true;
}

function listTasks(status)
{
    //Check if status is valid
    if (!isStatusValid(status))
    {
        console.log("Invalid Status: Please provide a valid one.");
        process.exit(3);
    }

    //Print the information
    console.log("ID\tTask\tStatus\tCreation date\tLast update\n");

    //Print each task based on it's choosen status
    tasks.forEach((task) => 
    {
            if (task.status != status && status !== undefined)
                return;

        const msg =
        task.id + "\t" + 
        task.description + "\t" + 
        task.status + "\t" + 
        task.createdAt + "\t" + 
        task.updatedAt;

        console.log(msg);
    })
}

function markTaskAs(id, status)
{   

    //Check if the id is valid
    if(!isIdValid(id))
    {
        console.log("Invalid ID: Please provide a valid one.");
        process.exit(1);
    }

    //Changes task status
    tasks[id - 1].status = status;

    //Message if it was sucessfull and return true
    console.log("Task sucessfully marked as " + status + ".");
    return true;
}

//Check if there is function argument
if (!args[0])
{
    console.log("Usage error: node index.js {add|remove|update|list|mark-done|mark-in-progress} {id} {argument}.");
    process.exit(4);
}

//Options for args
const options = 
{
    "add": () => addTask(args[1]),
    "remove": () => removeTask(args[1]),
    "update": () => updateTasks(args[1], args[2]),
    "list": () => listTasks(args[1]),
    "mark-done": () => markTaskAs(args[1], "done"),
    "mark-in-progress": () => markTaskAs(args[1], "in-progress")
}

//Option validation
if (!options[args[0]]) 
{
    console.log("Invalid option.");
    process.exit(4);
}

//Get if the function returned true or false (True means that it was sucessfull and needs to be saved)
const result = options[args[0]]();

//Save function
const save = () => 
{
    const jsonData = JSON.stringify(tasks);
    fs.writeFile('data.json', jsonData, (err) => {
        if (err)
            console.error('Error saving data in JSON file:', err);
        else 
        {
            console.log("Error saving data")
            process.exit(5);
        }
})
}

//Get if should save in current operation
const shouldSave =
{
    "add": true,
    "remove": true,
    "update": true,
    "mark-done": true,
    "mark-in-progress": true
};

// Saves if operation needs it
if (shouldSave[args[0]] && result === true) {
    save();
}