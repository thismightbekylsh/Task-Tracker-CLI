# Task Tracker CLI

This project was made for education purposes with [roadmap.sh](https://roadmap.sh) instructions. The details can be viewed in [project details](https://roadmap.sh/projects/task-tracker). 

This was built as a command-line tool to manage tasks quickly in terminal-based environments like Visual Studio Code. It's a lightweight full task tracking app that stores and maintains user data.

## Summary

- <a href = "#Features">Features</a>
- <a href = "#Tools-&-Technologies">Tools & Technologies</a>
- <a href = "#Commands">Commands</a>
- <a href = "#How-to-use">How to use</a>
- <a href = "#Author">Author</a>

## Features
- [x] Add tasks.
- [x] Remove tasks.
- [x] Update tasks description.
- [x] Mark task current status (done, in-progress).
- [x] List all tasks and filter by status.
- [x] Save data in JSON file.
- [x] Error management.

## Tools & Technologies

- [Visual Studio Code](https://code.visualstudio.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en)

<img src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" style = "width: 30; margin-left: 26">
<img src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style = "width: 30; margin-left: 7; margin-top: 4">
<img src = https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg style = "width: 30; margin-left: 5">

## Commands

```
- add {description}
- remove {id}
- update {id} {description}
- list {status}
- mark-done {id}
- mark-in-progress {id}
```

**Note**: Leave the `list` status argument empty to show all tasks

## How to use

1. Download and unzip the project files.
2. Open cmd and navigate to the directory where index.js is located.
3. Run "node index.js {option} {id} {argument}".

### Example

```bash
#Add a new task
node index.js add "Go to school"

#Update the task description
node index.js update 1 "Go to school tomorrow"

#Mark it as in progress
node index.js mark-in-progress 1

#List the current tasks
node index.js list
```

## Author

<table style="border-spacing: 0">
    <tr>
        <td>
            <img src = "https://i.imgur.com/0OAePz2.jpeg" style = "width: 150; border-radius: 50%; object-fit: cover" alt = "Kaylan Barbosa Sampaio">
        </td>
        <td>
            <h4 style = "margin-bottom: 6">Kaylan Barbosa Sampaio - Author</h4>
            <a href = "https://www.linkedin.com/in/kaylansampaio/"><img href = "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png"><img src = "https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" style = "width: 60"></a>
        </td>
    </tr>
</table>