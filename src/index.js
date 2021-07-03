import mainStyles from './index.css';
let myProjects;
if (localStorage.getItem('myProjects') === null) {
  myProjects = [];
} else {
  myProjects = JSON.parse(localStorage.getItem('myProjects'));
}
class Task {
  constructor(taskTitle, date, taskIndex, projectTitle) {
    (this.taskTitle = taskTitle),
      (this.date = date),
      (this.taskIndex = taskIndex),
      (this.projectTitle = projectTitle);
  }
  addItem(x) {
    if (x === undefined) x = this;
    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    let taskItems = document.querySelectorAll('.task-items');
    let h3 = document.createElement('h3');
    let todayH3 = document.createElement('h3');
    let thisWeekH3 = document.createElement('h3');
    h3.classList.add('special');
    let theTitle = document.createElement('div');
    let theText = document.createElement('i');
    theText.textContent = `${x.taskTitle}`;
    let theDate = document.createElement('i');
    const year = x.date.split('-')[0];
    const month = x.date.split('-')[1];
    const day = x.date.split('-')[2];
    theDate.textContent = `${month}/${day}/${year}`;
    let removeIcon = document.createElement('i');
    removeIcon.classList.add('far', 'fa-circle', 'remove');
    theTitle.appendChild(removeIcon);
    theTitle.appendChild(theText);
    h3.appendChild(theTitle);
    h3.appendChild(theDate);
    removeIcon.addEventListener('click', (e) => {
      e.preventDefault();
      removeTaskInLS(x.taskTitle);
      localStorage.setItem('myProjects', JSON.stringify(myProjects));
      h3.remove();
      todayH3.remove();
      thisWeekH3.remove();
    });
    taskItems[x.taskIndex].appendChild(h3);
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let dd2 = String(today.getDate() + 7).padStart(2, '0');
    today = mm + '/' + dd + '/' + yyyy;
    let nxtWeek = mm + '/' + dd2 + '/' + yyyy;
    console.log(nxtWeek);
    console.log(today);
    if (today === theDate.textContent) {
      todayH3.classList.add('special');
      let theTitle = document.createElement('div');
      let theText = document.createElement('i');
      theText.textContent = `${x.taskTitle} (${x.projectTitle})`;
      let theDate = document.createElement('i');
      const year = x.date.split('-')[0];
      const month = x.date.split('-')[1];
      const day = x.date.split('-')[2];
      theDate.textContent = `${month}/${day}/${year}`;
      let removeIcon = document.createElement('i');
      removeIcon.classList.add('far', 'fa-circle', 'remove');
      theTitle.appendChild(removeIcon);
      theTitle.appendChild(theText);
      todayH3.appendChild(theTitle);
      todayH3.appendChild(theDate);
      removeIcon.addEventListener('click', (e) => {
        e.preventDefault();
        removeTaskInLS(x.taskTitle);
        localStorage.setItem('myProjects', JSON.stringify(myProjects));
        h3.remove();
        todayH3.remove();
        thisWeekH3.remove();
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
      thisWeekH3.classList.add('special');
      let theTitle = document.createElement('div');
      let theText = document.createElement('i');
      theText.textContent = `${x.taskTitle} (${x.projectTitle})`;
      let theDate = document.createElement('i');
      const year = x.date.split('-')[0];
      const month = x.date.split('-')[1];
      const day = x.date.split('-')[2];
      theDate.textContent = `${month}/${day}/${year}`;
      let removeIcon = document.createElement('i');
      removeIcon.classList.add('far', 'fa-circle', 'remove');
      theTitle.appendChild(removeIcon);
      theTitle.appendChild(theText);
      thisWeekH3.appendChild(theTitle);
      thisWeekH3.appendChild(theDate);
      removeIcon.addEventListener('click', (e) => {
        e.preventDefault();
        removeTaskInLS(x.taskTitle);
        h3.remove();
        todayH3.remove();
        thisWeekH3.remove();
        localStorage.setItem('myProjects', JSON.stringify(myProjects));
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
    let projectText = document.createElement('h4');
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
function addItemForm(item, itemForm) {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    item.classList.toggle('hide');
    itemForm.classList.toggle('hide');
  });
}
function cancelItemForm(
  cancelItem,
  item,
  itemForm,
  itemFormTitle,
  itemFormDate
) {
  cancelItem.addEventListener('click', (e) => {
    e.preventDefault();
    item.classList.toggle('hide');
    itemForm.classList.toggle('hide');
    itemFormTitle.classList.remove('invalid');
    if (itemFormDate != undefined) {
      itemFormDate.classList.remove('invalid');
    }
    itemForm.reset();
  });
}
const array = ['Today', 'This week'];
function submitProjectForm(submitItem, itemFormTitle, item, itemForm) {
  submitItem.addEventListener('click', (e) => {
    e.preventDefault();
    let titleVal = itemFormTitle.value;
    let test = myProjects.some(
      (element) => element.title === itemFormTitle.value
    );
    let test1 = array.some((element) => element === itemFormTitle.value);
    if (
      (titleVal.length > 0 && test === false && test1 === false) ||
      (myProjects.length === 0 && titleVal.length > 0 && test1 === false)
    ) {
      itemFormTitle.classList.remove('invalid');
      let newItem = new Project(itemFormTitle.value);
      storItemInLS(newItem, myProjects, 'myProjects');
      itemForm.reset();
      item.classList.toggle('hide');
      itemForm.classList.toggle('hide');
      return newItem.addItem();
    } else {
      itemFormTitle.classList.add('invalid');
    }
  });
}
function submitTaskForm(
  submitItem,
  item,
  itemForm,
  itemFormTitle,
  itemFormDate,
  itemElement,
  myItem,
  projectTitle
) {
  submitItem.addEventListener('click', (e) => {
    e.preventDefault();
    let dateVal = itemFormDate.value;
    let titleVal = itemFormTitle.value;
    let test = myItem.some(
      (element) => element.taskTitle === itemFormTitle.value
    );
    let test1 = array.some((element) => element === itemFormTitle.value);
    if (
      (titleVal.length > 0 &&
        test === false &&
        test1 === false &&
        dateVal.length > 0) ||
      (myItem.length === 0 &&
        titleVal.length > 0 &&
        dateVal.length > 0 &&
        test1 === false)
    ) {
      let newTaskItem = new Task(
        itemFormTitle.value,
        itemFormDate.value,
        itemElement,
        projectTitle
      );
      itemForm.reset();
      myItem.push(newTaskItem);
      item.classList.toggle('hide');
      itemForm.classList.toggle('hide');
      newTaskItem.addItem();
      localStorage.setItem('myProjects', JSON.stringify(myProjects));
    } else {
      if (titleVal.length <= 0) {
        itemFormTitle.classList.add('invalid');
      } else if (titleVal.length > 0 && test === true) {
        itemFormTitle.classList.add('invalid');
      } else if (titleVal.length > 0 && test === false) {
        itemFormTitle.classList.remove('invalid');
      }
      if (dateVal.length <= 0) {
        itemFormDate.classList.add('invalid');
      } else if (dateVal.length > 0) {
        itemFormDate.classList.remove('invalid');
      }
    }
  });
}
let addProjectBtn = document.querySelector('.add-project');
let projectForm = document.querySelector('.project-form');
let cancelProjectBtn = document.querySelector('.project-form #cancel-submit');
let submitProjectBtn = document.querySelector('.project-form #submit');
let formProjectTitle = document.querySelector('.project-form #title');
addItemForm(addProjectBtn, projectForm);
submitProjectForm(
  submitProjectBtn,
  formProjectTitle,
  addProjectBtn,
  projectForm
);
cancelItemForm(cancelProjectBtn, addProjectBtn, projectForm, formProjectTitle);
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
      } else {
        content.style.display = 'none';
      }
    });
  });
});
