
const get_inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(get_inputBox.value === ''){
        alert('You must write something!');
    }else{
        let createLi = document.createElement('li');
        createLi.innerHTML = get_inputBox.value;
        listContainer.appendChild(createLi);
        let spanElement = document.createElement('span');
        spanElement.innerHTML = "\u00d7";
        createLi.appendChild(spanElement);

    }
    get_inputBox.value = '';
    saveTodoList();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveTodoList();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveTodoList();
    }
}, false);

function saveTodoList(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();