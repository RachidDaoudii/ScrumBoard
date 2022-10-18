//variable global
//variable des information
let title = document.getElementById("title");
let feature = document.getElementById("feature");
let bug = document.getElementById("bug");
let priority = document.getElementById("Priority");
let Status = document.getElementById("status");
let date = document.getElementById("date");
let description = document.getElementById("description");
//variable button
let submit = document.getElementById('submit');
let _delete = document.getElementById('delete');
//variable column
let count_to = document.getElementById('to-do-tasks-count');
let count_pro = document.getElementById('in-progress-tasks-count');
let count_do = document.getElementById('done-tasks-count');

let mode = 'save';
let index ;
var pointer;

// load data 
window.localStorage.setItem("tasks", JSON.stringify(data));

//save in localStorage
if(localStorage.tasks !=null){
    data = JSON.parse(localStorage.tasks);
}
else{
    data = []
}

//Afficher tasks 
Afficher();

//hidden  button Delete
_delete.style.display = 'none';

//function Ajouter Task
function Ajouter(){
    //create ob task
    let tasks = {
        title : title.value,
        type : feature.checked? "feature" : "bug",
        priority : priority.value,
        status : Status.value,
        date : date.value,
        description : description.value
    };

    //ajouter un task
    if(mode == 'save'){
        data.push(tasks);
        localStorage.setItem('tasks', JSON.stringify(data) );
        clearinput();
        Afficher();
    }

    //Modifier un task
    else{
        data[index] = tasks;
        localStorage.setItem('tasks', JSON.stringify(data));
        clearinput();
        submit.innerHTML = 'save';
        mode = 'save';
        Afficher();
    }
}

//vider les input
function clearinput(){
    title.value = '';
    feature.checked = true;
    priority.value = 0;
    Status.value = 0;
    date.value = 'jj/mm/aaaa';
    description.value = '';
}

//function Afficher les tasks
function Afficher(){
    let todo ='';
    let progress ='';
    let done ='';
    // variable count
    let count_todo =0;
    let count_progress =0;
    let count_done =0;
    for(let i=0; i<data.length;i++){
    // document.getElementById('to-do-tasks').innerHTML = ''
    // document.getElementById('in-progress-tasks').innerHTML = ''
    // ocument.getElementById('done-tasks').innerHTML= ''
        if(data[i].status == 'To Do'){
            todo+= `
            <button onclick="update(${i});returnIndice(${i})" id="${i}" class="w-100 bg-white bg-white border-0 border-secondary border-bottom d-flex" data-bs-toggle="modal" data-bs-target="#Modal">
                <div class="fs-2">
                    <i class='bx bx-help-circle' style='color:#00d68a'></i> 
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
            document.getElementById('to-do-tasks').innerHTML = todo;
            count_todo+=1;
            count_to.innerText= count_todo;
        }
        else if(data[i].status == 'In Progress'){
            progress += `
            <button onclick="update(${i});returnIndice(${i})" id="${i}" class="w-100 bg-white bg-white border-0 border-secondary border-bottom d-flex" data-bs-toggle="modal" data-bs-target="#Modal">
                <div class="fs-2">
                    <i class='bx bx-loader-alt' style='color:#00d68a'></i> 
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
            document.getElementById('in-progress-tasks').innerHTML = progress;
            count_progress+=1;
            count_pro.innerText=count_progress;
        }
        else if(data[i].status == 'Done'){
            done += `
            <button onclick="update(${i});returnIndice(${i})" id="${i}" class="w-100 bg-white bg-white border-0 border-secondary border-bottom d-flex" data-bs-toggle="modal" data-bs-target="#Modal">
                <div class="fs-2">
                    <i class='bx bx-check-circle' style='color:#00d68a'  ></i>
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
            document.getElementById('done-tasks').innerHTML = done;
            count_done+=1;
            count_do.innerText=count_done;
        }
    }  
}

//function Modifier 
function update(i){
    title.value = data[i].title;
    feature.value = data[i].feature;
    priority.value = data[i].priority;
    Status.value = data[i].status;
    date.value = data[i].date;
    description.value = data[i].description;
    submit.innerHTML = 'update';
    _delete.style.display = 'block';
    mode = 'update';
    index = i;
    Afficher();
}
//return indice 
function returnIndice(i){
    pointer = i;
    return pointer;
}
//function Delete
_delete.addEventListener("click", function supprimer() {
    data.splice(pointer,1);
    localStorage.tasks = JSON.stringify(data);
    Afficher();
});
document.getElementById("modal-footer").appendChild(_delete);