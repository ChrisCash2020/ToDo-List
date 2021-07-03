import {
  myProjects,
  storItemInLS,
  removeItemInLS,
  removeTaskInLS,
  getProjects,
} from './storage.js';
import { Task, Project } from './classObj.js';

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
function submitProjectForm(submitItem, itemFormTitle, item, itemForm) {
  submitItem.addEventListener('click', (e) => {
    e.preventDefault();
    const array = ['Today', 'This week', 'btns', 'active'];
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
