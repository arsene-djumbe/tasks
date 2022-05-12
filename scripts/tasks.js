const submit_el = document.querySelector("#submit")
const text_el = document.querySelector("#text")
const text_el_value = document.querySelector("#text").value;
const tasks_el = document.querySelector("#tasks_el")
window.addEventListener('load', () => {
 
  submit_el.addEventListener("click", (e) => {
    e.preventDefault();

      const tasks_container = document.createElement("div");
        tasks_container.classList.add("tasks_container");

      const contents = document.createElement("div");
        contents.classList.add("contents");

        

      const input_el = document.createElement("textarea");
        input_el.classList.add("input_el");
        input_el.setAttribute("readonly", "readonly");

        if (text_el.value) {
          input_el.innerHTML = text_el.value;
        }

        else {
          alert("Please fill out the form!")
          return false;
        }
        contents.appendChild(input_el);

        tasks_container.appendChild(contents);

      const actions = document.createElement("div");
        actions.classList.add("actions");

        

      const edit_el = document.createElement("button");
        edit_el.classList.add("edit_el");
        edit_el.innerHTML = "Edit";

      const delete_el = document.createElement("button");
        delete_el.classList.add("delete_el");
        delete_el.innerHTML = "Delete";

        actions.appendChild(edit_el);
        actions.appendChild(delete_el);

        tasks_container.appendChild(actions);

        tasks_el.appendChild(tasks_container)

        text_el.value = "";
        render();
    

  function render() {  
  edit_el.addEventListener('click', () => {
    if (edit_el.innerHTML.toLowerCase() == "edit") {
      input_el.removeAttribute("readonly");
      input_el.focus();
      edit_el.innerHTML = "save";
    }
    else {

      input_el.setAttribute("readonly", "readonly");
      edit_el.innerHTML = "edit";
    }
  })

  delete_el.addEventListener('click', () => {
    tasks_el.removeChild(tasks_container);
  })

}
 
})

  
})