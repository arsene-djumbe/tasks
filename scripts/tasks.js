const submit_el = document.querySelector("#submit")
const text_el = document.querySelector("#text")
const text_el_value = document.querySelector("#text").value;
const tasks_el = document.querySelector("#tasks_el")
window.addEventListener('load', () => {

  submit_el.addEventListener("click", (e) => {
    
    
    if (text_el.value.length > 0) {
      render()
      return false;
    }
    else {
     return;
    }
  function render() {
      const tasks_container = document.createElement("div");
        tasks_container.classList.add("tasks_container");

        tasks_el.appendChild(tasks_container)

      const contents = document.createElement("div");
        contents.classList.add("contents");

        tasks_container.appendChild(contents);

      const input_el = document.createElement("textarea");
        input_el.classList.add("input_el");
        input_el.setAttribute("readonly", "readonly");
        input_el.innerHTML = text_el.value;

        contents.appendChild(input_el);

      const actions = document.createElement("div");
        actions.classList.add("actions");

        tasks_container.appendChild(actions);

      const edit_el = document.createElement("button");
        edit_el.classList.add("edit_el");
        edit_el.innerHTML = "Edit";

      const delete_el = document.createElement("button");
        delete_el.classList.add("delete_el");
        delete_el.innerHTML = "Delete";

        actions.appendChild(edit_el);
        actions.appendChild(delete_el);

        text_el.value = "";

   

  document.querySelector(".delete_el").addEventListener('click', () => {
    tasks_el.removeChild(tasks_container);
  })

  document.querySelector(".edit_el").addEventListener('click', () => {
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

}
  })
})