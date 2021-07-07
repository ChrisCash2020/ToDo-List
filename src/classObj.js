import {
  addItemForm,
  cancelItemForm,
  submitTaskForm,
} from './formFunctions.js';
import { myProjects, removeItemInLS, removeTaskInLS } from './storage.js';
//created two classes one for projects and one for tasks
//the project class will need an array to store the elements created from the task class
class Task {
  constructor(taskTitle, date, taskIndex, projectTitle) {
    (this.taskTitle = taskTitle),
      (this.date = date),
      (this.taskIndex = taskIndex),
      (this.projectTitle = projectTitle);
  }
  addItem(x) {
    //theoretically there the tasks creation icon will need to be made three times if a cetain criteria is met
    if (x === undefined) x = this;
    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    let taskItems = document.querySelectorAll('.task-items');
    let h3 = document.createElement('h3');
    let todayH3 = document.createElement('h3');
    let thisWeekH3 = document.createElement('h3');
    let tempTitle = x.taskTitle;
    tempTitle = tempTitle.replace(/\s/g, '-');
    //im using classes to keep track of each project title and task title so i can alter them need be
    let tempProjTitle = x.projectTitle;
    tempProjTitle = tempProjTitle.replace(/\s/g, '-');
    h3.classList.add('special', `${tempTitle}`, `${tempProjTitle}`);
    //gonna add classes with the task title and project title
    //task title for deleting each task on a click
    //project title for deleting all the tasks associated with the project title
    let theTitle = document.createElement('div');
    let theText = document.createElement('i');
    theText.textContent = `${x.taskTitle}`;
    let theDate = document.createElement('i');
    const year = x.date.split('-')[0];
    const month = x.date.split('-')[1];
    const day = x.date.split('-')[2];
    theDate.textContent = `${month}/${day}/${year}`;
    let removeIcon = document.createElement('i');
    removeIcon.classList.add('fas', 'fa-minus', 'icon');
    theTitle.appendChild(removeIcon);
    theTitle.appendChild(theText);
    h3.appendChild(theTitle);
    h3.appendChild(theDate);
    removeIcon.addEventListener('click', (e) => {
      e.preventDefault();
      removeTaskInLS(x.taskTitle);
      localStorage.setItem('myProjects', JSON.stringify(myProjects));
      let allElements = document.querySelectorAll(`h3.${tempTitle}`);
      //all tasks are deleted if on is dynamically
      allElements.forEach((element) => element.remove());
    });
    taskItems[x.taskIndex].appendChild(h3);
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let dd2 = String(today.getDate() + 7).padStart(2, '0');
    today = mm + '/' + dd + '/' + yyyy;
    let nxtWeek = mm + '/' + dd2 + '/' + yyyy;
    //found technique to compare dates on geeks for geeks
    if (today === theDate.textContent) {
      todayH3.classList.add('special', `${tempTitle}`);
      let theTitle = document.createElement('div');
      let theText = document.createElement('i');
      theText.textContent = `${x.taskTitle} (${x.projectTitle})`;
      let theDate = document.createElement('i');
      const year = x.date.split('-')[0];
      const month = x.date.split('-')[1];
      const day = x.date.split('-')[2];
      theDate.textContent = `${month}/${day}/${year}`;
      let removeIcon = document.createElement('i');
      removeIcon.classList.add('fas', 'fa-minus', 'icon');
      theTitle.appendChild(removeIcon);
      theTitle.appendChild(theText);
      todayH3.appendChild(theTitle);
      todayH3.appendChild(theDate);
      removeIcon.addEventListener('click', (e) => {
        e.preventDefault();
        removeTaskInLS(x.taskTitle);
        localStorage.setItem('myProjects', JSON.stringify(myProjects));
        let allElements = document.querySelectorAll(`h3.${tempTitle}`);
        allElements.forEach((element) => element.remove());
      });
      taskItems[0].appendChild(todayH3);
    }
    let Date_to_check = `${month}/${day}/${year}`;
    let D_1 = today.split('/');
    let D_2 = nxtWeek.split('/');
    let D_3 = Date_to_check.split('/');
    var d1 = new Date(D_1[2], parseInt(D_1[1]) - 1, D_1[0]);
    var d2 = new Date(D_2[2], parseInt(D_2[1]) - 1, D_2[0]);
    var d3 = new Date(D_3[2], parseInt(D_3[1]) - 1, D_3[0]);
    if (d3 >= d1 && d3 <= d2) {
      thisWeekH3.classList.add('special', `${tempTitle}`);
      let theTitle = document.createElement('div');
      let theText = document.createElement('i');
      theText.textContent = `${x.taskTitle} (${x.projectTitle})`;
      let theDate = document.createElement('i');
      const year = x.date.split('-')[0];
      const month = x.date.split('-')[1];
      const day = x.date.split('-')[2];
      theDate.textContent = `${month}/${day}/${year}`;
      let removeIcon = document.createElement('i');
      removeIcon.classList.add('fas', 'fa-minus', 'icon');
      theTitle.appendChild(removeIcon);
      theTitle.appendChild(theText);
      thisWeekH3.appendChild(theTitle);
      thisWeekH3.appendChild(theDate);
      removeIcon.addEventListener('click', (e) => {
        e.preventDefault();
        removeTaskInLS(x.taskTitle);
        localStorage.setItem('myProjects', JSON.stringify(myProjects));
        let allElements = document.querySelectorAll(`h3.${tempTitle}`);
        allElements.forEach((element) => element.remove());
      });
      taskItems[1].appendChild(thisWeekH3);
    }
  }
}
class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  addItem(x) {
    if (x === undefined) x = this;
    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    let section = document.querySelector('.section');
    let projectContainer = document.querySelector('.project-container');
    let projectBtn = document.createElement('h3');
    projectBtn.classList.add('btns', 'active', 'project-div');
    let projectDiv = document.createElement('div');
    projectDiv.style.display = 'flex';
    projectDiv.style.flexDirection = 'row';
    projectDiv.style.alignItems = 'center';
    let removeIcon = document.createElement('i');
    let listIcon = document.createElement('i');
    listIcon.style.marginRight = '10px';
    let projectText = document.createElement('h5');
    projectText.style.fontSize = '1rem';
    removeIcon.classList.add('fas', 'fa-plus', 'remove');
    listIcon.classList.add('fas', 'fa-tasks');
    projectDiv.appendChild(listIcon);
    projectText.textContent = `${x.title}`;
    projectDiv.appendChild(listIcon);
    projectDiv.appendChild(projectText);
    projectBtn.appendChild(projectDiv);
    projectBtn.appendChild(removeIcon);
    let projectTab = document.createElement('div');
    projectTab.classList.add('tab');
    projectTab.style.display = 'none';
    let tabSectionTitle = document.createElement('h1');
    tabSectionTitle.textContent = `${x.title}`;
    let tabTaskItems = document.createElement('div');
    tabTaskItems.classList.add('task-items');
    let tabAddTasks = document.createElement('h3');
    tabAddTasks.classList.add('add-task');
    let plusIcon = document.createElement('i');
    plusIcon.classList.add('fas', 'fa-plus');
    let tabAddTasksText = document.createElement('p');
    tabAddTasksText.textContent = 'Add task';
    tabAddTasks.appendChild(plusIcon);
    tabAddTasks.appendChild(tabAddTasksText);
    let tabForm = document.createElement('form');
    tabForm.classList.add('task-form', 'hide');
    let tabFormTextInput = document.createElement('input');
    tabFormTextInput.type = 'text';
    tabFormTextInput.placeholder = 'Task';
    tabFormTextInput.id = 'title';
    tabForm.appendChild(tabFormTextInput);
    let textInputP = document.createElement('p');
    textInputP.textContent = '*Title required & No duplicates*';
    tabForm.appendChild(textInputP);
    let tabFormDateInput = document.createElement('input');
    tabFormDateInput.type = 'date';
    tabFormDateInput.placeholder = 'Add date';
    tabFormDateInput.id = 'date';
    tabForm.appendChild(tabFormDateInput);
    let dateInputP = document.createElement('p');
    dateInputP.textContent = '*Task Date is required*';
    tabForm.appendChild(dateInputP);
    let formBtnContainer = document.createElement('div');
    formBtnContainer.classList.add('btn-container');
    let formBtnContainerSubmit = document.createElement('input');
    formBtnContainerSubmit.type = 'Submit';
    formBtnContainerSubmit.value = 'Add';
    formBtnContainerSubmit.id = 'submit';
    formBtnContainer.appendChild(formBtnContainerSubmit);
    let formBtnContainerCancel = document.createElement('input');
    formBtnContainerCancel.type = 'Submit';
    formBtnContainerCancel.value = 'Cancel';
    formBtnContainerCancel.id = 'cancel-submit';
    formBtnContainer.appendChild(formBtnContainerCancel);
    tabForm.appendChild(formBtnContainer);
    tabSectionTitle.classList.add('section-title');
    projectTab.appendChild(tabSectionTitle);
    projectTab.appendChild(tabTaskItems);
    projectTab.appendChild(tabAddTasks);
    projectTab.appendChild(tabForm);
    projectContainer.appendChild(projectBtn);
    section.appendChild(projectTab);
    addItemForm(tabAddTasks, tabForm);
    cancelItemForm(
      formBtnContainerCancel,
      tabAddTasks,
      tabForm,
      tabFormTextInput,
      tabFormDateInput
    );
    removeIcon.addEventListener('click', (e) => {
      e.preventDefault();
      removeItemInLS(x, myProjects, 'myProjects');
      localStorage.setItem('myProjects', JSON.stringify(myProjects));
      let tempTitle = x.title;
      tempTitle = tempTitle.replace(/\s/g, '-');
      let allElements = document.querySelectorAll(`taks-items h3.${tempTitle}`);
      allElements.forEach((element) => element.remove());
      localStorage.setItem('myProjects', JSON.stringify(myProjects));
      projectBtn.remove();
      projectTab.remove();
    });
    let btns = document.querySelectorAll('.btns');
    const tabs = document.querySelectorAll('.tab');
    btns.forEach((btn, btn_i) => {
      btn.addEventListener('click', () => {
        btns.forEach((btn) => {
          btn.classList.remove('active');
          btn.classList.remove('color-change');
        });
        btn.classList.add('active');
        btn.classList.add('color-change');
        tabs.forEach((content, content_i) => {
          if (content_i == btn_i) {
            content.style.display = 'block';
            submitTaskForm(
              formBtnContainerSubmit,
              tabAddTasks,
              tabForm,
              tabFormTextInput,
              tabFormDateInput,
              btn_i,
              x.tasks,
              x.title
            );
          } else {
            content.style.display = 'none';
          }
        });
      });
    });
  }
}
export { Task, Project };
