    
    const inputData = document.getElementById("inputData");
    const input_Form = document.getElementById("To-Do_list_form");
    const taskList = document.getElementById("tasks");
   const title=document.getElementById("list-title");
   const comp_taskID=document.getElementById("comp_task");
 
  

    let To_do_list = [];


    function Update_list() {
       
        const inputValue = inputData.value.trim();
        if (inputValue === "") return; 
    
        To_do_list.push(inputValue);
    
        // Create task elements
        const tasksContainer = document.createElement("div");
        tasksContainer.classList.add("task-list");
    
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
    
        const contentParagraph = document.createElement("p");
        contentParagraph.textContent = inputValue;
    
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("sidebtn", "deletbtn");
        deleteBtn.textContent = "Delete";
    
        const editBtn = document.createElement("button");
        editBtn.classList.add("sidebtn");
        editBtn.textContent = "Edit";


        checkBox.addEventListener("change", (event) => trigger(event, contentParagraph));
     
        // Delete and edit buttons
        deleteBtn.addEventListener("click", () => {
            tasksContainer.remove();
            To_do_list = To_do_list.filter(task => task !== inputValue); 
        });
    
        editBtn.addEventListener("click", () => {
            inputData.value = inputValue;
            tasksContainer.remove();
            To_do_list = To_do_list.filter(task => task !== inputValue); 
        });
    
        // Append elements to task container
        tasksContainer.appendChild(checkBox);
        tasksContainer.appendChild(contentParagraph);
        tasksContainer.appendChild(deleteBtn);
        tasksContainer.appendChild(editBtn);
    
        // Append task container to task list
        taskList.appendChild(tasksContainer);
    
        
        inputData.value = "";


        
    }
    
    // Form submition
    input_Form.addEventListener("submit", (event) => {
        event.preventDefault();
        Update_list();
        title.style.display="block";
     
    });
    
  
 function trigger(event, contentParagraph) {

    if (event.target.checked) {
     
        contentParagraph.innerHTML = `<del>${contentParagraph.textContent}</del>`;
       
       
    } else {
        contentParagraph.innerHTML = contentParagraph.textContent; // Restore original text if unchecked
    }
}


    
    
/* const inputData= document.getElementById("inputData");
const input_Form= document.getElementById("To-Do_list_form");
const taskList= document.getElementById("tasks");
const container= document.querySelector(".tasks");




let To_do_list=[];

function Update_list(){

    inputValue=inputData.value;
    To_do_list.push(inputValue);

 
        
        const tasksContainer= document.createElement("div");
        tasksContainer.classList.add("task-list");

        const checkBox=document.createElement("input");
        checkBox.type="checkbox"

        const ContentParagraph= document.createElement("p");
        ContentParagraph.innerHTML=inputValue;

        const deltebtn1= document.createElement("button");
        deltebtn1.classList.add("sidebtn deletbtn");
        deltebtn1.innerHTML="Delete"

        const editbtn2= document.createElement("button");
        editbtn2.classList.add("sidebtn");
        editbtn2.innerHTML="Edit"

        tasksContainer.appendChild(checkBox);
        tasksContainer.appendChild(ContentParagraph);
        tasksContainer.appendChild(deltebtn1);
        tasksContainer.appendChild(editbtn2);

        container.appendChild(tasksContainer);




}



input_Form.addEventListener("submit" , (event)=>{

    event.preventDefault();
    Update_list();

    
}) 

*/