const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


function addTodo() {
  list.appendChild(createTarea());
}

function createTarea() {
  var count = parseInt(itemCountSpan.innerText);
  count++;

  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.value = false;
  checkbox.onclick = function () { chkClickFnc(this); }; //Encontré como bindear el onclick dinámico acá: https://stackoverflow.com/questions/249074/how-to-change-onclick-handler-dynamically

  var li = document.createElement("li");
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode("Tarea " + count));

  itemCountSpan.innerText = count; //Se setea la cantidad de items

  uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) + 1; //Se setea la cantidad de items destildados (se le suma uno porque se agrega destildado por default

  return li;
}

function chkClickFnc(checkbox) { //Cuando se realiza click en un checkbox
  if (checkbox.checked == true) {
    uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) - 1; //Se quita una tarea "unchecked" ya que se realizó
  } else {
    uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) + 1; //Se suma una tarea "unchecked" ya que NO se realizó
  }
}

function marcarTodos(source) {
  var checkboxes = document.getElementsByTagName('input'); //obtenemos todos los controles del tipo Input
  for (i = 0; i < checkboxes.length; i++) //recoremos todos los controles 		
  {
    if (checkboxes[i].type == "checkbox") //solo si es un checkbox entramos
    {
      checkboxes[i].checked = source.checked; //si es un checkbox le damos el valor del checkbox que lo llamó (Marcar/Desmarcar Todos)
    }
  }

  if (!source.checked) {
    uncheckedCountSpan.innerText = checkboxes.length - 1;
  } else {
    uncheckedCountSpan.innerText = 0;
  }
}
