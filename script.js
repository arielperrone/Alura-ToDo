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
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    titleTask.classList.add('task');
    titleTask.innerText = value;
    const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.appendChild(taskContent);
    list.appendChild(task);
    list.appendChild(content);
  };


// VARIABLES ---------------------------------------
const btn = document.querySelector("[data-form-btn]");
btn.addEventListener("click", agregarFn);

const checkComplete = () => {
 const i = document.createElement("i");
 i.classList.add("far");
 i.classList.add("fa-check-square");
 i.classList.add("icon");
 return i;
};

