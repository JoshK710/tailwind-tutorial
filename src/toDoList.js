document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const todoText = input.value.trim();

    if (todoText !== "") {
      // Create a new list item
      const listItem = document.createElement("li");
      listItem.classList.add(
        "mb-2",
        "p-3",
        "bg-white",
        "flex",
        "flex-col",
        "items-center",
        "rounded-xl"
      );

      const todo = document.createElement("p");
      todo.textContent = todoText;

      // Add a button to remove the todo
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("ml-2", "text-red-500", "align-middle");
      removeButton.addEventListener("click", () => {
        listItem.remove();
      });

      listItem.appendChild(todo);
      listItem.appendChild(removeButton);

      // Add click event to mark todo as completed
      listItem.addEventListener("click", () => {
        todo.classList.toggle("completed");
      });

      // Append the list item to the todo list
      todoList.appendChild(listItem);

      // Clear the input field
      input.value = "";
    }
  });
});
