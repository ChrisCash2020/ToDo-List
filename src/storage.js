import { Task, Project } from './classObj.js';
let myProjects;
if (localStorage.getItem('myProjects') === null) {
  myProjects = [];
} else {
  myProjects = JSON.parse(localStorage.getItem('myProjects'));
}
function storItemInLS(item, myItem, string) {
  myItem.push(item);
  localStorage.setItem(`${string}`, JSON.stringify(myItem));
}
function removeItemInLS(listItem, myItem, string) {
  myItem.map((element, index) => {
    if (element.title == listItem.title) {
      myItem.splice(index, 1);
    }
  });
  localStorage.setItem(`${string}`, JSON.stringify(myItem));
}
function removeTaskInLS(itemTitle) {
  myProjects.forEach((project) => {
    let myTasks = project.tasks;
    myTasks.map((element, index) => {
      if (element.taskTitle === itemTitle) {
        myTasks.splice(index, 1);
      }
    });
  });
  localStorage.setItem(`myProjects`, JSON.stringify(myProjects));
}
function getProjects() {
  myProjects.forEach((project) => {
    Object.setPrototypeOf(project, Project);
    project.prototype.addItem(project);
    let myTasks = project.tasks;
    myTasks.forEach((task) => {
      Object.setPrototypeOf(task, Task);
      task.prototype.addItem(task);
    });
  });
}
document.addEventListener('DOMContentLoaded', getProjects);

export {
  myProjects,
  storItemInLS,
  removeItemInLS,
  removeTaskInLS,
  getProjects,
};
