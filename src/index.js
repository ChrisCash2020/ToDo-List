import mainStyles from './index.css';
let myProjects;
if (localStorage.getItem('myProjects') === null) {
  myProjects = [];
} else {
  myProjects = JSON.parse(localStorage.getItem('myProjects'));
}
let myTasks;
if (localStorage.getItem('myTasks') === null) {
  myTasks = [];
} else {
  myTasks = JSON.parse(localStorage.getItem('myTasks'));
}
class Task {
  constructor(title, date, taskIndex) {
    (this.title = title), (this.date = date), (this.taskIndex = taskIndex);
  }
  addItem(x) {
    if (x === undefined) x = this;
    localStorage.setItem('myTasks', JSON.stringify(myTasks));
    let h3 = document.createElement('h3');
    h3.classList.add('special');
    let theTitle = document.createElement('div');
    let theText = document.createElement('i');
    theText.textContent = `${x.title}`;
    let theDate = document.createElement('i');
    const day = x.date.split('-')[0];
    const month = x.date.split('-')[1];
    const year = x.date.split('-')[2];
    theDate.textContent = `${month}/${day}/${year}`;
    let removeIcon = document.createElement('i');
    removeIcon.classList.add('far', 'fa-circle', 'remove');
    theTitle.appendChild(removeIcon);
    theTitle.appendChild(theText);
    h3.appendChild(theTitle);
    h3.appendChild(theDate);
    removeIcon.addEventListener('click', (e) => {
      e.preventDefault();
      removeItemInLS(x, myTasks, 'myTasks');
      localStorage.setItem('myTasks', JSON.stringify(myTasks));
      h3.remove();
    });
    let taskItems = document.querySelectorAll('.task-items');
    console.log(taskItems);
    console.log(x.taskIndex);
    taskItems.forEach((task, task_i) => {
      if (task_i === x.taskIndex) {
        task.appendChild(h3);
      }
    });
  }
}
class Project {
  constructor(title) {
    this.title = title;
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
    tabAddTasks.innerHTML = `<i class="fas fa-plus"></i> &nbsp&nbspAdd task`;
    let tabForm = document.createElement('form');
    tabForm.classList.add('task-form', 'hide');
    tabForm.innerHTML = `<input type="text" name="title" placeholder="Task" id="title" />
            <p>*Title required & No duplicates*</p>
            <input type="date" placeholder="Add date" id="date" />
            <p>*Task Date is required*</p>
            <div class="btn-container">
              <input type="submit" value="Add" id="submit" />
              <input type="submit" value="Cancel" id="cancel-submit" />
            </div>`;
    tabSectionTitle.classList.add('section-title');
    projectTab.appendChild(tabSectionTitle);
    projectTab.appendChild(tabTaskItems);
    projectTab.appendChild(tabAddTasks);
    projectTab.appendChild(tabForm);
    projectContainer.appendChild(projectBtn);
    section.appendChild(projectTab);
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
const array = ['Inbox', 'Today', 'This week'];
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
  itemFormTitle,
  mainitem,
  itemForm,
  itemFormDate,
  index
) {
  submitItem.addEventListener('click', (e) => {
    e.preventDefault();
    let dateVal = itemFormDate.value;
    let titleVal = itemFormTitle.value;
    let test = myTasks.some((element) => element.title === itemFormTitle.value);
    let test1 = array.some((element) => element === itemFormTitle.value);
    if (
      (titleVal.length > 0 &&
        test === false &&
        test1 === false &&
        dateVal.length > 0) ||
      (myTasks.length === 0 &&
        titleVal.length > 0 &&
        dateVal.length > 0 &&
        test1 === false)
    ) {
      let newTaskItem = new Task(
        itemFormTitle.value,
        itemFormDate.value,
        index
      );
      storItemInLS(newTaskItem, myTasks, 'myTasks');
      itemForm.reset();
      mainitem.classList.toggle('hide');
      itemForm.classList.toggle('hide');
      return newTaskItem.addItem();
    } else {
      if (titleVal.length <= 0) {
        itemFormTitle.classList.add('invalid');
      } else if (titleVal.length > 0) {
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
let addTaskBtn = document.querySelectorAll('.add-task');
let taskForm = document.querySelectorAll('.task-form');
let cancelTaskBtn = document.querySelectorAll('.task-form #cancel-submit');
let submitTaskBtn = document.querySelectorAll('.task-form #submit');
let formTaskTitle = document.querySelectorAll('.task-form #title');
let formTaskDate = document.querySelectorAll('.task-form #date');
addTaskBtn.forEach((addTask, i) => {
  addItemForm(addTaskBtn[i], taskForm[i]);
  submitTaskForm(
    submitTaskBtn[i],
    formTaskTitle[i],
    addTaskBtn[i],
    taskForm[i],
    formTaskDate[i],
    i
  );
  cancelItemForm(
    cancelTaskBtn[i],
    addTaskBtn[i],
    taskForm[i],
    formTaskTitle[i],
    formTaskDate[i]
  );
});
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
function getProjects() {
  myProjects.forEach((project) => {
    Object.setPrototypeOf(project, Project);
    project.prototype.addItem(project);
  });
}
function getTasks() {
  myTasks.forEach((task) => {
    Object.setPrototypeOf(task, Task);
    task.prototype.addItem(task);
  });
}
document.addEventListener('DOMContentLoaded', getProjects);
document.addEventListener('DOMContentLoaded', getTasks);
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
let allProjectInput = document.querySelectorAll('.task-form > input');
