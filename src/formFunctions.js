import {
  myProjects,
  storItemInLS,
  removeItemInLS,
  removeTaskInLS,
  getProjects,
} from './storage.js';
import { Task, Project } from './classObj.js';

function addItemForm(item, itemForm) {
  //a function to add anvent listener to the project form or any created task forms later on
  item.addEventListener('click', (e) => {
    e.preventDefault();
    //toggle is a good way to display and undisplay an item
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
  //instructions for when person backs out of form
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
//project and tasks need seperate functions because they won't work dynamically in the same function *dont know why
function submitProjectForm(submitItem, itemFormTitle, item, itemForm) {
  submitItem.addEventListener('click', (e) => {
    e.preventDefault();
    const array = ['Today', 'This week'];
    let titleVal = itemFormTitle.value;
    let test = myProjects.some(
      (element) => element.title === itemFormTitle.value
    );
    let test1 = array.some((element) => element === itemFormTitle.value);
    //need tests to prove they aren't duplicates or restricted words
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
    let array = ['Today', 'This week'];
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
      itemFormTitle.classList.remove('invalid');
      itemFormDate.classList.remove('invalid');

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
export { addItemForm, cancelItemForm, submitProjectForm, submitTaskForm };
