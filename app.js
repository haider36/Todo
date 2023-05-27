function addtodo(){
  var list = document.getElementById("list");
  var todo = document.getElementById("todo");
  var date =new Date()
list.innerHTML=`
<li>
<div class="inpt">
<input class="input-todo" type="text" value= "${todo.value}" disabled>
</div>
<button onclick="deltodo()">Delete</button>
<button onclick="editTodo(this)">Edit</button>
  </li>
`
  // console.log(todo.value);
  // var li = document.createElement("li");
  // var text = document.createTextNode(todo.value);
  // li.appendChild(text);
  // var delButton = document.createElement("button");
  // var delText = document.createTextNode("Delete");
  // delButton.appendChild(delText)
  // delButton.setAttribute("onclick","deltodo()")
  // var editButton = document.createElement("button");
  // var editText = document.createTextNode("Edit");
  // editButton.appendChild(editText)
  // editButton.setAttribute("onclik","editTodo()")
  // li.appendChild(delButton)
  // li.appendChild(editButton)
  // list.prepend(li)
  // todo.value=""
}

function deltodo(){
  event.target.parentNode.remove()
}
var edit = false;
function editTodo(e){
  // var oldValue = event.target.parentNode.firstChild.nodeValue;
  // var editValue = prompt("Enter update value",oldValue)
  // event.target.parentNode.firstChild.nodeValue=editValue;
//   if(editTodo){
  if(edit){
    e.parentNode.childNodes[1].disabled=true;
    e.parentNode.childNodes[1].blur()
    e.parentNode.childNodes[5].innerHTML="Edit"
    edit = false;
  }else{
    e.parentNode.childNodes[1].disabled=false;
    e.parentNode.childNodes[1].focus()
    e.parentNode.childNodes[5].innerHTML="Update"
      edit=true;
  }
  
//     e.parentNode.childnodes[5].innerHTML="Edit"
//     edit=false;
//   }else{
// e.parentNode.childnodes[1].disabled = false;
// e.parentNode.childnodes[1].focus()
// e.parentNode.childnodes[5].innerHTML="Update"
// edit=true;
//   }
}

