
let task = document.getElementById('add-task');
let listOfTasks = document.getElementById('ss');
let addTaskButton = document.querySelector('button');

addTaskButton.addEventListener('click', () => {
    if(task.value === '') {
        alert("Please Write Something to add !......");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = task.value;
        listOfTasks.appendChild(li);

        let span = document.createElement('span');
        li.appendChild(span);
    }
    task.value = '';
    saveTask();
});

listOfTasks.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('task-completed'); // toggle class name
        saveTask();
    }
    else if(e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        saveTask();
    }
});


let saveTask = () => {
    localStorage.setItem('data', listOfTasks.innerHTML);
}
let getTask = () => {
    listOfTasks.innerHTML = localStorage.getItem('data');
}

getTask();