# Task Tracker CLI

This project was made for education purposes with [roadmap.sh](https://roadmap.sh) instructions. The details can be viewed in [project details](https://roadmap.sh/projects/task-tracker). 

This was built as a command-line tool to manage tasks quickly in terminal-based environments like Visual Studio Code. It's a lightweight full task tracking app that stores and maintains user data.

## Summary

- <a href = "#Instalation">Installation</a>
- <a href = "#Features">Features</a>
- <a href = "#Tools-&-Technologies">Tools & Technologies</a>
- <a href = "#Usage">Usage</a>
- <a href = "#Author">Author</a>

## Installation
1. Clone the directory.
2. Navigate to the task-tracker-cli folder.
3. Install all dependencies.
4. Run npm link to make the task-cli a global command on your system.

```cmd
git clone https://github.com/thismightbekylsh/Task-Tracker-CLI.git
cd Task-Tracker-CLI
npm install
npm link
```

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

<img src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width = "30"> <img src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width = "30"> <img src = https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg width = "30">

## Usage

### Add new task
```bash
task-cli add "Task description"
```

### Remove task
```bash
task-cli remove {id}
```

### Update task
```bash
task-cli update {id} "New task description"
```

### List tasks
```bash
task-cli list {status}
```
**Note**: Leave the `list` status argument empty to show all tasks

### Mark task as in-progress
```bash
task-cli mark-in-progress {id}
```

### Mark task as done
```bash
task-cli mark-done {id}
```

### Example

```bash
#Add a new task
task-cli add "Go to school"

#Update the task description
task-cli update 1 "Go to school tomorrow"

#Mark it as in progress
task-cli mark-in-progress 1

#List the current tasks
task-cli list
```

## Author


<img src = "https://i.imgur.com/0OAePz2.jpeg" width = "150" alt = "Kaylan Barbosa Sampaio">

<p><b>Kaylan Barbosa Sampaio - Author</b></p>
<a href = "https://www.linkedin.com/in/kaylansampaio/"><img href = "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png"><img src = "https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" width = "60"></a>