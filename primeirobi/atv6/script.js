document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addBtn = document.getElementById("add-btn");
    const taskList = document.getElementById("task-list");

    // Adicionar tarefa
    addBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Por favor, digite uma tarefa!");
            return;
        }

        const newTask = document.createElement("li");
        newTask.textContent = taskText;
        newTask.classList.add("task");

        // Botão de Concluir Tarefa
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Concluir";
        completeBtn.classList.add("complete-btn");
        
        completeBtn.addEventListener("click", () => {
            newTask.classList.toggle("completed");  // Marca/desmarca a tarefa como concluída
            completeBtn.textContent = newTask.classList.contains("completed") ? "Desmarcar" : "Concluir";
        });

        // Botão de Excluir Tarefa
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Excluir";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", () => {
            newTask.classList.add("fade-out");  // Anima a tarefa ao remover
            setTimeout(() => {
                newTask.remove();
            }, 500);  // Espera a animação de fade-out terminar antes de remover
        });

        // Adiciona os botões à tarefa
        newTask.appendChild(completeBtn);
        newTask.appendChild(deleteBtn);

        // Animação de entrada da tarefa
        newTask.classList.add("fade-in");
        taskList.appendChild(newTask);

        // Limpar o campo de input e dar foco novamente
        taskInput.value = "";
        taskInput.focus();
    });

    // Adicionar tarefa ao pressionar Enter
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addBtn.click();
        }
    });
});
