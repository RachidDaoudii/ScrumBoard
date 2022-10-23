//variable des information
let feature = document.getElementById("feature");
let bug = document.getElementById("bug");
let title = document.getElementById("title");
let priority = document.getElementById("Priority");
let Status = document.getElementById("status");
let date = document.getElementById("date");
let description = document.getElementById("description");
//variable button
let submit = document.getElementById('submit');
let _delete = document.getElementById('delete');
//variable number tasks column
let count_to = document.getElementById('to-do-tasks-count');
let count_pro = document.getElementById('in-progress-tasks-count');
let count_do = document.getElementById('done-tasks-count');
//variable de column
let todo = document.getElementById('to-do-tasks');
let progress = document.getElementById('in-progress-tasks');
let done = document.getElementById('done-tasks');
//variable change bottun save - update
let mode = 'save';
//variable stocker valeur de button selectionner update delate
let index ;
//hidden  button Delete
_delete.style.display = 'none';

// variable count
let count_todo =0;
let count_progress =0;
let count_done =0;
let icons;

//function Ajouter Task
function Ajouter(){
    //create ob task
    let tasks = {
        title : title.value,
        type : feature.checked? "Feature" : "Bug",
        priority : priority.value,
        status : Status.value,
        date : date.value,
        description : description.value
    };

    //ajouter un task
    if(mode == 'save'){
        data.push(tasks);
        clearinput();
        deleteTasks();
        Afficher();
    }

    //Modifier un task
    else{
        data[index] = tasks;
        clearinput();
        submit.innerHTML = 'save';
        mode = 'save';
        deleteTasks();
        Afficher();
    }
}

//vider les input
function clearinput(){
    title.value = '';
    feature.checked = true;
    priority.selected = 0;
    Status.selected = 0;
    date.value = 'jj/mm/aaaa';
    description.value = '';
}

//function Afficher les tasks
function Afficher(){
    var table;
    for(let i=0; i<data.length;i++){
        if(data[i].status === 'To Do'){
            icons = "bx-help-circle";
            table = document.getElementById('to-do-tasks');
            count_todo += 1;
            count_to.innerText = count_todo;
        }else if(data[i].status === 'In Progress'){
            icons = "bx-loader-alt";
            table = document.getElementById('in-progress-tasks');
            count_progress+=1;
            count_pro.innerText=count_progress;
        }else if(data[i].status === 'Done'){
            table = document.getElementById('done-tasks');
            icons = "bx-check-circle";
            count_done+=1;
            count_do.innerText=count_done;
        }
        table.innerHTML += `
        <button onclick="update(${i})" id="${i}" class="task w-100 bg-white bg-white border-0 border-secondary border-bottom d-flex" data-bs-toggle="modal" data-bs-target="#Modal">
            <div class="fs-2">
                <i class='bx ${icons}' style='color:#00d68a'></i> 
            </div>
            <div class="p-2 text-start">
                <div class="fw-bold">${data[i].title}</div>
                <div class="pt-1">
                    <div class="text-secondary">#${i+1} created in ${data[i].date}</div>
                    <div class="" title="${data[i].description}">${data[i].description.slice(0,80)}...</div>
                </div>
                <div class="pt-1">
                    <span class="p-1 btn btn-primary border border-0">${data[i].priority}</span>
                    <span class="p-1 btn btn-secondary btn-sm border border-0 text-black">${data[i].type}</span>
                </div>
            </div>
        </button>`;
    }
}

function deleteTasks(){
    document.getElementById('to-do-tasks').innerHTML = "";
    document.getElementById('in-progress-tasks').innerHTML = "";
    document.getElementById('done-tasks').innerHTML = "";

    count_todo = count_progress = count_done = 0;
    count_to.innerText = count_todo;
    count_pro.innerText=count_progress;
    count_do.innerText=count_done;
}

//Afficher tasks 
Afficher();

//function RadioButton checked
function checkradio(i){
    if(data[i].type == 'Feature'){
        feature.checked = true;

    }else{
        bug.checked = true;
    }
}

//function Modifier 
function update(i){
    index = i;
    title.value = data[i].title;
    checkradio(i)
    priority.value = data[i].priority;
    Status.value = data[i].status;
    date.value = data[i].date;
    description.value = data[i].description;
    submit.innerHTML = 'update';
    _delete.style.display = 'block';
    mode = 'update';
}

// function Delete 
function delete_task() {
    data.splice(index,1);
    deleteTasks();
    Afficher();
}

function add(){
    _delete.style.display = 'none';
    submit.innerHTML = 'Save';
    clearinput()
}