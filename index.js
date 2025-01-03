const inputbox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function addTask(){
    if(inputbox.value === ''){
        alert("Write something")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = ""
}
// addTask()

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        //this  will create a class of checked and if class is not
        //present then it will create a class
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
     listContainer.innerHTML = localStorage.getItem("data")
}
showTask()