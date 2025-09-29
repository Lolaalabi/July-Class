// const todoForm = document.getElementById("todo-form");
// const todoInput = document.getElementById("todo-input");
// const todoList = document.getElementById("todo-list");

// todoForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const task = todoInput.value.trim();
//   if (task === "") return;

//   const li = document.createElement("li");

//   const span = document.createElement("span");
//   span.textContent = task;

//   //toggle complete
//   span.addEventListener("click", function () {
//     li.classList.toggle("completed");
//   });

//   // delete button
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "X";
//   deleteBtn.className = "delete-btn";
//   deleteBtn.addEventListener("click", function () {
//     li.remove();
//   });

//   li.appendChild(span);
//   li.appendChild(deleteBtn);
//   todoList.appendChild(li);

//   todoInput.value = "";
// });


  const $todoForm = $("#todo-form");
  const $todoInput = $("#todo-input");
  const $todoList = $("#todo-list");

  $todoForm.on("submit", function(e) {
    e.preventDefault();

    const task = $todoInput.val().trim();
    if (task === "") return;

    // Create list item
    const $li = $("<li>");

    // Create span with task text
    const $span = $("<span>").text(task);

    // Toggle complete
    $span.on("click", function() {
      $(this).closest("li").toggleClass("completed");
    });

    // Create delete button
    const $deleteBtn = $("<button>")
      .text("X")
      .addClass("delete-btn")
      .on("click", function() {
        $(this).closest("li").remove();
      });

    // Append span and button to li
    $li.append($span).append($deleteBtn);

    // Append li to todo list
    $todoList.append($li);

    // Clear input
    $todoInput.val("");
  });
