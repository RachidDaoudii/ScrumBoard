var title = document.getElementById("title");
var feature = document.getElementById("feature");
var priority = document.getElementById("Priority");
var Status = document.getElementById("status");
var date = document.getElementById("date");
var description = document.getElementById("description");

let data;
if(localStorage.tasks !=null){
    data = JSON.parse(localStorage.tasks);
}
else{
    data = []
}

Add();
function Ajouter(){
    //create tasks
    let tasks = {
        title : title.value,
        type : feature.checked? "feature" : "bug",
        priority : priority.value,
        status : Status.value,
        date : date.value,
        description : description.value
    };
    data.push(tasks);
    localStorage.setItem('tasks',    JSON.stringify(data)     );
    clearinput();
    Add();
}

function clearinput(){
    title.value = '';
    feature.checked = true;
    priority.value = 1;
    Status.value = 1;
    date.value = 'jj/mm/aaaa';
    description.value = '';
}

function Add(){
    let btn ='';
    for(let i=0; i<data.length;i++){
        if(data[i].status == 'todo'){
            btn += `
            <button  class="w-100 bg-white bg-white border-0 rounded-bottom d-flex" data-bs-toggle="modal" data-bs-target="#Modal">
                <div class="fs-2">
                    <i class='bx bx-help-circle' style='color:#00d68a'></i> 
                </div>
                <div class="p-2 text-start">
                    <div class="fw-bold">${data[i].title}</div>
                    <div class="pt-1">
                        <div class="text-secondary">#13 created in ${data[i].date}</div>
                        <div class="">${data[i].description}</div>
                    </div>
                    <div class="pt-1">
                        <span class="p-1 btn btn-primary border border-0">High</span>
                        <span class="p-1 btn btn-secondary btn-sm border border-0 text-black">Bug</span>
                    </div>
                </div>
            </button>`;
            document.getElementById('to-do-tasks').innerHTML = btn;
        }
        else if(data[i].status == 'progress'){
            btn += `
            <button  class="w-100 bg-white bg-white border-0 rounded-bottom d-flex" data-bs-toggle="modal" data-bs-target="#Modal">
                <div class="fs-2">
                    <i class='bx bx-loader-alt' style='color:#00d68a'></i> 
                </div>
                <div class="p-2 text-start">
                    <div class="fw-bold">${data[i].title}</div>
                    <div class="pt-1">
                        <div class="text-secondary">#13 created in ${data[i].date}</div>
                        <div class="">${data[i].description}</div>
                    </div>
                    <div class="pt-1">
                        <span class="p-1 btn btn-primary border border-0">High</span>
                        <span class="p-1 btn btn-secondary btn-sm border border-0 text-black">Bug</span>
                    </div>
                </div>
            </button>`;
            document.getElementById('in-progress-tasks').innerHTML = btn;
        }
        else if(data[i].status == 'done'){
            btn += `
            <button  class="w-100 bg-white bg-white border-0 rounded-bottom d-flex" data-bs-toggle="modal" data-bs-target="#Modal">
                <div class="fs-2">
                    <i class='bx bx-check-circle' style='color:#00d68a'  ></i>
                </div>
                <div class="p-2 text-start">
                    <div class="fw-bold">${data[i].title}</div>
                    <div class="pt-1">
                        <div class="text-secondary">#13 created in ${data[i].date}</div>
                        <div class="">${data[i].description}</div>
                    </div>
                    <div class="pt-1">
                        <span class="p-1 btn btn-primary border border-0">High</span>
                        <span class="p-1 btn btn-secondary btn-sm border border-0 text-black">Bug</span>
                    </div>
                </div>
            </button>`;
            document.getElementById('done-tasks').innerHTML = btn;
        }
        
    }
    

    
}







