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
let addProjectBtn = document.querySelector('.add-project');
let projectForm = document.querySelector('.project-form');
let cancelProjectBtn = document.querySelector('#cancel-submit');
let submitProjectBtn = document.querySelector('#submit');
let formTitle = document.querySelector('#title');
class Project {
  constructor(title) {
    this.title = title;
  }
  addProjects(x) {
    if (x === undefined) x = this;
    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    let tabContainer = document.querySelector('.tab-container');
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
    let tabAddTasks = document.createElement('h3');
    tabAddTasks.classList.add('add-task');
    tabAddTasks.innerHTML = `<i class="fas fa-plus"></i> &nbsp&nbspAdd task`;
    tabSectionTitle.classList.add('section-title');
    projectTab.appendChild(tabSectionTitle);
    projectTab.appendChild(tabAddTasks);
    projectContainer.appendChild(projectBtn);
    tabContainer.appendChild(projectTab);
    removeIcon.addEventListener('click', (e) => {
      e.preventDefault();
      removeTaskFromLocalStorage(x);
      localStorage.setItem('myProjects', JSON.stringify(myProjects));
      projectBtn.remove();
    });
    let btns = document.querySelectorAll('.btns');
    console.log(btns);
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
addProjectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addProjectBtn.classList.toggle('hide');
  projectForm.classList.toggle('hide');
});
submitProjectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let titleVal = formTitle.value;
  if (titleVal.length > 0) {
    formTitle.classList.remove('invalid');
    let newProject = new Project(formTitle.value);
    storeTaskInLocalStorage(newProject);
    projectForm.reset();
    addProjectBtn.classList.toggle('hide');
    projectForm.classList.toggle('hide');
    return newProject.addProjects();
  } else {
    formTitle.classList.add('invalid');
  }
});
cancelProjectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addProjectBtn.classList.toggle('hide');
  projectForm.classList.toggle('hide');
  formTitle.classList.remove('invalid');
  projectForm.reset();
});
function storeTaskInLocalStorage(project) {
  myProjects.push(project);
  localStorage.setItem('myProjects', JSON.stringify(myProjects)); //seems Like i need to have this localstorage.setItem each time i alter the local storage
}
function removeTaskFromLocalStorage(listItem) {
  myProjects.map((element, index) => {
    if (element.title == listItem.title) {
      myProjects.splice(index, 1);
    }
  });
  localStorage.setItem('myProjects', JSON.stringify(myProjects));
}
function getProjects() {
  myProjects.forEach((project) => {
    Object.setPrototypeOf(project, Project); //since it was passed through the json it lost its object class methods and I need to add them again
    project.prototype.addProjects(project);
  });
}
document.addEventListener('DOMContentLoaded', getProjects);
let btns = document.querySelectorAll('.btns');
console.log(btns);
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
