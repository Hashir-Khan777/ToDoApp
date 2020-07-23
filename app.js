// access input and unorder list
var input = document.getElementById("label");
var items = document.getElementById("items");

// add in list functionality
function add() {
  // creat list items and appending
  var li = document.createElement("li");
  var litext = document.createTextNode(input.value);
  li.setAttribute("class", "list-item");
  li.setAttribute("id", "todoitem");
  li.appendChild(litext);
  items.appendChild(li);

  // creat buttons for li
  // creat edit button
  var editbtn = document.createElement("button");
  var editText = document.createTextNode("Edit");
  editbtn.setAttribute("class", "list-btn");
  editbtn.setAttribute("onclick", "editLi(this)");
  editbtn.appendChild(editText);

  // craet deletebtn
  var delbtn = document.createElement("button");
  var delText = document.createTextNode("Delete");
  delbtn.setAttribute("class", "list-btn");
  delbtn.setAttribute("onclick", "delLi(this)");
  delbtn.appendChild(delText);

  // append buttons to li
  li.appendChild(editbtn);
  li.appendChild(delbtn);

  // for empty the input after appending
  input.value = "";
}

// delet all functionality
function deleteall() {
  items.innerHTML = "";
}

// delete one list item
function delLi(del) {
  del.parentNode.remove();
}

// edit list functionality
function editLi(edit) {
  // create button in edit btn
  var b = document.createElement("button");
  var btext = document.createTextNode("update");
  b.setAttribute("class", "input-btn");
  b.setAttribute("onclick", "update(this)");
  b.appendChild(btext);
  // create input in edit btn
  var inp = document.createElement("input");
  inp.setAttribute("class", "todoinput");
  inp.setAttribute("autocomplete", "off");
  inp.value = edit.previousSibling.nodeValue;
  // create li in edit btn
  var list = document.createElement("li");
  list.setAttribute("class", "list-item");
  list.appendChild(inp);
  list.appendChild(b);
  // show list in HTML
  edit.parentNode.replaceWith(list);
}

// update li functionality
function update(up) {
  // creat update edit button
  var editbtn = document.createElement("button");
  var editText = document.createTextNode("Edit");
  editbtn.setAttribute("class", "list-btn");
  editbtn.setAttribute("onclick", "editLi(this)");
  editbtn.appendChild(editText);

  // craet update delete btn
  var delbtn = document.createElement("button");
  var delText = document.createTextNode("Delete");
  delbtn.setAttribute("class", "list-btn");
  delbtn.setAttribute("onclick", "delLi(this)");
  delbtn.appendChild(delText);

  // create update li
  var lis = document.createElement("li");
  var lisText = document.createTextNode(up.previousSibling.value);
  lis.setAttribute("class", "list-item");
  lis.appendChild(lisText);
  lis.appendChild(editbtn);
  lis.appendChild(delbtn);

  // append update li to lisi
  up.parentElement.replaceWith(lis);
}
