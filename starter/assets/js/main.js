let id = 1;
let title = document.getElementById("title");
let feature = document.getElementById("feature");
let bug = document.getElementById("bug");
let priority = document.getElementById("Priority");
let Status = document.getElementById("status");
let date = document.getElementById("date");
let description = document.getElementById("description");
let submit = document.getElementById('submit');
let mode = 'save';
let index ;



let data;
if(localStorage.tasks !=null){
    data = JSON.parse(localStorage.tasks);
}
else{
    data = []
}

Afficher();
function Ajouter(){
    let tasks = {
        id : id,
        title : title.value,
        type : feature.checked? "feature" : "bug",
        priority : priority.value,
        status : Status.value,
        date : date.value,
        description : description.value
    };
    if(mode == 'save'){
        data.push(tasks);
        localStorage.setItem('tasks',    JSON.stringify(data)     );
        clearinput();
        Afficher();
    }
    else{
        data[index] = tasks;
        localStorage.setItem('tasks',    JSON.stringify(data)     );
        clearinput();
        submit.innerHTML = 'save';
        mode = 'save';
        Afficher();
    }
    
}

function clearinput(){
    title.value = '';
    feature.checked = true;
    priority.value = 1 ;
    Status.value = 1;
    date.value = 'jj/mm/aaaa';
    description.value = '';
}

function Afficher(){
    let todo ='';
    let progress ='';
    let done ='';
    let btn ='';

    for(let i=0; i<data.length;i++){
        if(data[i].status == 'todo'){
            todo+= `
            <button onclick="update(${i})" id="${i+1}" class="w-100 bg-white bg-white border-0 border-secondary border-bottom d-flex" data-bs-toggle="modal" data-bs-target="#Modal">
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
                        <span class="p-1 btn btn-primary border border-0">High</span>
                        <span class="p-1 btn btn-secondary btn-sm border border-0 text-black">Bug</span>
                    </div>
                </div>
            </button>`;
            document.getElementById('to-do-tasks').innerHTML = todo;
        }
        else if(data[i].status == 'progress'){
            progress += `
            <button onclick="update(${i})" id="${i+1}" class="w-100 bg-white bg-white border-0 border-secondary border-bottom d-flex" data-bs-toggle="modal" data-bs-target="#Modal">
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
                        <span class="p-1 btn btn-primary border border-0">High</span>
                        <span class="p-1 btn btn-secondary btn-sm border border-0 text-black">Bug</span>
                    </div>
                </div>
            </button>`;
            document.getElementById('in-progress-tasks').innerHTML = progress;
        }
        else if(data[i].status == 'done'){
            done += `
            <button onclick="update(${i})" id="${i+1}" class="w-100 bg-white bg-white border-0 border-secondary border-bottom d-flex" data-bs-toggle="modal" data-bs-target="#Modal" >
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
                        <span class="p-1 btn btn-primary border border-0">High</span>
                        <span class="p-1 btn btn-secondary btn-sm border border-0 text-black">Bug</span>
                    </div>
                </div>
            </button>`;
            document.getElementById('done-tasks').innerHTML = done;
            
        }
        data[i].id++;
    }  
}


function update(i){
    title.value = data[i].title;
    priority.value = data[i].priority;
    Status.value = data[i].status;
    date.value = data[i].date;
    description.value = data[i].description;
    submit.innerHTML = 'update';
    mode = 'update'
    index = i;
    let sup = '';
    sup +=`<button type="button" id="delete" class="btn btn-red d-none" >Delete</button>`;
    document.createElement('modal-footer')= sup;
}

function supprimer(i){
    let del = document.getElementById('delete');
    console.log(i);
}


