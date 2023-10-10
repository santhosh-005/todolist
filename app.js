let input = document.getElementById("input");
let addBtn =document.getElementById("button");
let todolist=document.getElementById("todolist")

let todoArray=[];

addBtn.onclick=()=>{
    if(input.value!=''){
        todoArray.push(input.value);
        input.value="";
        updatetodolist();
    }
}

function updatetodolist(){
    todolist.innerHTML=null;
    todoArray.forEach((element,index)=>{
        todolist.innerHTML+=(`<li>${element}<a onClick=editFunction(${index})> &nbsp Edit</a> <a onClick=removeFunction(${index})>X</a> </li>`);
})
}    

function editFunction(index){
  let value=prompt();
  if(value==""){
    updatetodolist();
  }
  else{
  todoArray[index]=value;
  todoArray.splice(index,1,value)
  updatetodolist();}
}

function removeFunction(index){
    todoArray.splice(index,1);
    updatetodolist();
}