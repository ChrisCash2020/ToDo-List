import mainStyles from './index.css';
let myProjects;
if (localStorage.getItem('myProjects') === null) {
  myProjects = [];
} else {
  myProjects = JSON.parse(localStorage.getItem('myProjects'));
}
const btns = document.querySelectorAll('.btns');
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

function storeTaskInLocalStorage(list) {
  myProjects.push(list);
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
function getBooks() {
  myProjects.forEach((list) => {
    Object.setPrototypeOf(list, List); //since it was passed through the json it lost its object class methods and I need to add them again
    list.prototype.addBookToLibrary(list);
  });
}
class List {
  constructor(title) {
    this.title = title;
  }
  addListToProject(x) {
    if (x === undefined) x = this;
    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    let section = document.querySelector('.section');
    let projectContainer = document.querySelector('.project-container');
    let projectBtn = document.createElement('h3');
    projectBtn.classList.add('btns', 'active');
    let removeBtn = document.createElement('button');
    let removeIcon = document.createElement('i');
    removeIcon.classList.add('fas', 'fa-plus');
    removeBtn.classList.add('remove');
    removeBtn.appendChild(removeIcon);
    projectBtn.textContent = `<i class="fas fa-tasks"></i> ${x.title} ${removeBtn}`;
    let projectTab = document.createElement('div');
    projectTab.classList.add('tab');
    let tabSectionTitle = document.createElement('h1');
    let tabAddTasks = document.createElement('h3;');
    tabAddTasks.classList.add('add-task');
    tabAddTasks.textContent = `<i class="fas fa-plus"></i> &nbsp&nbspAdd-Task`;
    tabSectionTitle.classList.add('section-title');
    projectTab.appendChild(tabSectionTitle);
    projectTab.appendChild(tabAddTasks);
    projectContainer.appendChild(projectBtn);
    section.appendChild(projectTab);
    removeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      removeTaskFromLocalStorage(x);
      localStorage.setItem('myProjects', JSON.stringify(myProjects));
      projectBtn.remove();
      projectContainer.remove();
    });
  }
}
