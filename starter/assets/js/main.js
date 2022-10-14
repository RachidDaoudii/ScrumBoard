function Ajouter(){
    var title = document.getElementById("title").value;
    var feature = document.getElementById("feature").checked ? "feature" : "bug";
    var priority = document.getElementById("Priority").value;
    var status = document.getElementById("status").value;
    var date = document.getElementById("date").value;
    var description = document.getElementById("description").value;
    //create button
    if(status == "todo"){
        var btn = document.querySelector(".todo");
    }
    else if(status == "progress"){
        var btn = document.querySelector(".progres");
    }
    else if(status == "done"){
        var btn = document.querySelector(".done");
    }
    btn.insertAdjacentHTML("beforeend",`<button class=" w-100 bg-white border-0 border-secondary border-bottom d-flex" data-bs-toggle="modal" data-bs-target="#Modal" id="btn">
        <div class="fs-2">
            <i class='bx bx-help-circle' style='color:#00d68a'></i> 
        </div>
        <div class="p-2 text-start">
            <div class="fw-bold" id="titre">${title}</div>
            <div class="pt-1">
                <div class=" text-secondary">#1 created in ${date}</div>
                <div class="" title="">${description}</div>
            </div>
            <div class="pt-1">
                <span class="p-1 btn btn-primary border border-0">High</span>
                <span class="p-1 btn btn-secondary border border-0 text-black">Feature</span>
            </div>
        </div>
    </button>`)  
}







