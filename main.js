document.addEventListener("DOMContentLoaded", init);

function init(){
    var n = prompt("введите количество пунктов меню");
    AddPanelAddItemMenu();
    var menu = createMenu(n);
    document.body.appendChild(menu);
}

function AddPanelAddItemMenu() {
    let panel = document.createElement("div");
    panel.className = "panel-add-item"
   
    var input = document.createElement("input");
    input.id = "countAddItem";
    input.type = "text";
    input.size = "20";
    input.className = "input-count-add-item";
    panel.appendChild(input);

    var submit = document.createElement("input");
    submit.type="submit";
    submit.value = "Отправить";
    submit.className = "submit-btn";
    submit.addEventListener('click', addNewItemMenu);
    panel.appendChild(submit);
    document.body.appendChild(panel);
}

function addNewItemMenu(){
    var countItem = parseInt( document.getElementById("countAddItem").value);
    console.log(countItem);
    var changeUL = document.querySelector(".menu");
    for (let i = 0; i < countItem; i++) {
        changeUL.appendChild(createMenuItem());            
    }
};



function createMenu(n){
    var ul = document.createElement("ul");   
    ul.className = "menu";
    for (let i = 0; i < n;i++) {
       
        let menuItem = createMenuItem();
        ul.appendChild(menuItem);        
    } 
    return ul;
}

function createMenuItem() {
    var li = document.createElement("li");   
    li.className="menu-item";

    let a = document.createElement("a");  
    a.className = "menu-link";            
    a.textContent = "menu-item ";

    let del = document.createElement("span");
    del.className = "delete";
    del.textContent="x";
    del.addEventListener('click', function(e) {
       var isDelete = confirm("Хотите удалить элемент меню?");
       if (isDelete ) 
        del.parentElement.remove();
    });

    li.appendChild(del);
    li.appendChild(a);  
    return li;
 }
