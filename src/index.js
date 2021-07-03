import mainStyles from './index.css';
import {
  addItemForm,
  cancelItemForm,
  submitProjectForm,
} from './formFunctions.js';
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
let logoBtn = document.querySelector('button');
let aside = document.querySelector('.aside');
let constContent = document.querySelector('.constant-content');
let projContent = document.querySelector('.project-container');
logoBtn.addEventListener('click', (e) => {
  aside.classList.toggle('aside-alter');
  constContent.classList.toggle('content-alter');
  projContent.classList.toggle('content-alter');
});
