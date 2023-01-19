import checkComplete from "./Componentes/checkComplete.js";
import deleteIcon from "./Componentes/deleteIcon.js";

// FUNCIONES -------------------------------------
const agregarFn = (evento) => {
    evento.preventDefault(); 
    const input  = document.querySelector("[data-form-input]")
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement('li');
    task.classList.add("card")
    input.value = "";
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
  };


// VARIABLES ---------------------------------------
const btn = document.querySelector("[data-form-btn]");
btn.addEventListener("click", agregarFn);
